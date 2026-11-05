#!/usr/bin/env python3
"""Build media/covers/sm/<name>.webp — every cover poster at 640 px wide.

Path-row tiles and course cards show a poster at ~300 css px; shipping the
960-1280 px original to them cost ~120 KB on the Home screen of a phone.
core/app.js thumbOf() points those tiles at the sm/ copy. Run this whenever a
cover in media/covers/ is added or replaced (hero art, *-hero.webp, is skipped:
the hero shows it full-bleed).
"""
import glob, os
from PIL import Image

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'media', 'covers')
os.makedirs(os.path.join(ROOT, 'sm'), exist_ok=True)
for f in sorted(glob.glob(os.path.join(ROOT, '*.webp'))):
    if f.endswith('-hero.webp'):
        continue
    im = Image.open(f).convert('RGB')
    w, h = im.size
    out = os.path.join(ROOT, 'sm', os.path.basename(f))
    im.resize((640, round(h * 640 / w)), Image.LANCZOS).save(out, 'WEBP', quality=80, method=6)
    print(os.path.relpath(out, os.path.join(ROOT, '..', '..')), os.path.getsize(f), '->', os.path.getsize(out))
