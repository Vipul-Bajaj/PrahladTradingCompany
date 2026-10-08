// Workwear. Sources (official): karam.in product pages, udyogisafety.com
// product pages and mallcom.in product descriptions.
const brands = [
  { id: 'karam', name: 'Karam' },
  { id: 'udyogi', name: 'Udyogi' },
  { id: 'mallcom', name: 'Mallcom' },
];

const items = [
  {
    "id": "karam-pw1101",
    "brand": "karam",
    "name": "Karam PW1101 Coverall",
    "media": "work-karam-pw1101",
    "tagline": "100% cotton coverall for everyday plant and maintenance work.",
    "highlights": [
      "100% cotton",
      "200 GSM",
      "S–XXXL"
    ],
    "specs": [
      [
        "Type",
        "Coverall (boiler suit)"
      ],
      [
        "Fabric",
        "100% cotton twill, 200 GSM"
      ],
      [
        "Closure",
        "Concealed front zip"
      ],
      [
        "Pockets",
        "Chest, side, hip and tool pockets; pen holder"
      ],
      [
        "Waist",
        "Elasticated"
      ],
      [
        "Sizes",
        "S to XXXL"
      ],
      [
        "Standard",
        "CE Category I"
      ]
    ],
    "code": "PW1101"
  },
  {
    "id": "karam-pw1201",
    "brand": "karam",
    "name": "Karam PW1201 Reflective Coverall",
    "media": "work-karam-pw1201",
    "tagline": "The cotton coverall with 2-inch reflective tape for visibility.",
    "highlights": [
      "Reflective tape",
      "100% cotton",
      "S–XXXL"
    ],
    "specs": [
      [
        "Type",
        "Coverall with reflective tape"
      ],
      [
        "Fabric",
        "100% cotton twill, 200 GSM"
      ],
      [
        "Reflective tape",
        "2 inch on chest, back, arms and legs"
      ],
      [
        "Closure",
        "Concealed front zip"
      ],
      [
        "Pockets",
        "Chest, side, hip and tool pockets"
      ],
      [
        "Sizes",
        "S to XXXL"
      ],
      [
        "Standard",
        "CE Category I"
      ]
    ],
    "code": "PW1201"
  },
  {
    "id": "karam-pw2101",
    "brand": "karam",
    "name": "Karam PW2101 Premium Coverall",
    "media": "work-karam-pw2101",
    "tagline": "Premium cotton coverall with contrast piping and snap cuffs.",
    "highlights": [
      "Premium",
      "Navy / orange",
      "S–XXXL"
    ],
    "specs": [
      [
        "Type",
        "Premium coverall"
      ],
      [
        "Fabric",
        "100% cotton twill, 200 GSM"
      ],
      [
        "Colours",
        "Navy blue or orange, with contrast piping"
      ],
      [
        "Cuffs",
        "Snap button"
      ],
      [
        "Sizes",
        "S to XXXL"
      ],
      [
        "Standard",
        "CE Category I"
      ]
    ],
    "code": "PW2101"
  },
  {
    "id": "karam-pwifr11011k",
    "brand": "karam",
    "name": "Karam PWIFR11011K FR Coverall",
    "media": "work-karam-pwifr",
    "tagline": "Inherently flame-resistant aramid coverall, arc and antistatic rated.",
    "highlights": [
      "IFR aramid",
      "EN ISO 11612",
      "Arc rated"
    ],
    "specs": [
      [
        "Type",
        "Inherently flame-resistant coverall"
      ],
      [
        "Fabric",
        "93% meta-aramid, 5% para-aramid, 2% antistatic; 150 GSM"
      ],
      [
        "Heat and flame",
        "EN ISO 11612 (A1, A2, B1, C1, F1)"
      ],
      [
        "Antistatic",
        "EN 1149-5"
      ],
      [
        "Arc",
        "IEC 61482-2 (4 kA, APC 1)"
      ],
      [
        "Sizes",
        "S to XXXL"
      ]
    ],
    "code": "PWIFR11011K"
  },
  {
    "id": "karam-leather-apron",
    "brand": "karam",
    "name": "Karam Frontier Leather Apron",
    "media": "work-karam-apron",
    "tagline": "Split-leather apron against sparks and hot splashes.",
    "highlights": [
      "Split leather",
      "60 × 90 cm",
      "EN 407"
    ],
    "specs": [
      [
        "Material",
        "Split leather, grey"
      ],
      [
        "Size",
        "60 × 90 cm"
      ],
      [
        "Lining",
        "Unlined, or cotton lined on request"
      ],
      [
        "Strap",
        "Textile with quick-release buckle"
      ],
      [
        "Certification",
        "EN 388:2016; EN 407:2020"
      ]
    ]
  },
  {
    "id": "karam-leg-guard",
    "brand": "karam",
    "name": "Karam Frontier Leg Guard",
    "media": "work-karam-leg-guard",
    "tagline": "Leather leg guards for welders and grinders.",
    "highlights": [
      "Split leather",
      "12 inch",
      "Velcro"
    ],
    "specs": [
      [
        "Material",
        "Split leather, grey"
      ],
      [
        "Length",
        "12 inch"
      ],
      [
        "Heat",
        "Resists 100 °C for 15 seconds"
      ],
      [
        "Closure",
        "Velcro"
      ],
      [
        "Certification",
        "EN 388:2016; EN 407:2020"
      ]
    ]
  },
  {
    "id": "udyogi-ifr-150",
    "brand": "udyogi",
    "name": "Udyogi IFR 150 Coverall",
    "media": "work-udyogi-ifr150",
    "tagline": "Lightweight inherently flame-resistant coverall for flash-fire areas.",
    "highlights": [
      "IFR aramid",
      "150 GSM",
      "Reflective"
    ],
    "specs": [
      [
        "Type",
        "Inherently flame-resistant coverall"
      ],
      [
        "Fabric",
        "93% meta-aramid, 5% para-aramid, 2% antistatic; 150 GSM"
      ],
      [
        "Reflective tape",
        "1 inch on chest, sleeves and below knee"
      ],
      [
        "Closure",
        "Two-way zip with snap flap"
      ],
      [
        "Colour",
        "Navy blue"
      ],
      [
        "Good for",
        "Oil and gas, petrochemical, electrical utilities"
      ]
    ]
  },
  {
    "id": "udyogi-arc-8cal",
    "brand": "udyogi",
    "name": "Udyogi Arc Knight 8 cal Jacket",
    "media": "work-udyogi-arc8",
    "tagline": "Arc-flash jacket rated 8 cal/cm² for electrical panel and substation work.",
    "highlights": [
      "Arc flash",
      "8 cal/cm²",
      "Category 2"
    ],
    "specs": [
      [
        "Type",
        "Arc flash jacket"
      ],
      [
        "Arc rating (ATPV)",
        "8 cal/cm², Category 2"
      ],
      [
        "Fabric",
        "100% inherent FR, modacrylic based, 180 g/m²"
      ],
      [
        "Closure",
        "FR zip with snap flap"
      ],
      [
        "Reflective tape",
        "2 inch silver"
      ],
      [
        "Sizes",
        "S to XXL"
      ]
    ]
  },
  {
    "id": "udyogi-arc-12cal",
    "brand": "udyogi",
    "name": "Udyogi Arc Knight 12 cal Jacket",
    "media": "work-udyogi-arc12",
    "tagline": "Heavier arc-flash jacket rated 12 cal/cm².",
    "highlights": [
      "Arc flash",
      "12 cal/cm²",
      "Category 2"
    ],
    "specs": [
      [
        "Type",
        "Arc flash jacket"
      ],
      [
        "Arc rating (ATPV)",
        "12 cal/cm², Category 2"
      ],
      [
        "Fabric",
        "100% inherent FR, modacrylic based, 240 g/m²"
      ],
      [
        "Closure",
        "FR zip with snap flap"
      ],
      [
        "Sizes",
        "S to XXL"
      ]
    ]
  },
  {
    "id": "mallcom-proclo-k382",
    "brand": "mallcom",
    "name": "Mallcom Proclo K382 Vest",
    "media": "work-mallcom-k382",
    "tagline": "Hi-vis green vest with EN 20471 reflective tape.",
    "highlights": [
      "Hi-vis",
      "EN 20471 tape",
      "Velcro"
    ],
    "specs": [
      [
        "Fabric",
        "115 GSM warp-knitted polyester"
      ],
      [
        "Reflective tape",
        "2 inch glass-bead, EN 20471 certified; 2 vertical and 2 horizontal bands"
      ],
      [
        "Closure",
        "Velcro"
      ],
      [
        "Colour",
        "Hi-vis green"
      ],
      [
        "Weight",
        "200 g"
      ]
    ]
  },
  {
    "id": "mallcom-vest-glo",
    "brand": "mallcom",
    "name": "Mallcom Vest GLO",
    "media": "work-mallcom-vest-glo",
    "tagline": "Premium hi-vis vest with micro-prismatic reflective tape.",
    "highlights": [
      "Hi-vis",
      "Micro-prismatic",
      "Zip"
    ],
    "specs": [
      [
        "Reflective tape",
        "50 mm Avery Dennison micro-prismatic"
      ],
      [
        "Closure",
        "Zip"
      ],
      [
        "Class",
        "Class 2"
      ]
    ]
  },
  {
    "id": "mallcom-pretoria",
    "brand": "mallcom",
    "name": "Mallcom Pretoria Hi-vis Jacket",
    "media": "work-mallcom-pretoria",
    "tagline": "Full-sleeve two-tone hi-vis jacket for moderate-risk work.",
    "highlights": [
      "Hi-vis",
      "Full sleeve",
      "Reflective bands"
    ],
    "specs": [
      [
        "Type",
        "Full-sleeve hi-vis jacket"
      ],
      [
        "Reflective tape",
        "50 mm double band, Sto-nor retro-reflective"
      ],
      [
        "Closure",
        "Front zip"
      ],
      [
        "Pockets",
        "Zipped chest pocket; two waist patch pockets"
      ]
    ]
  },
  {
    "id": "mallcom-floriad",
    "brand": "mallcom",
    "name": "Mallcom Floriad Coverall",
    "media": "work-mallcom-floriad",
    "tagline": "Light poly-cotton coverall with zip front and underarm vents.",
    "highlights": [
      "Poly-cotton",
      "240 GSM",
      "Zip front"
    ],
    "specs": [
      [
        "Fabric",
        "65% cotton, 35% polyester twill, 240 GSM"
      ],
      [
        "Closure",
        "Front zip"
      ],
      [
        "Ventilation",
        "Underarm eyelets"
      ],
      [
        "Pockets",
        "Chest, sleeve and mobile pockets"
      ],
      [
        "Waist",
        "Elasticated"
      ]
    ]
  },
  {
    "id": "mallcom-paris",
    "brand": "mallcom",
    "name": "Mallcom Paris FR Coverall",
    "media": "work-mallcom-paris",
    "tagline": "Two-tone flame-retardant cotton coverall with antistatic yarn.",
    "highlights": [
      "Flame retardant",
      "Antistatic",
      "270 GSM"
    ],
    "specs": [
      [
        "Fabric",
        "98% cotton, 2% antistatic twill, 270 GSM, FR treated"
      ],
      [
        "Closure",
        "Covered press-snap front"
      ],
      [
        "Ventilation",
        "Underarm and back panel"
      ],
      [
        "Pockets",
        "Cargo pocket with hidden ruler pocket, chest and hip pockets"
      ]
    ]
  },
  {
    "id": "mallcom-firamid",
    "brand": "mallcom",
    "name": "Mallcom Firamid Coverall",
    "media": "work-mallcom-firamid",
    "tagline": "Nomex inherent FR coverall for moderate-to-high risk work.",
    "highlights": [
      "Nomex",
      "Inherent FR",
      "Reflective"
    ],
    "specs": [
      [
        "Fabric",
        "95% Nomex, 5% para-aramid, 200 GSM"
      ],
      [
        "Closure",
        "Concealed brass zip"
      ],
      [
        "Reflective tape",
        "EN 20471 compliant on shoulders, sleeves and legs"
      ],
      [
        "Extras",
        "Knee-pad pockets; elasticated waist"
      ]
    ]
  },
  {
    "id": "mallcom-copenhagen",
    "brand": "mallcom",
    "name": "Mallcom Copenhagen Welding Trouser",
    "media": "work-mallcom-copenhagen",
    "tagline": "Khaki FR cotton trouser for welding and brief flame contact.",
    "highlights": [
      "FR cotton",
      "Welding",
      "190 GSM"
    ],
    "specs": [
      [
        "Fabric",
        "100% cotton, 190 GSM, flame retardant"
      ],
      [
        "Colour",
        "Khaki"
      ],
      [
        "Closure",
        "Metal snap and FR zip"
      ],
      [
        "Pockets",
        "All with flaps"
      ]
    ]
  },
  {
    "id": "mallcom-stratus",
    "brand": "mallcom",
    "name": "Mallcom Stratus Rain Suit",
    "media": "work-mallcom-stratus",
    "tagline": "Seam-sealed jacket and trouser rain set with hood.",
    "highlights": [
      "Rainwear",
      "Seam sealed",
      "Hooded"
    ],
    "specs": [
      [
        "Set",
        "Jacket and pull-on trouser"
      ],
      [
        "Waterproofing",
        "All exposed seams taped"
      ],
      [
        "Hood",
        "Fixed, with drawstring"
      ],
      [
        "Reflective",
        "Silver piping"
      ],
      [
        "Cuffs",
        "Elastic, adjustable"
      ]
    ]
  },
  {
    "id": "mallcom-jb8ay",
    "brand": "mallcom",
    "name": "Mallcom JB8AY Disposable Coverall",
    "media": "work-mallcom-jb8ay",
    "tagline": "Seam-sealed disposable coverall against dust and light splashes.",
    "highlights": [
      "Disposable",
      "Seam sealed",
      "80 GSM"
    ],
    "specs": [
      [
        "Fabric",
        "80 GSM laminated, breathable"
      ],
      [
        "Seams",
        "Sealed"
      ],
      [
        "Protects against",
        "Dry particles and limited liquid splash"
      ],
      [
        "Fit",
        "Elastic cuffs, waist and ankles"
      ]
    ]
  }
];

export default {
  slug: 'workwear',
  title: 'Workwear',
  lede:
    'Cotton and flame-resistant coveralls, arc-flash jackets, hi-vis vests and jackets, welding aprons and leg guards, rain suits and disposable coveralls from Karam, Udyogi and Mallcom. Open a product for details, then send us an enquiry on WhatsApp.',
  brands,
  items,
  enquiry: {
    variantLabel: 'Sizes',
    variantPlaceholder: 'e.g. 10 L, 10 XL',
    unit: 'pieces',
    notePlaceholder: 'Colour, company logo printing, delivery date',
  },
};
