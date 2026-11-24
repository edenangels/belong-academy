#!/usr/bin/env bash
# deploy-pages.sh — deploy Belong Academy to Cloudflare Pages from this machine.
#   scripts/deploy-pages.sh            # tests, bump ?v= + sw VERSION, build, deploy, verify
#   scripts/deploy-pages.sh --no-bump  # redeploy the current version
#   BRANCH=preview scripts/deploy-pages.sh --no-bump  # a preview link (preview.<project>.pages.dev), live site untouched
# Why: on 2026-09-16 the GitHub account hosting five sites was suspended and every
# site went dark. Hosting now lives on Cloudflare Pages (unlimited bandwidth, no
# build minutes), deployed straight from the working tree; GitHub is a mirror.
set -euo pipefail
cd "$(dirname "$0")/.."
PROJECT=${PAGES_PROJECT:-belong-academy}
BRANCH=${BRANCH:-main}
# where the build is made: ACADEMY_WORK if set, else the Ultra Touch SSD (João's Mac), else a temp folder
# (the build is ~4 MB; no video lives in the academy)
if [ -n "${ACADEMY_WORK:-}" ]; then DIST="$ACADEMY_WORK/belong-dist"
elif [ -d "/Volumes/Ultra Touch" ]; then DIST="/Volumes/Ultra Touch/Academy-OS/work/belong-dist"
else DIST="$(mktemp -d)/belong-dist"; fi
# npm's cache must be somewhere writable: a cache on an unplugged drive makes every npx fail
NPMC="${NPM_CONFIG_CACHE:-${npm_config_cache:-$HOME/.npm}}"; mkdir -p "$NPMC" 2>/dev/null || NPMC="$HOME/.npm"
export NPM_CONFIG_CACHE="$NPMC" npm_config_cache="$NPMC"
node test/run.mjs >/dev/null || { echo "✗ tests failing — not deploying"; exit 1; }
if [ "${1:-}" != "--no-bump" ]; then
  V=$(grep -o "v=bel[0-9]*" index.html | sort -u | head -1 | grep -oE "[0-9]+"); N=$((V+1))
  sed -i '' "s/v=bel$V/v=bel$N/g; s/'bel$V'/'bel$N'/g" index.html; sed -i '' "s/belong-v$V/belong-v$N/" sw.js
  echo "· version bel$V → bel$N"
fi
rm -rf "$DIST"; mkdir -p "$DIST"
rsync -a --exclude .git --exclude node_modules --exclude .stale --exclude media/reels --exclude exports --exclude .tmp-audio --exclude test --exclude scripts --exclude '*.md' --exclude .github --exclude docs --exclude .claude --exclude .wrangler --exclude dist --exclude firebase.json --exclude firestore.indexes.json ./ "$DIST/"
( cd "$DIST"
  for f in brands/belong/brand.js core/brandkit.js core/app.js core/curriculum.js core/team.js core/localdb.js brands/belong/content.js data.js sw.js; do npx --yes esbuild@0.24.2 "$f" --minify --charset=utf8 --outfile="$f" --allow-overwrite --log-level=error; done
  npx --yes esbuild@0.24.2 core/auth.js --minify --charset=utf8 --format=esm --outfile=core/auth.js --allow-overwrite --log-level=error
  npx --yes esbuild@0.24.2 core/styles.css --minify --outfile=core/styles.css --allow-overwrite --log-level=error
  printf '/*\n  X-Content-Type-Options: nosniff\n/knowledge/*\n  Cache-Control: public, max-age=600\n/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n' > _headers
  npx --yes wrangler@4.110.0 pages deploy . --project-name "$PROJECT" --branch "$BRANCH" --commit-dirty=true 2>&1 | grep -E "Deployment complete|Success|error|Error" )
sleep 6
HOST=$([ "$BRANCH" = main ] && echo "$PROJECT.pages.dev" || echo "$BRANCH.$PROJECT.pages.dev")
LIVE=$(curl -sL "https://$HOST/?nc=$RANDOM" | grep -o "v=bel[0-9]*" | sort -u | head -1)
echo "· live on $HOST: ${LIVE:-none}"
