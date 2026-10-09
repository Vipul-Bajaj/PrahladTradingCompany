"""Shrinks the downloaded images in public/media to the size the site shows
them at, converts them to WebP, and records each image's width and height.

Run after fetch-media.mjs (the deploy workflow does this). Safe to run again:
an image that is already a WebP within its size limit is left alone, so
nothing gets re-compressed twice. SVG logos are kept as they are.

    python3 web/scripts/optimize-media.py
"""
import json
import os
import sys

from PIL import Image, ImageOps

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC = os.path.join(ROOT, 'public')
MAP_FILE = os.path.join(ROOT, 'src', 'data', 'media.json')
DIMS_FILE = os.path.join(ROOT, 'src', 'data', 'media-dims.json')

# Longest side in pixels: about twice the largest size each image is shown at,
# so it stays sharp on phone and retina screens.
def max_side(media_id):
    if media_id == 'hero':
        return 1400
    if media_id.startswith('logo-'):
        return 400
    return 900


def optimize(media_id, rel):
    src = os.path.join(PUBLIC, rel.lstrip('/'))
    if rel.endswith('.svg'):
        return rel, None
    limit = max_side(media_id)
    with Image.open(src) as im:
        im = ImageOps.exif_transpose(im)
        if rel.endswith('.webp') and max(im.size) <= limit:
            return rel, im.size
        has_alpha = im.mode in ('RGBA', 'LA', 'PA') or (im.mode == 'P' and 'transparency' in im.info)
        im = im.convert('RGBA' if has_alpha else 'RGB')
        im.thumbnail((limit, limit), Image.LANCZOS)
        out_rel = f'/media/{media_id}.webp'
        out = os.path.join(PUBLIC, out_rel.lstrip('/'))
        tmp = out + '.tmp'
        im.save(tmp, 'WEBP', quality=80, method=6)
        size = im.size
    before = os.path.getsize(src)
    os.replace(tmp, out)
    if os.path.abspath(src) != os.path.abspath(out):
        os.remove(src)
    after = os.path.getsize(out)
    print(f'{media_id:28} {before // 1024:6} KB -> {after // 1024:5} KB  {size[0]}x{size[1]}')
    return out_rel, size


def main():
    with open(MAP_FILE) as f:
        media = json.load(f)
    dims = {}
    for media_id, rel in media.items():
        if not rel or not os.path.exists(os.path.join(PUBLIC, rel.lstrip('/'))):
            continue
        try:
            new_rel, size = optimize(media_id, rel)
        except Exception as err:  # keep the original if it can't be processed
            print(f'{media_id:28} skipped: {err}', file=sys.stderr)
            continue
        media[media_id] = new_rel
        if size:
            dims[media_id] = list(size)
    with open(MAP_FILE, 'w') as f:
        json.dump(media, f, indent=2)
        f.write('\n')
    with open(DIMS_FILE, 'w') as f:
        json.dump(dims, f, indent=2, sort_keys=True)
        f.write('\n')


if __name__ == '__main__':
    main()
