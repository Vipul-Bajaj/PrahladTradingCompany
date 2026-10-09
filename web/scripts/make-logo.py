# Generates the outlined logo SVGs (web/public/brand/) from the Archivo variable font.
# Usage: ARCHIVO_TTF=path/to/Archivo.ttf python3 web/scripts/make-logo.py
import os
import sys
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

SRC=os.environ.get('ARCHIVO_TTF', 'Archivo.ttf')  # Archivo[wdth,wght].ttf from github.com/google/fonts
_cache={}
def font(wght,wdth):
    k=(wght,wdth)
    if k not in _cache:
        _cache[k]=instantiateVariableFont(TTFont(SRC),{'wght':wght,'wdth':wdth})
    return _cache[k]

def text_path(s,size,wght,wdth,tracking_em=0.0):
    """Returns (svg path d, advance width, cap height) for text at baseline y=0, x=0."""
    f=font(wght,wdth); upm=f['head'].unitsPerEm; gs=f.getGlyphSet(); cmap=f.getBestCmap()
    sc=size/upm; x=0; ds=[]
    for i,ch in enumerate(s):
        g=cmap[ord(ch)]
        pen=SVGPathPen(gs)
        gs[g].draw(TransformPen(pen,(sc,0,0,-sc,x,0)))
        ds.append(pen.getCommands())
        x+=gs[g].width*sc
        if i<len(s)-1: x+=tracking_em*size
    cap=f['OS/2'].sCapHeight*sc
    return ' '.join(ds), x, cap

BRICK='#c9471f'; CHAR='#1e2327'; BRICK_DARK='#e0673d'

# Emblem in a 100x100 box. Gear teeth: 12 teeth drawn as a dashed ring.
def emblem(ring, shield, letter, filled=False):
    pd,pw,pc=text_path('P',28,800,112)
    # center the P horizontally on x=50, baseline 60
    tx=50-pw/2
    p=f'<path transform="translate({tx:.2f} 60)" d="{pd}" fill="{letter}"/>'
    shield_d='M50 23 L71 29.5 V48 C71 62 61 71.5 50 77 C39 71.5 29 62 29 48 V29.5 Z'
    if filled:  # app icon: solid disc, white shield, brick P
        return (f'<circle cx="50" cy="50" r="42" fill="none" stroke="{ring}" stroke-width="10" stroke-dasharray="11 10.99"/>'
                f'<circle cx="50" cy="50" r="37" fill="{ring}"/>'
                f'<path d="M50 25 L69 31 V48 C69 61 60 70 50 75 C40 70 31 61 31 48 V31 Z" fill="{shield}"/>'
                + p.replace(f'fill="{letter}"',f'fill="{ring}"'))
    return (f'<circle cx="50" cy="50" r="42" fill="none" stroke="{ring}" stroke-width="10" stroke-dasharray="11 10.99"/>'
            f'<circle cx="50" cy="50" r="36" fill="none" stroke="{ring}" stroke-width="5"/>'
            f'<path d="{shield_d}" fill="{shield}" stroke="{shield}" stroke-width="2" stroke-linejoin="round"/>'+p)

def svg(w,h,body,bg=None):
    b=f'<rect width="{w}" height="{h}" fill="{bg}"/>' if bg else ''
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}">{b}{body}</svg>\n'

def horizontal(name_col, sub_col, ring, shield, letter, bg=None):
    # emblem 128 tall; name 58px heavy expanded; descriptor 15px tracked
    nd,nw,nc=text_path('PRAHLAD',58,800,125,0.03)
    sd,sw,sc=text_path('TRADING COMPANY',15,700,100,0.56)
    pad=24; em=128; gap=30
    tw=max(nw,sw)
    W=pad+em+gap+tw+pad; H=pad*2+em
    # vertically center the text block: name cap + 14 gap + sub cap
    block=nc+14+sc; top=pad+(em-block)/2
    body=(f'<g transform="translate({pad} {pad}) scale(1.28)">{emblem(ring,shield,letter)}</g>'
          f'<path transform="translate({pad+em+gap:.2f} {top+nc:.2f})" d="{nd}" fill="{name_col}"/>'
          f'<path transform="translate({pad+em+gap:.2f} {top+nc+14+sc:.2f})" d="{sd}" fill="{sub_col}"/>')
    return svg(W,H,body,bg)

def stacked(name_col, sub_col, ring, shield, letter, bg=None):
    nd,nw,nc=text_path('PRAHLAD',44,800,125,0.04)
    sd,sw,sc=text_path('TRADING COMPANY',12,700,100,0.5)
    pad=28; em=120
    W=max(nw,sw,em)+pad*2; H=pad+em+24+nc+14+sc+pad
    body=(f'<g transform="translate({(W-em)/2:.2f} {pad}) scale(1.2)">{emblem(ring,shield,letter)}</g>'
          f'<path transform="translate({(W-nw)/2:.2f} {pad+em+24+nc:.2f})" d="{nd}" fill="{name_col}"/>'
          f'<path transform="translate({(W-sw)/2:.2f} {pad+em+24+nc+14+sc:.2f})" d="{sd}" fill="{sub_col}"/>')
    return svg(W,H,body,bg)

out=os.environ.get('OUT', 'web/public/brand/')
files={
 'prahlad-logo-horizontal.svg': horizontal(CHAR,BRICK,CHAR,BRICK,'#fff'),
 'prahlad-logo-horizontal-white.svg': horizontal('#fff',BRICK_DARK,'#fff',BRICK_DARK,'#fff'),
 'prahlad-logo-stacked.svg': stacked(CHAR,BRICK,CHAR,BRICK,'#fff'),
 'prahlad-logo-stacked-white.svg': stacked('#fff',BRICK_DARK,'#fff',BRICK_DARK,'#fff'),
 'prahlad-emblem.svg': svg(100,100,emblem(CHAR,BRICK,'#fff')),
 'prahlad-emblem-white.svg': svg(100,100,emblem('#fff',BRICK_DARK,'#fff')),
 'prahlad-icon.svg': svg(100,100,emblem(BRICK,'#fff','#fff',filled=True)),
}
for n,s in files.items(): open(out+n,'w').write(s)
print('ok')
