// Fall protection. Sources (official): karam.in product pages (spec table and
// certification) and udyogisafety.com product pages (specification tab).
const brands = [
  { id: 'karam', name: 'Karam' },
  { id: 'udyogi', name: 'Udyogi' },
  { id: 'mallcom', name: 'Mallcom' },
];

const items = [
  {
    "id": "karam-pn11",
    "brand": "karam",
    "name": "Karam PN11",
    "media": "fall-karam-pn11",
    "tagline": "Basic full body harness for general fall arrest.",
    "highlights": [
      "EN 361",
      "IS 3521",
      "1.05 kg"
    ],
    "specs": [
      [
        "Type",
        "Full body harness, 2 adjustment points"
      ],
      [
        "Attachment",
        "Dorsal D-ring"
      ],
      [
        "Adjustment",
        "Chest and thigh straps"
      ],
      [
        "Webbing",
        "Polyester, UV and abrasion tested"
      ],
      [
        "Hardware",
        "Zinc-plated steel"
      ],
      [
        "Fall indicator",
        "Yes"
      ],
      [
        "Size",
        "M–L"
      ],
      [
        "Weight",
        "1.05 kg"
      ],
      [
        "Certification",
        "EN 361:2002; IS 3521 (Part 1):2021"
      ]
    ],
    "code": "PN11",
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "karam-pn21",
    "brand": "karam",
    "name": "Karam PN21",
    "media": "fall-karam-pn21",
    "tagline": "Full body harness with adjustable shoulders, chest and thighs.",
    "highlights": [
      "EN 361",
      "IS 3521",
      "3-point adjust"
    ],
    "specs": [
      [
        "Type",
        "Full body harness, 3 adjustment points"
      ],
      [
        "Attachment",
        "Dorsal D-ring"
      ],
      [
        "Adjustment",
        "Shoulder, chest and thigh straps; sit strap"
      ],
      [
        "Webbing",
        "44 mm polyester"
      ],
      [
        "Size",
        "M–L"
      ],
      [
        "Weight",
        "1.28 kg"
      ],
      [
        "Certification",
        "EN 361:2002; IS 3521 (Part 1):2021"
      ]
    ],
    "code": "PN21",
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "karam-pn22",
    "brand": "karam",
    "name": "Karam PN22",
    "media": "fall-karam-pn22",
    "tagline": "Two attachment points: back D-ring and front loops for ladders and climbing.",
    "highlights": [
      "EN 361",
      "Dorsal + front",
      "Fall indicator"
    ],
    "specs": [
      [
        "Type",
        "Full body harness, 3 adjustment points"
      ],
      [
        "Attachment",
        "Dorsal D-ring and sternal (front) loops"
      ],
      [
        "Adjustment",
        "Shoulder, chest and thigh straps; sit strap"
      ],
      [
        "Fall indicator",
        "Yes"
      ],
      [
        "Size",
        "M–L"
      ],
      [
        "Weight",
        "1.30 kg"
      ],
      [
        "Certification",
        "EN 361:2002; IS 3521 (Part 1):2021"
      ]
    ],
    "code": "PN22",
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "karam-pn42",
    "brand": "karam",
    "name": "Karam PN42",
    "media": "fall-karam-pn42",
    "tagline": "Tower-climbing harness with waist belt for work positioning.",
    "highlights": [
      "EN 361",
      "EN 358",
      "Tower climbing"
    ],
    "specs": [
      [
        "Type",
        "Tower climbing harness, 4 adjustment points"
      ],
      [
        "Attachment",
        "Dorsal, sternal, and lateral D-rings on the waist belt"
      ],
      [
        "Use",
        "Fall arrest and work positioning"
      ],
      [
        "Adjustment",
        "Shoulder, chest, waist and thigh"
      ],
      [
        "Size",
        "M–L"
      ],
      [
        "Weight",
        "2.04 kg"
      ],
      [
        "Certification",
        "EN 361:2002; EN 358:2018; IS 3521 (Part 1):2021"
      ]
    ],
    "code": "PN42",
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "karam-pn20",
    "brand": "karam",
    "name": "Karam PN20 Vest Harness",
    "media": "fall-karam-pn20",
    "tagline": "Harness built into a pocketed vest, easy to wear all day.",
    "highlights": [
      "EN 361",
      "Vest",
      "Pockets"
    ],
    "specs": [
      [
        "Type",
        "Vest harness, 3 adjustment points"
      ],
      [
        "Attachment",
        "Dorsal D-ring and two front loops"
      ],
      [
        "Vest",
        "Poly-cotton, multiple pockets, double zip"
      ],
      [
        "Strength",
        "Tested to 25 kN"
      ],
      [
        "Size",
        "M, L"
      ],
      [
        "Weight",
        "1.66 kg"
      ],
      [
        "Certification",
        "EN 361:2002"
      ]
    ],
    "code": "PN20",
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "karam-pn22fr",
    "brand": "karam",
    "name": "Karam PN22FR Flanil",
    "media": "fall-karam-pn22fr",
    "tagline": "Flame-resistant harness for hot work, welding and molten metal areas.",
    "highlights": [
      "Flame resistant",
      "EN 361",
      "Kevlar stitched"
    ],
    "specs": [
      [
        "Type",
        "Flame-resistant full body harness"
      ],
      [
        "Attachment",
        "Dorsal D-ring and two front loops"
      ],
      [
        "Webbing",
        "44 mm flame-resistant, tested for heat and molten metal"
      ],
      [
        "Stitching",
        "Kevlar"
      ],
      [
        "Size",
        "M, L"
      ],
      [
        "Weight",
        "1.52 kg"
      ],
      [
        "Certification",
        "EN 361:2002; webbing tested to EN ISO 15025"
      ]
    ],
    "code": "PN22FR",
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "karam-pn305",
    "brand": "karam",
    "name": "Karam PN305 Lanyard",
    "media": "fall-karam-pn305",
    "tagline": "Rope lanyard with built-in energy absorber and snap hooks both ends.",
    "highlights": [
      "EN 355",
      "Energy absorber",
      "12 mm rope"
    ],
    "specs": [
      [
        "Type",
        "Energy-absorbing lanyard"
      ],
      [
        "Rope",
        "12 mm twisted polyamide, wear-indicator tracer"
      ],
      [
        "Hooks",
        "Steel snap hook PN121 at both ends"
      ],
      [
        "Length",
        "1.0, 1.5, 1.8 or 2.0 m"
      ],
      [
        "Certification",
        "EN 355:2002; IS 3521 (Part 2):2021"
      ]
    ],
    "code": "PN305"
  },
  {
    "id": "karam-pn351n",
    "brand": "karam",
    "name": "Karam PN351N Twin Lanyard",
    "media": "fall-karam-pn351n",
    "tagline": "Y-lanyard with scaffold hooks so you stay tied off while moving.",
    "highlights": [
      "EN 355",
      "Twin leg",
      "Scaffold hooks"
    ],
    "specs": [
      [
        "Type",
        "Forked (twin-leg) lanyard with energy absorber"
      ],
      [
        "Rope",
        "12 mm twisted polyamide, red wear strand"
      ],
      [
        "Connectors",
        "Karabiner PN112 with absorber at harness end; two steel scaffold hooks PN131N"
      ],
      [
        "Length",
        "1.5, 1.8 or 2.0 m"
      ],
      [
        "Certification",
        "EN 355:2002; IS 3521 (Part 2):2021"
      ]
    ],
    "code": "PN351N"
  },
  {
    "id": "karam-pn325",
    "brand": "karam",
    "name": "Karam PN325 Webbing Lanyard",
    "media": "fall-karam-pn325",
    "tagline": "44 mm webbing lanyard with energy absorber.",
    "highlights": [
      "EN 355",
      "Webbing",
      "Energy absorber"
    ],
    "specs": [
      [
        "Type",
        "Energy-absorbing webbing lanyard"
      ],
      [
        "Webbing",
        "44 mm polyester, red and black"
      ],
      [
        "Hooks",
        "Steel snap hook PN121 at both ends"
      ],
      [
        "Length",
        "1.0, 1.5, 1.8 or 2.0 m"
      ],
      [
        "Certification",
        "EN 355:2002; IS 3521 (Part 2):2021"
      ]
    ],
    "code": "PN325"
  },
  {
    "id": "karam-pn205",
    "brand": "karam",
    "name": "Karam PN205 Restraint Lanyard",
    "media": "fall-karam-pn205",
    "tagline": "Rope lanyard that keeps you back from an edge (no fall arrest).",
    "highlights": [
      "EN 354",
      "Restraint",
      "12 mm rope"
    ],
    "specs": [
      [
        "Type",
        "Restraint lanyard (not for fall arrest)"
      ],
      [
        "Rope",
        "12 mm twisted polyamide with tracer"
      ],
      [
        "Hooks",
        "Alloy steel snap hook PN121 at both ends"
      ],
      [
        "Length",
        "1.0, 1.5, 1.8 or 2.0 m"
      ],
      [
        "Certification",
        "EN 354:2010"
      ]
    ],
    "code": "PN205",
    "note": "A restraint lanyard has no energy absorber. Use it only to stop a worker reaching a fall edge, not to arrest a fall."
  },
  {
    "id": "karam-pn241",
    "brand": "karam",
    "name": "Karam PN241 Positioning Lanyard",
    "media": "fall-karam-pn241",
    "tagline": "Adjustable lanyard for hands-free work on poles and towers.",
    "highlights": [
      "EN 358",
      "Adjustable",
      "Up to 2 m"
    ],
    "specs": [
      [
        "Type",
        "Work positioning lanyard"
      ],
      [
        "Rope",
        "14 mm twisted rope with tracer"
      ],
      [
        "Adjuster",
        "Ring type"
      ],
      [
        "Connectors",
        "Steel karabiner PN112 at both ends"
      ],
      [
        "Length",
        "Adjustable up to 2 m"
      ],
      [
        "Breaking strength",
        "15 kN minimum"
      ],
      [
        "Certification",
        "EN 358:2018"
      ]
    ],
    "code": "PN241",
    "note": "Work positioning gear must be used with a separate fall arrest system."
  },
  {
    "id": "karam-pcwb02",
    "brand": "karam",
    "name": "Karam PCWB02 Fall Arrester",
    "media": "fall-karam-pcwb02",
    "tagline": "2 m self-retracting webbing block that locks instantly in a fall.",
    "highlights": [
      "EN 360",
      "2 m",
      "Retractable"
    ],
    "specs": [
      [
        "Type",
        "Retractable fall arrester"
      ],
      [
        "Casing",
        "Polymer"
      ],
      [
        "Line",
        "25 mm webbing, 2 m"
      ],
      [
        "Hook",
        "Swivel hook PN162"
      ],
      [
        "Breaking strength",
        "16 kN minimum"
      ],
      [
        "Weight",
        "1.11 kg"
      ],
      [
        "Certification",
        "EN 360:2023"
      ]
    ],
    "code": "PCWB02"
  },
  {
    "id": "karam-slbl10",
    "brand": "karam",
    "name": "Karam SLBL10 Fall Arrester",
    "media": "fall-karam-slbl10",
    "tagline": "Sealed 10 m stainless wire-rope block for harsh, wet or chemical sites.",
    "highlights": [
      "EN 360",
      "10 m",
      "IP69K sealed"
    ],
    "specs": [
      [
        "Type",
        "Heavy-duty sealed retractable block"
      ],
      [
        "Casing",
        "Stainless steel, fully sealed"
      ],
      [
        "Line",
        "4.8 mm stainless steel wire rope, 10 m"
      ],
      [
        "Hook",
        "Stainless steel swivel snap hook with load indicator"
      ],
      [
        "Rated load",
        "140 kg"
      ],
      [
        "Weight",
        "7.36 kg"
      ],
      [
        "Certification",
        "EN 360:2023; IP69K; ATEX 2014/34/EU"
      ]
    ],
    "code": "SLBL10"
  },
  {
    "id": "karam-sa08",
    "brand": "karam",
    "name": "Karam SA08 Beam Anchor",
    "media": "fall-karam-sa08",
    "tagline": "Clamp-on anchor for steel beams, no drilling needed.",
    "highlights": [
      "EN 795",
      "Beam clamp",
      "90–340 mm"
    ],
    "specs": [
      [
        "Type",
        "Beam anchor (Type B)"
      ],
      [
        "Material",
        "Aluminium alloy and brass"
      ],
      [
        "Fits flange width",
        "90 mm to 340 mm"
      ],
      [
        "Breaking strength",
        "23 kN minimum"
      ],
      [
        "Weight",
        "1.87 kg"
      ],
      [
        "Certification",
        "EN 795:2012 Type B; IS 3521 (Part 7):2021; ATEX"
      ]
    ],
    "code": "SA08"
  },
  {
    "id": "karam-pn803",
    "brand": "karam",
    "name": "Karam PN803 Anchor Strap",
    "media": "fall-karam-pn803",
    "tagline": "Webbing strap that wraps around a beam or pipe to make an anchor.",
    "highlights": [
      "EN 795",
      "Portable",
      "18 kN"
    ],
    "specs": [
      [
        "Type",
        "Cross-arm anchor strap (Type B)"
      ],
      [
        "Material",
        "44 mm polyester webbing"
      ],
      [
        "Ends",
        "D-ring and textile loop"
      ],
      [
        "Length",
        "1.2 m (other lengths on request)"
      ],
      [
        "Breaking strength",
        "18 kN for 3 minutes"
      ],
      [
        "Certification",
        "EN 795:2012 Type B; IS 3521 (Part 7):2021"
      ]
    ],
    "code": "PN803"
  },
  {
    "id": "karam-pn112",
    "brand": "karam",
    "name": "Karam PN112 Karabiner",
    "media": "fall-karam-pn112",
    "tagline": "Steel screw-lock karabiner for connecting harness, lanyard and anchor.",
    "highlights": [
      "EN 362",
      "25 kN",
      "Screw lock"
    ],
    "specs": [
      [
        "Type",
        "Steel screw-locking karabiner"
      ],
      [
        "Material",
        "Alloy steel, galvanized"
      ],
      [
        "Gate opening",
        "18 mm"
      ],
      [
        "Breaking strength",
        "25 kN minimum"
      ],
      [
        "Weight",
        "160 g"
      ],
      [
        "Certification",
        "EN 362:2004 Class B, Class M"
      ]
    ],
    "code": "PN112"
  },
  {
    "id": "udyogi-tango2shap60",
    "brand": "udyogi",
    "name": "Udyogi Tango2SHAP60",
    "media": "fall-udyogi-tango2shap60",
    "tagline": "H-style harness supplied with an energy-absorbing rope lanyard.",
    "highlights": [
      "Harness + lanyard",
      "H-shaped",
      "100 kg SWL"
    ],
    "specs": [
      [
        "Type",
        "Full body harness with lanyard"
      ],
      [
        "Attachment",
        "Dorsal D-ring and two sternal D-rings"
      ],
      [
        "Thigh straps",
        "Horizontal H-shape, no groin pressure"
      ],
      [
        "Lanyard",
        "Energy-absorbing polyamide rope"
      ],
      [
        "Webbing",
        "Polyester, 23 kN"
      ],
      [
        "Safe working load",
        "100 kg"
      ],
      [
        "Weight",
        "3.0 kg"
      ],
      [
        "Fall indicator",
        "Yes"
      ]
    ],
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "udyogi-eco1sha60",
    "brand": "udyogi",
    "name": "Udyogi ECO1SHA60",
    "media": "fall-udyogi-eco1sha60",
    "tagline": "Economical reflective harness with PP rope lanyard.",
    "highlights": [
      "Harness + lanyard",
      "Reflective",
      "Economy"
    ],
    "specs": [
      [
        "Type",
        "Full body harness with lanyard"
      ],
      [
        "Attachment",
        "Dorsal D-ring and two chest loops"
      ],
      [
        "Webbing",
        "Polyester with reflective line, 23 kN"
      ],
      [
        "Lanyard",
        "Energy-absorbing PP rope"
      ],
      [
        "Safe working load",
        "100 kg"
      ],
      [
        "Weight",
        "2.7 kg"
      ],
      [
        "Fall indicator",
        "Yes"
      ]
    ],
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "udyogi-ultra-05",
    "brand": "udyogi",
    "name": "Udyogi Ultra-05",
    "media": "fall-udyogi-ultra-05",
    "tagline": "Padded 5-point harness for rescue, transmission and telecom work.",
    "highlights": [
      "Padded",
      "5 attachment points",
      "140 kg SWL"
    ],
    "specs": [
      [
        "Type",
        "Padded full body harness"
      ],
      [
        "Attachment",
        "Dorsal, sternal, ventral, and two lateral D-rings"
      ],
      [
        "Padding",
        "Y-shaped shoulder padding"
      ],
      [
        "Webbing",
        "Polyester, 25 kN"
      ],
      [
        "Safe working load",
        "140 kg"
      ],
      [
        "Weight",
        "2.4 kg"
      ],
      [
        "Fall indicator",
        "Yes"
      ]
    ],
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "udyogi-ub104",
    "brand": "udyogi",
    "name": "Udyogi UB 104",
    "media": "fall-udyogi-ub104",
    "tagline": "Work-positioning harness with padded waist belt.",
    "highlights": [
      "Padded belt",
      "Positioning",
      "1.55 kg"
    ],
    "specs": [
      [
        "Type",
        "Work positioning padded harness"
      ],
      [
        "Attachment",
        "Dorsal D-ring, two chest rings, two lateral D-rings"
      ],
      [
        "Adjustment",
        "Shoulder, chest, waist and thigh"
      ],
      [
        "Webbing",
        "Polyester, 23 kN"
      ],
      [
        "Safe working load",
        "100 kg"
      ],
      [
        "Weight",
        "1.55 kg"
      ],
      [
        "Fall indicator",
        "Yes"
      ]
    ],
    "note": "Use a harness only with a suitable lanyard or fall arrester and anchor point, and inspect it before each use. Retire it after a fall."
  },
  {
    "id": "udyogi-el22",
    "brand": "udyogi",
    "name": "Udyogi EL22 Twin Lanyard",
    "media": "fall-udyogi-el22",
    "tagline": "Elasticated twin lanyard with scaffold hooks and shock absorber.",
    "highlights": [
      "Twin leg",
      "Elasticated",
      "56 mm hooks"
    ],
    "specs": [
      [
        "Type",
        "Twin-leg shock-absorbing lanyard"
      ],
      [
        "Material",
        "Elasticated polyester webbing, 23 kN"
      ],
      [
        "Hooks",
        "Steel scaffold hooks, 56 mm opening"
      ],
      [
        "Length",
        "1.0, 1.5 or 1.8 m"
      ],
      [
        "Weight",
        "1.75 kg"
      ]
    ]
  },
  {
    "id": "udyogi-edge-nano-1-8",
    "brand": "udyogi",
    "name": "Udyogi Edge Nano 1.8",
    "media": "fall-udyogi-edge-nano",
    "tagline": "Compact self-retracting lifeline for low-clearance areas.",
    "highlights": [
      "SRL",
      "1.8 m",
      "140 kg SWL"
    ],
    "specs": [
      [
        "Type",
        "Self-retracting lifeline (SRL)"
      ],
      [
        "Line",
        "Webbing, 1.8 m"
      ],
      [
        "Housing",
        "Thermoplastic"
      ],
      [
        "Connector",
        "Snap hook"
      ],
      [
        "Fall arrest distance",
        "1.4 m maximum"
      ],
      [
        "Static strength",
        "Over 15 kN"
      ],
      [
        "Safe working load",
        "140 kg"
      ],
      [
        "Weight",
        "1.3 kg"
      ]
    ]
  },
  {
    "id": "udyogi-edge-nano-twin",
    "brand": "udyogi",
    "name": "Udyogi Edge Nano Twin 1.8",
    "media": "fall-udyogi-edge-nano-twin",
    "tagline": "Twin-leg SRL for 100% tie-off while moving.",
    "highlights": [
      "Twin SRL",
      "1.8 m",
      "140 kg SWL"
    ],
    "specs": [
      [
        "Type",
        "Twin-leg self-retracting lifeline with adaptor"
      ],
      [
        "Line",
        "Webbing, 1.8 m each"
      ],
      [
        "Housing",
        "Thermoplastic"
      ],
      [
        "Connector",
        "Snap hook"
      ],
      [
        "Fall arrest distance",
        "1.4 m maximum"
      ],
      [
        "Static strength",
        "Over 15 kN"
      ],
      [
        "Safe working load",
        "140 kg"
      ],
      [
        "Weight",
        "2.75 kg"
      ]
    ]
  }
];

export default {
  slug: 'fall-protection',
  title: 'Fall protection',
  lede:
    'Full body harnesses, energy-absorbing and twin lanyards, retractable fall arresters, anchors and karabiners from Karam and Udyogi. Open a model for its specifications and certification, then send us an enquiry on WhatsApp.',
  brands,
  items,
  enquiry: {
    variantLabel: 'Size / length',
    variantPlaceholder: 'e.g. harness size L, lanyard 1.8 m',
    unit: 'pieces',
    notePlaceholder: 'Type of work at height, delivery date, other items',
  },
};
