#!/usr/bin/env bash
# build.sh — make the folder you put on a web server.
#
#   scripts/build.sh            # → dist/ (minified if Node.js is installed, plain copy otherwise)
#   scripts/build.sh --no-min   # → dist/ without minifying
#
# The academy is plain static files (HTML, CSS, JS, JSON, fonts). There is no
# server code and no database. dist/ is the source minus the developer-only
# folders (docs, tests, scripts, extras), so it can be uploaded anywhere:
# GitHub Pages, Cloudflare Pages, Netlify, or any ordinary web host (FTP/cPanel).
# It also works inside a sub-folder, e.g. https://your-site.com/academy/.
set -euo pipefail
cd "$(dirname "$0")/.."
OUT=dist
rm -rf "$OUT"; mkdir -p "$OUT"

# copy everything the browser needs, nothing it doesn't
tar --exclude=./dist --exclude=./.git --exclude=./.github --exclude=./node_modules \
    --exclude=./docs --exclude=./extras --exclude=./test --exclude=./scripts \
    --exclude='./*.md' --exclude=./core/firestore.rules --exclude=.DS_Store \
    --exclude=./.claude --exclude=./.wrangler -cf - . | tar -xf - -C "$OUT"

if [ "${1:-}" != "--no-min" ] && command -v npx >/dev/null 2>&1 && npx --yes esbuild@0.24.2 --version >/dev/null 2>&1; then
  echo "· minifying (esbuild)"
  ( cd "$OUT"
    for f in brands/belong/brand.js brands/belong/content.js core/brandkit.js core/app.js core/curriculum.js \
             core/team.js core/localdb.js data.js sw.js; do
      npx --yes esbuild@0.24.2 "$f" --minify --charset=utf8 --outfile="$f" --allow-overwrite --log-level=error
    done
    npx --yes esbuild@0.24.2 core/auth.js --minify --charset=utf8 --format=esm --outfile=core/auth.js --allow-overwrite --log-level=error
    npx --yes esbuild@0.24.2 core/styles.css --minify --outfile=core/styles.css --allow-overwrite --log-level=error )
else
  echo "· not minifying (fine: the site works the same, just a little heavier)"
fi

# caching rules for Cloudflare Pages and Netlify (other hosts ignore this file)
printf '/*\n  X-Content-Type-Options: nosniff\n/knowledge/*\n  Cache-Control: public, max-age=600\n/fonts/*\n  Cache-Control: public, max-age=31536000, immutable\n' > "$OUT/_headers"

echo "✓ built $OUT/ ($(du -sh "$OUT" | cut -f1)) — upload the CONTENTS of $OUT/ to your web host"
