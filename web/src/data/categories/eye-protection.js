// Eye protection. Sources (official): karam.in product pages; udyogisafety.com
// product pages (specification tab); 3mindia.in product pages; mallcom.in
// product descriptions. Rows a maker doesn't publish are left out.
const brands = [
  { id: 'karam', name: 'Karam' },
  { id: 'udyogi', name: 'Udyogi' },
  { id: '3m', name: '3M' },
  { id: 'mallcom', name: 'Mallcom' },
];

const items = [
  {
    "id": "karam-es001",
    "brand": "karam",
    "name": "Karam ES001",
    "media": "eye-karam-es001",
    "tagline": "Everyday wraparound spectacle for construction and general work.",
    "highlights": [
      "EN 166",
      "IS 8521",
      "26 g"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1, hard-coated"
      ],
      [
        "Lens options",
        "Clear or smoked"
      ],
      [
        "Weight",
        "About 26 g"
      ],
      [
        "Certification",
        "EN 166, EN 167, EN 168, EN 170, EN 172; IS 8521 (Part 1):2022; conforms to ANSI Z87.1-2020"
      ],
      [
        "Shelf life",
        "5 years from manufacture"
      ]
    ],
    "code": "ES001"
  },
  {
    "id": "karam-es005",
    "brand": "karam",
    "name": "Karam ES005",
    "media": "eye-karam-es005",
    "tagline": "Sleek executive-style spectacle with anti-fog, smoked and amber options.",
    "highlights": [
      "EN 166",
      "Anti-fog",
      "26 g"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1, hard-coated"
      ],
      [
        "Lens options",
        "Clear anti-fog, smoked, amber"
      ],
      [
        "Weight",
        "About 26 g"
      ],
      [
        "Certification",
        "EN 166, EN 167, EN 168, EN 170, EN 172; IS 8521 (Part 1):2022; conforms to ANSI Z87.1-2010"
      ],
      [
        "Shelf life",
        "5 years from manufacture"
      ]
    ],
    "code": "ES005"
  },
  {
    "id": "karam-es007",
    "brand": "karam",
    "name": "Karam ES007",
    "media": "eye-karam-es007",
    "tagline": "Fits over prescription glasses.",
    "highlights": [
      "Over-the-glasses",
      "EN 166",
      "IS 8521"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1, hard-coated"
      ],
      [
        "Lens options",
        "Clear, clear anti-fog"
      ],
      [
        "Fit",
        "Worn over prescription spectacles"
      ],
      [
        "Weight",
        "About 54 g"
      ],
      [
        "Certification",
        "EN 166, EN 170; IS 8521 (Part 1):2022; conforms to ANSI Z87.1-2020"
      ],
      [
        "Shelf life",
        "5 years from manufacture"
      ]
    ],
    "code": "ES007"
  },
  {
    "id": "karam-es009",
    "brand": "karam",
    "name": "Karam ES009",
    "media": "eye-karam-es009",
    "tagline": "Sealed goggles for chemical splash and dust.",
    "highlights": [
      "Goggles",
      "Chemical",
      "EN 166"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1, anti-scratch coated"
      ],
      [
        "Lens options",
        "Clear, smoked (anti-fog)"
      ],
      [
        "Weight",
        "About 70 g"
      ],
      [
        "Certification",
        "EN 166, EN 170; IS 8521 (Part 1):2022; conforms to ANSI Z87.1-2020"
      ],
      [
        "Shelf life",
        "5 years from manufacture"
      ]
    ],
    "code": "ES009"
  },
  {
    "id": "karam-es003",
    "brand": "karam",
    "name": "Karam ES003",
    "media": "eye-karam-es003",
    "tagline": "Shaded spectacle for gas welding and cutting.",
    "highlights": [
      "Gas welding",
      "IR-5 shade",
      "EN 166"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1, hard-coated"
      ],
      [
        "Shade",
        "IR-5 (scale 4-5)"
      ],
      [
        "Weight",
        "About 36 g"
      ],
      [
        "Certification",
        "EN 166:2001"
      ],
      [
        "Shelf life",
        "5 years from manufacture"
      ]
    ],
    "code": "ES003"
  },
  {
    "id": "karam-es004",
    "brand": "karam",
    "name": "Karam ES004",
    "media": "eye-karam-es004",
    "tagline": "Flip-up eyewear with IR-11 lens for electric arc welding.",
    "highlights": [
      "Arc welding",
      "IR-11 shade",
      "EN 175"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1, hard-coated"
      ],
      [
        "Shade",
        "IR-11"
      ],
      [
        "Weight",
        "About 180 g"
      ],
      [
        "Certification",
        "EN 166, EN 169, EN 175"
      ],
      [
        "Shelf life",
        "5 years from manufacture"
      ]
    ],
    "code": "ES004"
  },
  {
    "id": "karam-ft101",
    "brand": "karam",
    "name": "Karam Frontier FT101",
    "media": "eye-karam-ft101",
    "tagline": "Economical spectacle in clear or smoked.",
    "highlights": [
      "IS 8521",
      "EN 166",
      "Budget"
    ],
    "specs": [
      [
        "Lens",
        "Optical-grade polycarbonate"
      ],
      [
        "Lens options",
        "Clear, smoked"
      ],
      [
        "Certification",
        "IS 8521 (Part 1):2022; EN 166:2001"
      ],
      [
        "Shelf life",
        "3 years"
      ]
    ],
    "code": "FT101"
  },
  {
    "id": "udyogi-ultra-z",
    "brand": "udyogi",
    "name": "Udyogi Ultra-Z",
    "media": "eye-udyogi-ultra-z",
    "tagline": "Light, ventilated polycarbonate spectacle with anti-fog coating.",
    "highlights": [
      "Anti-fog",
      "25 g",
      "Clear / grey"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1"
      ],
      [
        "Coating",
        "Hard coat and anti-fog"
      ],
      [
        "Lens options",
        "Clear, grey"
      ],
      [
        "Impact",
        "F (45 m/s)"
      ],
      [
        "Frame",
        "Polycarbonate, ventilated temples, metal-free hinge"
      ],
      [
        "Weight",
        "25 g"
      ]
    ]
  },
  {
    "id": "udyogi-ultra-ergo",
    "brand": "udyogi",
    "name": "Udyogi Ultra Ergo",
    "media": "eye-udyogi-ultra-ergo",
    "tagline": "Frameless wraparound with soft nose pad and temple tips.",
    "highlights": [
      "Frameless",
      "Anti-fog",
      "Panoramic"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, dual 10-base curve"
      ],
      [
        "Coating",
        "Anti-fog and anti-scratch"
      ],
      [
        "Frame",
        "Polycarbonate with soft TPR temples and nose pad"
      ],
      [
        "Impact",
        "F (45 m/s)"
      ],
      [
        "Filter",
        "2C-1.2"
      ]
    ]
  },
  {
    "id": "udyogi-neolite",
    "brand": "udyogi",
    "name": "Udyogi Neolite",
    "media": "eye-udyogi-neolite",
    "tagline": "Foam-padded spectacle that keeps out dust and wind.",
    "highlights": [
      "Foam padded",
      "Anti-fog",
      "35 g"
    ],
    "specs": [
      [
        "Lens",
        "8-base curve polycarbonate"
      ],
      [
        "Coating",
        "Hard coat and anti-fog"
      ],
      [
        "Frame",
        "Internally foam padded, metal-free hinge"
      ],
      [
        "Impact",
        "F (45 m/s)"
      ],
      [
        "Weight",
        "35 g"
      ]
    ]
  },
  {
    "id": "udyogi-ultra-over",
    "brand": "udyogi",
    "name": "Udyogi Ultra Over",
    "media": "eye-udyogi-ultra-over",
    "tagline": "Over-the-spectacle eyewear for prescription wearers.",
    "highlights": [
      "Over-the-glasses",
      "Clear / grey",
      "Ventilated"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1"
      ],
      [
        "Coating",
        "Hard coat and anti-fog (clear); hard coat (grey)"
      ],
      [
        "Fit",
        "Over most prescription glasses"
      ],
      [
        "Frame",
        "Polycarbonate, ventilated temples, metal-free"
      ],
      [
        "Impact",
        "F (45 m/s)"
      ],
      [
        "Weight",
        "About 37 g"
      ]
    ]
  },
  {
    "id": "udyogi-ultraview",
    "brand": "udyogi",
    "name": "Udyogi Ultraview",
    "media": "eye-udyogi-ultraview",
    "tagline": "Indirect-vent goggles with soft body and textile strap.",
    "highlights": [
      "Goggles",
      "120 m/s impact",
      "Anti-fog"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1"
      ],
      [
        "Body",
        "Soft co-injected polymer, fits over glasses"
      ],
      [
        "Ventilation",
        "Indirect"
      ],
      [
        "Strap",
        "Textile elastic"
      ],
      [
        "Impact",
        "B (120 m/s)"
      ],
      [
        "Coating",
        "Anti-fog"
      ],
      [
        "Weight",
        "70 g"
      ]
    ]
  },
  {
    "id": "udyogi-ud49",
    "brand": "udyogi",
    "name": "Udyogi UD 49",
    "media": "eye-udyogi-ud49",
    "tagline": "Classic PVC chemical-splash goggles with indirect vents.",
    "highlights": [
      "Goggles",
      "Chemical",
      "Anti-fog"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, optical class 1"
      ],
      [
        "Body",
        "Soft PVC"
      ],
      [
        "Ventilation",
        "Indirect"
      ],
      [
        "Strap",
        "Adjustable elastic"
      ],
      [
        "Impact",
        "B (120 m/s)"
      ],
      [
        "Coating",
        "Hard coat and anti-fog"
      ],
      [
        "UV",
        "Filters 99.9% of UV"
      ],
      [
        "Weight",
        "75 g"
      ]
    ]
  },
  {
    "id": "3m-virtua",
    "brand": "3m",
    "name": "3M Virtua",
    "media": "eye-3m-virtua",
    "tagline": "Lightweight wraparound glasses, a long-time industry favourite.",
    "highlights": [
      "3M",
      "U6 UV",
      "Wraparound"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, U6 rated"
      ],
      [
        "UV",
        "Absorbs 99.9% of UVA, UVB and UVC (200–380 nm)"
      ],
      [
        "Coating",
        "Hard coat (other coatings available)"
      ],
      [
        "Frame",
        "Lightweight wraparound, unisex"
      ]
    ]
  },
  {
    "id": "3m-securefit-200",
    "brand": "3m",
    "name": "3M SecureFit 200",
    "media": "eye-3m-securefit-200",
    "tagline": "Pressure-diffusion temples hold the glasses without squeezing.",
    "highlights": [
      "3M",
      "ANSI Z87.1",
      "U6 UV"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, U6 rated"
      ],
      [
        "Coating",
        "Anti-scratch, anti-fog/anti-scratch, or Scotchgard anti-fog"
      ],
      [
        "Frame",
        "Moulded nose bridge; curved temples with flexing ribs"
      ],
      [
        "Standard",
        "ANSI/ISEA Z87.1 (impact rated)"
      ],
      [
        "UV",
        "Absorbs 99.9% of UVA, UVB and UVC"
      ]
    ]
  },
  {
    "id": "3m-solus-1000",
    "brand": "3m",
    "name": "3M Solus 1000",
    "media": "eye-3m-solus-1000",
    "tagline": "Slim sporty glasses with Scotchgard anti-fog coating.",
    "highlights": [
      "3M",
      "Scotchgard anti-fog",
      "Z87.1-2020"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, U6 rated"
      ],
      [
        "Coating",
        "Scotchgard anti-fog (lasts through about 25 washes)"
      ],
      [
        "Frame",
        "Slim, padded temples, soft nose bridge"
      ],
      [
        "Options",
        "Foam or TPE gasket, strap or temples"
      ],
      [
        "Standard",
        "ANSI/ISEA Z87.1-2020 (impact and anti-fog X)"
      ]
    ]
  },
  {
    "id": "mallcom-apollo",
    "brand": "mallcom",
    "name": "Mallcom Apollo",
    "media": "eye-mallcom-apollo",
    "tagline": "Single-lens clear spectacle with side vents.",
    "highlights": [
      "Clear PC",
      "Side vents",
      "Budget"
    ],
    "specs": [
      [
        "Lens",
        "Clear polycarbonate, single lens"
      ],
      [
        "Ventilation",
        "Direct side vents"
      ],
      [
        "Temples",
        "With hole for neck cord"
      ]
    ]
  },
  {
    "id": "mallcom-pluto",
    "brand": "mallcom",
    "name": "Mallcom Pluto",
    "media": "eye-mallcom-pluto",
    "tagline": "Hard-coated spectacle with adjustable, tilting arms.",
    "highlights": [
      "Hard coat",
      "Adjustable arms",
      "Side shields"
    ],
    "specs": [
      [
        "Lens",
        "Clear polycarbonate, hard coated"
      ],
      [
        "Temples",
        "Adjustable and tilting nylon arms, hole for neck cord"
      ],
      [
        "Side protection",
        "Lateral shields"
      ]
    ]
  },
  {
    "id": "mallcom-orbit",
    "brand": "mallcom",
    "name": "Mallcom Orbit",
    "media": "eye-mallcom-orbit",
    "tagline": "Clear spectacle with integrated nose piece and soft flat arms.",
    "highlights": [
      "Clear PC",
      "Tilting arms",
      "Comfort"
    ],
    "specs": [
      [
        "Lens",
        "Clear polycarbonate, single lens"
      ],
      [
        "Nose piece",
        "Integrated"
      ],
      [
        "Temples",
        "Adjustable, tilting, soft flat arms"
      ]
    ]
  },
  {
    "id": "mallcom-cirrus",
    "brand": "mallcom",
    "name": "Mallcom Cirrus",
    "media": "eye-mallcom-cirrus",
    "tagline": "Flexible PVC goggles with indirect ventilation.",
    "highlights": [
      "Goggles",
      "Indirect vents",
      "UV"
    ],
    "specs": [
      [
        "Lens",
        "Clear polycarbonate, UV protected, scratch and impact resistant"
      ],
      [
        "Frame",
        "Flexible PVC"
      ],
      [
        "Ventilation",
        "Indirect"
      ]
    ]
  },
  {
    "id": "mallcom-vega",
    "brand": "mallcom",
    "name": "Mallcom Vega",
    "media": "eye-mallcom-vega",
    "tagline": "Goggles with removable brow guard and several lens options.",
    "highlights": [
      "Goggles",
      "Removable brow guard",
      "Lens options"
    ],
    "specs": [
      [
        "Frame",
        "Polycarbonate"
      ],
      [
        "Lens",
        "Several detachable lens options"
      ],
      [
        "Protects against",
        "Chemical splash, dirt and dust"
      ],
      [
        "Extras",
        "Removable eyebrow protector; replaceable temples"
      ]
    ]
  }
];

export default {
  slug: 'eye-protection',
  title: 'Eye protection',
  lede:
    'Safety spectacles, over-the-glasses eyewear, chemical goggles and welding eyewear from Karam, Udyogi, 3M and Mallcom. Open a model for its specifications, then send us an enquiry on WhatsApp.',
  brands,
  items,
  enquiry: {
    variantLabel: 'Lens',
    variantPlaceholder: 'e.g. clear anti-fog',
    unit: 'pieces',
    notePlaceholder: 'Work they are for, delivery date, other items',
  },
};
