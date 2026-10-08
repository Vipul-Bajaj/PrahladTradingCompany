// Ear protection. Sources (official): karam.in product pages; udyogisafety.com
// product pages; 3mindia.in product page; mallcom.in product descriptions.
// SNR/NRR are the makers' published attenuation ratings.
const brands = [
  { id: 'karam', name: 'Karam' },
  { id: 'udyogi', name: 'Udyogi' },
  { id: '3m', name: '3M' },
  { id: 'mallcom', name: 'Mallcom' },
];

const items = [
  {
    "id": "karam-ep01",
    "brand": "karam",
    "name": "Karam EP01",
    "media": "ear-karam-ep01",
    "tagline": "Soft PU foam earplugs, uncorded.",
    "highlights": [
      "SNR 34 dB",
      "Disposable",
      "PU foam"
    ],
    "specs": [
      [
        "Type",
        "Disposable foam earplug, uncorded"
      ],
      [
        "Material",
        "Polyurethane foam"
      ],
      [
        "Attenuation",
        "SNR 34 dB"
      ],
      [
        "Certification",
        "EN 352-2:2020; IS 9167:1979"
      ]
    ]
  },
  {
    "id": "karam-ep02a",
    "brand": "karam",
    "name": "Karam EP02(A) Corded",
    "media": "ear-karam-ep02a",
    "tagline": "The same foam earplugs on a cord, so they don't get lost.",
    "highlights": [
      "SNR 34 dB",
      "Corded",
      "PU foam"
    ],
    "specs": [
      [
        "Type",
        "Disposable foam earplug, corded"
      ],
      [
        "Material",
        "PU foam; cotton or nylon cord"
      ],
      [
        "Attenuation",
        "SNR 34 dB"
      ],
      [
        "Certification",
        "EN 352-2:2020; IS 9167:1979"
      ]
    ]
  },
  {
    "id": "karam-ep04m",
    "brand": "karam",
    "name": "Karam EP04(M)",
    "media": "ear-karam-ep04m",
    "tagline": "Washable, reusable flanged earplugs with cord.",
    "highlights": [
      "SNR 30 dB",
      "Reusable",
      "Corded"
    ],
    "specs": [
      [
        "Type",
        "Reusable earplug, corded"
      ],
      [
        "Material",
        "Thermoplastic elastomer; polyester cord"
      ],
      [
        "Attenuation",
        "SNR 30 dB"
      ],
      [
        "Certification",
        "EN 352-2:2020"
      ],
      [
        "Option",
        "Available with carry case (EP04(M)(CC))"
      ]
    ]
  },
  {
    "id": "karam-ep21",
    "brand": "karam",
    "name": "Karam EP21 Ear Muff",
    "media": "ear-karam-ep21",
    "tagline": "Classic headband earmuff for general noisy areas.",
    "highlights": [
      "SNR 27 dB",
      "Earmuff",
      "180 g"
    ],
    "specs": [
      [
        "Type",
        "Headband earmuff"
      ],
      [
        "Material",
        "ABS cups"
      ],
      [
        "Attenuation",
        "SNR 27 dB"
      ],
      [
        "Weight",
        "180 g"
      ],
      [
        "Certification",
        "EN 352-1:2002"
      ]
    ]
  },
  {
    "id": "karam-ep24",
    "brand": "karam",
    "name": "Karam EP24 Ear Muff",
    "media": "ear-karam-ep24",
    "tagline": "High-attenuation foldable earmuff for very loud machinery.",
    "highlights": [
      "SNR 34 dB",
      "Foldable",
      "High noise"
    ],
    "specs": [
      [
        "Type",
        "Foldable headband earmuff"
      ],
      [
        "Material",
        "ABS cups"
      ],
      [
        "Attenuation",
        "SNR 34 dB"
      ],
      [
        "Weight",
        "305 g"
      ],
      [
        "Certification",
        "EN 352-1:2020"
      ]
    ]
  },
  {
    "id": "karam-ep23",
    "brand": "karam",
    "name": "Karam EP23 Helmet Ear Muff",
    "media": "ear-karam-ep23",
    "tagline": "Clips onto helmet side slots.",
    "highlights": [
      "Helmet mounted",
      "SNR 25 dB",
      "EN 352-3"
    ],
    "specs": [
      [
        "Type",
        "Helmet-mounted earmuff"
      ],
      [
        "Material",
        "ABS cups"
      ],
      [
        "Attenuation",
        "SNR 25 dB"
      ],
      [
        "Weight",
        "260 g"
      ],
      [
        "Certification",
        "EN 352-3:2020; IS 9167:1979"
      ]
    ]
  },
  {
    "id": "udyogi-fp01",
    "brand": "udyogi",
    "name": "Udyogi FP 01",
    "media": "ear-udyogi-fp01",
    "tagline": "Corded disposable foam earplugs with high attenuation.",
    "highlights": [
      "SNR 33 dB",
      "Corded",
      "Disposable"
    ],
    "specs": [
      [
        "Type",
        "Disposable earplug, corded"
      ],
      [
        "Material",
        "Food-grade soft PU foam; PP cord"
      ],
      [
        "Attenuation",
        "SNR 33 dB; NRR 38 dB"
      ],
      [
        "Colour",
        "Orange"
      ],
      [
        "Weight",
        "0.9 g per pair"
      ]
    ]
  },
  {
    "id": "udyogi-ep01",
    "brand": "udyogi",
    "name": "Udyogi EP 01",
    "media": "ear-udyogi-ep01",
    "tagline": "Reusable three-flange silicone earplugs.",
    "highlights": [
      "SNR 32 dB",
      "Reusable",
      "Silicone"
    ],
    "specs": [
      [
        "Type",
        "Reusable three-flange earplug"
      ],
      [
        "Material",
        "Food-grade silicone"
      ],
      [
        "Attenuation",
        "SNR 32 dB; NRR 27 dB"
      ],
      [
        "Colour",
        "Orange"
      ],
      [
        "Weight",
        "2.96 g per pair"
      ]
    ]
  },
  {
    "id": "udyogi-et20",
    "brand": "udyogi",
    "name": "Udyogi ET 20",
    "media": "ear-udyogi-et20",
    "tagline": "Light headband earmuff with rotating cups.",
    "highlights": [
      "SNR 28 dB",
      "Earmuff",
      "180 g"
    ],
    "specs": [
      [
        "Type",
        "Head-mounted earmuff, 360° rotating cups"
      ],
      [
        "Cups",
        "HDPE; PU foam inserts"
      ],
      [
        "Headband",
        "Nylon, length adjustable"
      ],
      [
        "Attenuation",
        "SNR 28 dB; NRR 23 dB"
      ],
      [
        "Colour",
        "Yellow/black"
      ],
      [
        "Weight",
        "180 g"
      ]
    ]
  },
  {
    "id": "udyogi-et60",
    "brand": "udyogi",
    "name": "Udyogi ET 60",
    "media": "ear-udyogi-et60",
    "tagline": "Metal-free earmuff with higher attenuation.",
    "highlights": [
      "SNR 29 dB",
      "Metal-free",
      "167 g"
    ],
    "specs": [
      [
        "Type",
        "Head-mounted earmuff"
      ],
      [
        "Cups",
        "ABS; PU foam inserts"
      ],
      [
        "Headband",
        "ABS, length adjustable, metal-free"
      ],
      [
        "Attenuation",
        "SNR 29 dB; NRR 24 dB"
      ],
      [
        "Colour",
        "Red/black"
      ],
      [
        "Weight",
        "167 g"
      ]
    ]
  },
  {
    "id": "udyogi-et-flex",
    "brand": "udyogi",
    "name": "Udyogi ET Flex",
    "media": "ear-udyogi-et-flex",
    "tagline": "Earmuff with a switch to adjust attenuation to the noise level.",
    "highlights": [
      "SNR 25–35 dB",
      "Adjustable",
      "167 g"
    ],
    "specs": [
      [
        "Type",
        "Head-mounted earmuff with attenuation controller"
      ],
      [
        "Cups",
        "ABS; PU foam inserts"
      ],
      [
        "Headband",
        "Co-injected TPE with steel wire, length adjustable"
      ],
      [
        "Attenuation",
        "SNR 25 dB (minimum) to 35 dB (maximum)"
      ],
      [
        "Colour",
        "Black/red"
      ],
      [
        "Weight",
        "167 g"
      ]
    ]
  },
  {
    "id": "udyogi-et50",
    "brand": "udyogi",
    "name": "Udyogi ET 50",
    "media": "ear-udyogi-et50",
    "tagline": "Slim helmet-mounted earmuff for slotted helmets.",
    "highlights": [
      "Helmet mounted",
      "SNR 30 dB",
      "Hi-vis"
    ],
    "specs": [
      [
        "Type",
        "Helmet-mounted earmuff"
      ],
      [
        "Cups",
        "Dual-mould slim ABS; PU foam inserts"
      ],
      [
        "Spring",
        "Stainless steel"
      ],
      [
        "Attenuation",
        "SNR 30 dB; NRR 25 dB"
      ],
      [
        "Colour",
        "Black/neon"
      ],
      [
        "Weight",
        "290 g"
      ]
    ]
  },
  {
    "id": "3m-1100",
    "brand": "3m",
    "name": "3M 1100 Foam Earplugs",
    "media": "ear-3m-1100",
    "tagline": "Tapered corded foam earplugs that fit most ear canals.",
    "highlights": [
      "3M",
      "NRR 29 dB",
      "Corded"
    ],
    "specs": [
      [
        "Type",
        "Disposable foam earplug, corded (1110)"
      ],
      [
        "Material",
        "Soft hypoallergenic polyurethane foam; cloth cord"
      ],
      [
        "Attenuation",
        "NRR 29 dB"
      ],
      [
        "Standard",
        "CSA Class AL"
      ],
      [
        "Shape",
        "Tapered, smooth dirt-resistant surface"
      ]
    ]
  },
  {
    "id": "mallcom-sn03pc",
    "brand": "mallcom",
    "name": "Mallcom SN03PC",
    "media": "ear-mallcom-sn03pc",
    "tagline": "Soft PU foam earplugs on a nylon cord.",
    "highlights": [
      "SNR 34 dB",
      "Corded",
      "PU foam"
    ],
    "specs": [
      [
        "Type",
        "Foam earplug, corded"
      ],
      [
        "Material",
        "PU foam; nylon cord"
      ],
      [
        "Attenuation",
        "SNR 34 dB"
      ]
    ]
  },
  {
    "id": "mallcom-sn03sp",
    "brand": "mallcom",
    "name": "Mallcom SN03SP",
    "media": "ear-mallcom-sn03sp",
    "tagline": "Reusable silicone earplugs on a PVC cord.",
    "highlights": [
      "SNR 34 dB",
      "Silicone",
      "Corded"
    ],
    "specs": [
      [
        "Type",
        "Reusable earplug, corded"
      ],
      [
        "Material",
        "Silicone; PVC cord"
      ],
      [
        "Attenuation",
        "SNR 34 dB"
      ]
    ]
  }
];

export default {
  slug: 'ear-protection',
  title: 'Ear protection',
  lede:
    'Foam and reusable earplugs, headband earmuffs and helmet-mounted earmuffs from Karam, Udyogi, 3M and Mallcom. Open a model for its noise rating and specifications, then send us an enquiry on WhatsApp.',
  brands,
  items,
  enquiry: {
    variantLabel: 'Type',
    variantPlaceholder: 'e.g. corded earplugs',
    unit: 'units',
    notePlaceholder: 'Noise level or machine, delivery date, other items',
  },
};
