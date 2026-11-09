#!/usr/bin/env bash
# export-ship.sh — produce the clean hand-over copy for Belong (their own GitHub/hosting).
#   scripts/export-ship.sh [OUT_DIR]     default: ../belong-academy-ship  (+ ../Belong-Academy.zip)
# The copy has: the site, tests, the portable build, the setup/Claude guides (docs/ship/*),
# the GitHub Pages workflow and the AI-gateway source. It leaves out: git history, Meridante's
# deploy tooling (SSD, wrangler), internal feedback notes, Firebase project files, key-needing scripts.
set -euo pipefail
cd "$(dirname "$0")/.."
SRC=$(pwd)
OUT=${1:-"$SRC/../belong-academy-ship"}
ZIP="$(dirname "$OUT")/Belong-Academy.zip"
GW=${GATEWAY_SRC:-"$HOME/academy-ai-gateway"}

rm -rf "$OUT"; mkdir -p "$OUT"
rsync -a --exclude .git --exclude .github --exclude docs --exclude scripts --exclude dist \
  --exclude node_modules --exclude .claude --exclude .wrangler --exclude .DS_Store \
  --exclude media/reels --exclude .stale --exclude exports --exclude .tmp-audio \
  --exclude '*.md' --exclude firebase.json --exclude firestore.indexes.json ./ "$OUT/"

mkdir -p "$OUT/scripts" "$OUT/docs" "$OUT/.github/workflows" "$OUT/extras/ai-gateway/src"
cp scripts/build.sh scripts/build-knowledge.mjs scripts/build-tags.mjs scripts/build-graph.mjs "$OUT/scripts/"
cp docs/ship/README.md docs/ship/CLAUDE.md "$OUT/"
cp docs/ship/SETUP.md docs/ship/ACCOUNTS-LATER.md "$OUT/docs/"
cp docs/ship/pages.yml "$OUT/.github/workflows/pages.yml"
cp docs/ship/ai-gateway/README.md "$OUT/extras/ai-gateway/README.md"
cp "$GW/wrangler.jsonc" "$OUT/extras/ai-gateway/"
# the gateway's allow-list: Belong's own addresses go here (docs: extras/ai-gateway/README.md)
python3 - "$GW/src/index.js" "$OUT/extras/ai-gateway/src/index.js" <<'PY'
import re, sys
s = open(sys.argv[1]).read()
s = re.sub(r"const ALLOWED_ORIGINS = \[[\s\S]*?\];", '''const ALLOWED_ORIGINS = [
  "https://academy.your-site.com",        /* ← your academy's address(es) */
  "https://belong-academy.pages.dev",
  "http://localhost:8080", "http://127.0.0.1:8080",
];''', s, count=1)
open(sys.argv[2], "w").write(s)
PY
# the dormant Firebase rules name the platform admin: theirs, not Meridante's
sed -i.bak "s/meridante\.pt@gmail\.com/admin@your-company.com/g" "$OUT/core/firestore.rules" && rm "$OUT/core/firestore.rules.bak"
printf 'dist/\nnode_modules/\n.DS_Store\n.wrangler/\n' > "$OUT/.gitignore"
chmod +x "$OUT/scripts/build.sh"

# sanity: tests pass in the copy, nothing internal leaked
( cd "$OUT" && node test/run.mjs | tail -1 )
if grep -rIlE --exclude-dir=extras -e "Ultra Touch" -e "meridante\.pt@gmail" -e "AIza[0-9A-Za-z_-]{30}" "$OUT" ; then echo "✗ internal reference leaked (above)"; exit 1; fi

rm -f "$ZIP"; ( cd "$(dirname "$OUT")" && zip -qr "$ZIP" "$(basename "$OUT")" -x '*.DS_Store' )
echo "✓ $OUT  ($(du -sh "$OUT" | cut -f1))"
echo "✓ $ZIP  ($(du -h "$ZIP" | cut -f1))"
