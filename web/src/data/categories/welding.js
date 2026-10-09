// Welding products. Sources (official): adorwelding.com, esabindia.com /
// esab.com (India), gbkore.com, udyogisafety.com and karam.in product pages.
const brands = [
  { id: 'ador', name: 'Ador' },
  { id: 'esab', name: 'ESAB' },
  { id: 'gbkore', name: 'GB-Kore' },
  { id: 'udyogi', name: 'Udyogi' },
  { id: 'karam', name: 'Karam' },
];

const items = [
  {
    "id": "ador-superbond",
    "brand": "ador",
    "name": "Ador Superbond E6013",
    "media": "weld-ador-superbond",
    "tagline": "The everyday rutile electrode for structural steel fabrication.",
    "highlights": [
      "E6013",
      "Rutile",
      "All position"
    ],
    "specs": [
      [
        "Classification",
        "AWS E6013"
      ],
      [
        "Coating",
        "Rutile"
      ],
      [
        "Position",
        "All positions"
      ],
      [
        "Weld quality",
        "X-ray quality deposit"
      ],
      [
        "Typical use",
        "Steel structures, tanks, truck bodies, ships, pipelines, bridges"
      ],
      [
        "Base metals",
        "ASTM SA 283 Gr. A/B/C/D"
      ]
    ]
  },
  {
    "id": "ador-kingbond-s",
    "brand": "ador",
    "name": "Ador Kingbond S E6013",
    "media": "weld-ador-kingbond-s",
    "tagline": "Economical rutile electrode for general and light fabrication.",
    "highlights": [
      "E6013",
      "Rutile",
      "General purpose"
    ],
    "specs": [
      [
        "Classification",
        "AWS E6013"
      ],
      [
        "Coating",
        "Rutile"
      ],
      [
        "Position",
        "All positions"
      ],
      [
        "Weld quality",
        "Radiographic quality"
      ],
      [
        "Typical use",
        "General fabrication, light construction, sheet metal, steel furniture"
      ]
    ]
  },
  {
    "id": "ador-supabase",
    "brand": "ador",
    "name": "Ador Supabase E7018",
    "media": "weld-ador-supabase",
    "tagline": "Low-hydrogen basic electrode for pressure vessels, pipes and heavy structures.",
    "highlights": [
      "E7018",
      "Low hydrogen",
      "Pipe 5G/6G"
    ],
    "specs": [
      [
        "Classification",
        "AWS E7018"
      ],
      [
        "Coating",
        "Basic, iron powder"
      ],
      [
        "Metal recovery",
        "About 115%"
      ],
      [
        "Position",
        "All positions; pipe welding in 5G and 6G"
      ],
      [
        "Weld quality",
        "Radiographic"
      ],
      [
        "Typical use",
        "Pressure vessels, pipes, storage tanks, bridges, heavy structures"
      ],
      [
        "Base metals",
        "ASTM SA 516 Gr. 55/60; IS 2002; IS 2062"
      ]
    ],
    "note": "Low-hydrogen electrodes must be kept dry; re-bake as per the manufacturer’s instructions before use."
  },
  {
    "id": "ador-superinox-1c",
    "brand": "ador",
    "name": "Ador Superinox 1C E308L-16",
    "media": "weld-ador-superinox-1c",
    "tagline": "Stainless steel electrode for 304 / 304L grades.",
    "highlights": [
      "E308L-16",
      "Stainless",
      "All position"
    ],
    "specs": [
      [
        "Classification",
        "AWS E308L-16"
      ],
      [
        "Coating",
        "Rutile"
      ],
      [
        "Weld metal",
        "Extra-low-carbon 19/10 austenitic"
      ],
      [
        "Corrosion",
        "Corrosion and scaling resistance up to 800 °C"
      ],
      [
        "Typical use",
        "AISI 301, 302, 304, 304L, 308, 308L; boilers, reactors, SS piping"
      ]
    ]
  },
  {
    "id": "ador-superinox-2c",
    "brand": "ador",
    "name": "Ador Superinox 2C E316L-16",
    "media": "weld-ador-superinox-2c",
    "tagline": "Molybdenum-bearing stainless electrode for 316 / 316L.",
    "highlights": [
      "E316L-16",
      "Stainless",
      "Mo bearing"
    ],
    "specs": [
      [
        "Classification",
        "AWS E316L-16"
      ],
      [
        "Coating",
        "Rutile"
      ],
      [
        "Weld metal",
        "Extra-low-carbon 19/13/Mo"
      ],
      [
        "Corrosion",
        "Resists intergranular corrosion, SCC and pitting"
      ],
      [
        "Typical use",
        "AISI 316, 316L, 317, 318; chemical, marine, paper, textile plants"
      ]
    ]
  },
  {
    "id": "esab-ok-46-00-l",
    "brand": "esab",
    "name": "ESAB OK 46.00 L",
    "media": "weld-esab-ok4600l",
    "tagline": "Easy rutile electrode, tolerant of rust; welds in all positions including vertical down.",
    "highlights": [
      "E6013",
      "AC / DC",
      "All position"
    ],
    "specs": [
      [
        "Classification",
        "AWS A5.1 E6013; EN ISO 2560-A E 38 0 RC 12"
      ],
      [
        "Coating",
        "Rutile-cellulosic"
      ],
      [
        "Current",
        "AC or DC+/−"
      ],
      [
        "Mechanical (typical)",
        "Yield 400 MPa; tensile 510 MPa; elongation 28%"
      ],
      [
        "Impact",
        "70 J at 0 °C"
      ],
      [
        "Sizes",
        "2.5 × 350, 3.15 × 350, 4.0 × 450 mm"
      ],
      [
        "Typical use",
        "Short welds, root runs, tacking, bridging gaps"
      ]
    ]
  },
  {
    "id": "esab-ok-55-00-l",
    "brand": "esab",
    "name": "ESAB OK 55.00 L",
    "media": "weld-esab-ok5500l",
    "tagline": "Low-hydrogen E7018-1 electrode with excellent low-temperature toughness.",
    "highlights": [
      "E7018-1 H4",
      "Low hydrogen",
      "−45 °C impact"
    ],
    "specs": [
      [
        "Classification",
        "AWS A5.1 E7018-1 H4 R; EN ISO 2560-A E 46 5 B 32 H5"
      ],
      [
        "Coating",
        "Basic"
      ],
      [
        "Current",
        "AC (min. 65 V OCV) or DC+"
      ],
      [
        "Diffusible hydrogen",
        "Below 4 ml/100 g"
      ],
      [
        "Mechanical (typical, AWS)",
        "Yield 500 MPa; tensile 580 MPa; elongation 30%"
      ],
      [
        "Impact",
        "130 J at −45 °C"
      ],
      [
        "Sizes",
        "2.5 to 6.0 mm"
      ],
      [
        "Typical use",
        "High-strength low-alloy steels"
      ]
    ],
    "note": "Low-hydrogen electrodes must be kept dry; re-bake as per the manufacturer’s instructions before use."
  },
  {
    "id": "ador-hc-600",
    "brand": "ador",
    "name": "Ador Holder HC-600",
    "media": "weld-ador-hc600",
    "tagline": "Semi-insulated heavy-duty electrode holder for sites and workshops.",
    "highlights": [
      "600 A",
      "IS 2641",
      "Type B"
    ],
    "specs": [
      [
        "Type",
        "Type B, semi-insulated, heavy duty"
      ],
      [
        "Rating",
        "600 A"
      ],
      [
        "Spatter guard",
        "FR-grade plastic"
      ],
      [
        "Handle",
        "Paper Hylum, heat resistant and light"
      ],
      [
        "Standard",
        "IS 2641"
      ]
    ]
  },
  {
    "id": "ador-king-sword-600",
    "brand": "ador",
    "name": "Ador Holder King Sword-600",
    "media": "weld-ador-kingsword",
    "tagline": "Fully insulated, lightweight heavy-duty electrode holder.",
    "highlights": [
      "600 A",
      "Fully insulated",
      "EN 60974-11"
    ],
    "specs": [
      [
        "Type",
        "Type B, fully insulated head"
      ],
      [
        "Rating",
        "600 A"
      ],
      [
        "Handle",
        "Fibreglass polyamide"
      ],
      [
        "Insulation",
        "Above 1 MΩ; dielectric strength up to 3000 V"
      ],
      [
        "Cable",
        "Up to Al 120 / Cu 70 sq mm"
      ],
      [
        "Standard",
        "CE, EN 60974-11"
      ]
    ]
  },
  {
    "id": "ador-king-shield-auto",
    "brand": "ador",
    "name": "Ador King Shield Auto",
    "media": "weld-ador-kingshield-auto",
    "tagline": "Auto-darkening welding helmet with selectable shade 9–13.",
    "highlights": [
      "Auto-darkening",
      "DIN 9–13",
      "EN 379"
    ],
    "specs": [
      [
        "Type",
        "Auto-darkening welding helmet"
      ],
      [
        "Viewing area",
        "92 × 41 mm"
      ],
      [
        "Light state",
        "Shade 4, true-colour"
      ],
      [
        "Dark shade",
        "DIN 9–13, external knob"
      ],
      [
        "Standard",
        "Optical classes to EN 379"
      ],
      [
        "Features",
        "Fast switching, auto delay"
      ]
    ]
  },
  {
    "id": "ador-king-shield-hand",
    "brand": "ador",
    "name": "Ador King Shield Hand",
    "media": "weld-ador-kingshield-hand",
    "tagline": "Lightweight hand-held welding shield with concealed handle.",
    "highlights": [
      "Hand shield",
      "Under 500 g",
      "FR nylon"
    ],
    "specs": [
      [
        "Type",
        "Hand-held welding shield"
      ],
      [
        "Shell",
        "Flame-retardant glass-filled nylon, 2 mm"
      ],
      [
        "Lens size",
        "83 × 108 mm"
      ],
      [
        "Weight",
        "Under 500 g"
      ]
    ]
  },
  {
    "id": "esab-savage-a40",
    "brand": "esab",
    "name": "ESAB Savage A40",
    "media": "weld-esab-savage-a40",
    "tagline": "Auto-darkening helmet with large view, four sensors and grind mode.",
    "highlights": [
      "Auto-darkening",
      "DIN 9–13",
      "4 sensors"
    ],
    "specs": [
      [
        "Type",
        "Auto-darkening welding helmet"
      ],
      [
        "Viewing area",
        "100 × 50 mm"
      ],
      [
        "Shade",
        "Light 4; dark DIN 9–13 (external knob); grind mode"
      ],
      [
        "Switching",
        "0.08 ms light to dark"
      ],
      [
        "Sensors",
        "4 arc sensors"
      ],
      [
        "Power",
        "Solar assist plus CR2450 battery, low-battery alert"
      ],
      [
        "Standards",
        "ANSI Z87.1+; CSA Z94.3; EN ISO 16321"
      ],
      [
        "Weight",
        "500 g"
      ]
    ]
  },
  {
    "id": "esab-swarm-a20",
    "brand": "esab",
    "name": "ESAB Swarm A20",
    "media": "weld-esab-swarm-a20",
    "tagline": "Compact auto-darkening helmet for stick, MIG, TIG and plasma.",
    "highlights": [
      "Auto-darkening",
      "DIN 9–13",
      "EN 379"
    ],
    "specs": [
      [
        "Type",
        "Auto-darkening welding helmet"
      ],
      [
        "Viewing area",
        "93 × 43 mm"
      ],
      [
        "Shade",
        "Light 4; dark DIN 9–13; grind mode"
      ],
      [
        "Switching",
        "0.1 ms light to dark"
      ],
      [
        "Sensors",
        "2 arc sensors"
      ],
      [
        "Power",
        "Solar assist plus CR2032 battery"
      ],
      [
        "Standards",
        "EN 175, EN 379, EN 166; ANSI Z87.1; CSA Z94.3"
      ],
      [
        "Weight",
        "520 g"
      ]
    ]
  },
  {
    "id": "udyogi-ultraview-ir",
    "brand": "udyogi",
    "name": "Udyogi Ultraview IR Welding Goggles",
    "media": "weld-udyogi-ultraview-ir",
    "tagline": "Shade 5 IR goggles with soft body, for gas welding and cutting.",
    "highlights": [
      "Shade 5",
      "IR",
      "Anti-fog"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, shade 5 with IR protection"
      ],
      [
        "Coating",
        "Hard coat and anti-fog"
      ],
      [
        "Body",
        "Soft co-injected polymer, fits over glasses"
      ],
      [
        "Impact",
        "B (120 m/s)"
      ],
      [
        "Ventilation",
        "Indirect"
      ],
      [
        "Weight",
        "80 g"
      ]
    ]
  },
  {
    "id": "udyogi-gw-250",
    "brand": "udyogi",
    "name": "Udyogi GW 250 Welding Goggles",
    "media": "weld-udyogi-gw250",
    "tagline": "Flip-up goggles: green shade 5 outer lens, clear inner lens.",
    "highlights": [
      "Flip-up",
      "Shade 5",
      "Budget"
    ],
    "specs": [
      [
        "Lens",
        "Flip-up green shade 5 outside, clear inside"
      ],
      [
        "Body",
        "Soft PVC with ABS eye cups"
      ],
      [
        "Impact",
        "F (45 m/s)"
      ],
      [
        "UV",
        "Filters 99.9%"
      ],
      [
        "Weight",
        "80 g"
      ]
    ]
  },
  {
    "id": "karam-es003-w",
    "brand": "karam",
    "name": "Karam ES003 Gas Welding Spectacles",
    "media": "eye-karam-es003",
    "tagline": "Shade IR-5 spectacles for gas welding and cutting.",
    "highlights": [
      "IR-5 shade",
      "EN 166",
      "36 g"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, hard coated"
      ],
      [
        "Shade",
        "IR-5"
      ],
      [
        "Weight",
        "About 36 g"
      ],
      [
        "Certification",
        "EN 166:2001"
      ]
    ],
    "code": "ES003"
  },
  {
    "id": "karam-es004-w",
    "brand": "karam",
    "name": "Karam ES004 Arc Welding Eyewear",
    "media": "eye-karam-es004",
    "tagline": "Flip-up eyewear with IR-11 lens for electric arc welding.",
    "highlights": [
      "IR-11 shade",
      "EN 175",
      "Flip-up"
    ],
    "specs": [
      [
        "Lens",
        "Polycarbonate, hard coated"
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
      ]
    ],
    "code": "ES004"
  },
  {
    "id": "ador-king-leathers",
    "brand": "ador",
    "name": "Ador King Apron, Sleeve and Leg Guards",
    "media": "weld-ador-leathers",
    "tagline": "Chrome-leather welder’s apron, sleeve guards and leg guards, Kevlar stitched.",
    "highlights": [
      "Chrome leather",
      "Kevlar stitched",
      "Set"
    ],
    "specs": [
      [
        "Apron",
        "Heavy-duty chrome leather, riveted, leather straps"
      ],
      [
        "Sleeve guard",
        "Soft chrome leather, 18½ inch, Velcro, knitted wrist"
      ],
      [
        "Leg guard",
        "Split leather"
      ],
      [
        "Stitching",
        "Kevlar throughout"
      ]
    ]
  },
  {
    "id": "ador-champ-400x",
    "brand": "ador",
    "name": "Ador Champ 400 X",
    "media": "weld-ador-champ400x",
    "tagline": "Three-phase inverter stick welder with VRD for heavy-duty work.",
    "highlights": [
      "MMA 400 A",
      "3-phase",
      "VRD"
    ],
    "specs": [
      [
        "Process",
        "Stick (SMAW/MMA); TIG with external HF unit"
      ],
      [
        "Type",
        "Three-phase inverter DC welder"
      ],
      [
        "Safety",
        "Built-in VRD reduces OCV to 6–9 V DC"
      ],
      [
        "Controls",
        "Hot start and arc force"
      ],
      [
        "Protection",
        "Over/under voltage, over temperature, single phasing (auto reset)"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "ador-champtig-300p",
    "brand": "ador",
    "name": "Ador Champtig 300P",
    "media": "weld-ador-champtig300p",
    "tagline": "Pulse TIG / MMA inverter with built-in HF start.",
    "highlights": [
      "Pulse TIG",
      "MMA",
      "3-phase"
    ],
    "specs": [
      [
        "Process",
        "Pulse TIG and MMA (DC)"
      ],
      [
        "Type",
        "Three-phase inverter"
      ],
      [
        "Arc start",
        "Built-in HF ignition"
      ],
      [
        "Cooling",
        "Water-cooled torch option"
      ],
      [
        "Protection",
        "Over/under voltage, over current, over temperature"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "ador-champmig-300",
    "brand": "ador",
    "name": "Ador Champmig 300",
    "media": "weld-ador-champmig300",
    "tagline": "Three-phase inverter MIG / MMA welder with digital panel.",
    "highlights": [
      "MIG",
      "MMA",
      "Digital"
    ],
    "specs": [
      [
        "Process",
        "MIG and MMA"
      ],
      [
        "Type",
        "Three-phase inverter DC welder"
      ],
      [
        "Panel",
        "Digital, 7-segment LED display"
      ],
      [
        "Features",
        "Anti-stick in MMA; optional remote control"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "esab-arc-400i",
    "brand": "esab",
    "name": "ESAB Arc 400i",
    "media": "weld-esab-arc400i",
    "tagline": "Compact IGBT inverter stick welder, 400 A.",
    "highlights": [
      "MMA 400 A",
      "3-phase",
      "24.5 kg"
    ],
    "specs": [
      [
        "Process",
        "Stick (SMAW/MMA)"
      ],
      [
        "Input",
        "3-phase, 400 V ±15%, 50 Hz"
      ],
      [
        "Current range",
        "60–400 A"
      ],
      [
        "Duty cycle",
        "400 A at 60%; 310 A at 100%"
      ],
      [
        "OCV",
        "74 V"
      ],
      [
        "Controls",
        "Arc force and hot start"
      ],
      [
        "Weight",
        "24.5 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "esab-fabricator-es-400i",
    "brand": "esab",
    "name": "ESAB Fabricator ES 400i",
    "media": "weld-esab-es400i",
    "tagline": "Stick and Lift-TIG inverter with VRD, for leads up to 100 m.",
    "highlights": [
      "MMA + TIG",
      "400 A",
      "VRD"
    ],
    "specs": [
      [
        "Process",
        "Stick (SMAW) and Lift TIG"
      ],
      [
        "Input",
        "415 V ±15%, 3-phase, 50/60 Hz"
      ],
      [
        "Current range",
        "20–400 A"
      ],
      [
        "Duty cycle",
        "400 A at 60%; 310 A at 100%"
      ],
      [
        "Safety",
        "VRD"
      ],
      [
        "Leads",
        "Up to 100 m"
      ],
      [
        "Weight",
        "29.5 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-arc-400-mos",
    "brand": "gbkore",
    "name": "GB-Kore ARC 400 MOS",
    "media": "weld-gbkore-arc400mos",
    "tagline": "Portable MOSFET stick welder, 40–400 A.",
    "highlights": [
      "MMA 400 A",
      "3-phase",
      "26.5 kg"
    ],
    "specs": [
      [
        "Process",
        "Stick (MMA)"
      ],
      [
        "Input",
        "3-phase AC 380 V ±15%"
      ],
      [
        "Output current",
        "40–400 A"
      ],
      [
        "Duty cycle",
        "60%"
      ],
      [
        "Electrodes",
        "1.6–5.0 mm"
      ],
      [
        "OCV",
        "68 V"
      ],
      [
        "Protection",
        "IP21; insulation class F"
      ],
      [
        "Weight",
        "26.5 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-arc-630ij",
    "brand": "gbkore",
    "name": "GB-Kore ARC 630IJ",
    "media": "weld-gbkore-arc630ij",
    "tagline": "Heavy-duty IGBT stick welder up to 630 A, also for gouging.",
    "highlights": [
      "MMA 630 A",
      "IGBT",
      "Heavy duty"
    ],
    "specs": [
      [
        "Process",
        "Stick (MMA)"
      ],
      [
        "Input",
        "3-phase AC 380 V ±15%"
      ],
      [
        "Output current",
        "50–630 A"
      ],
      [
        "Duty cycle",
        "60%"
      ],
      [
        "Electrodes",
        "1.6–5.0 mm"
      ],
      [
        "OCV",
        "90 V"
      ],
      [
        "Protection",
        "IP21; insulation class H"
      ],
      [
        "Weight",
        "58 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-tig-200",
    "brand": "gbkore",
    "name": "GB-Kore TIG 200",
    "media": "weld-gbkore-tig200",
    "tagline": "Single-phase TIG / MMA inverter, 10 kg.",
    "highlights": [
      "TIG + MMA",
      "1-phase",
      "10 kg"
    ],
    "specs": [
      [
        "Process",
        "TIG and MMA"
      ],
      [
        "Input",
        "1-phase AC 220 V ±15%"
      ],
      [
        "Output current",
        "10–200 A"
      ],
      [
        "Duty cycle",
        "60%"
      ],
      [
        "Arc start",
        "HF"
      ],
      [
        "Protection",
        "IP21S"
      ],
      [
        "Weight",
        "10 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-tig-400ij",
    "brand": "gbkore",
    "name": "GB-Kore TIG 400IJ",
    "media": "weld-gbkore-tig400ij",
    "tagline": "Three-phase pulse TIG / MMA inverter, 10–400 A.",
    "highlights": [
      "Pulse TIG",
      "400 A",
      "3-phase"
    ],
    "specs": [
      [
        "Process",
        "Pulse TIG and MMA"
      ],
      [
        "Input",
        "3-phase AC 415 V ±15%"
      ],
      [
        "Output current",
        "10–400 A"
      ],
      [
        "Duty cycle",
        "60%"
      ],
      [
        "Pulse frequency",
        "0.5–15 Hz and 14–450 Hz"
      ],
      [
        "Plate thickness",
        "2–20 mm"
      ],
      [
        "Arc start",
        "HF"
      ],
      [
        "Weight",
        "34 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-mig-400ij",
    "brand": "gbkore",
    "name": "GB-Kore MIG 400IJ",
    "media": "weld-gbkore-mig400ij",
    "tagline": "Three-phase MIG / MMA inverter for 1.0–1.2 mm wire.",
    "highlights": [
      "MIG + MMA",
      "400 A",
      "3-phase"
    ],
    "specs": [
      [
        "Process",
        "MIG/MAG and MMA"
      ],
      [
        "Input",
        "3-phase 415 V ±15%"
      ],
      [
        "Output current",
        "60–400 A (MIG); 40–400 A (MMA)"
      ],
      [
        "Duty cycle",
        "60%"
      ],
      [
        "Wire",
        "1.0–1.2 mm"
      ],
      [
        "Protection",
        "IP21"
      ],
      [
        "Weight",
        "40 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-mz-1000",
    "brand": "gbkore",
    "name": "GB-Kore MZ 1000",
    "media": "weld-gbkore-mz1000",
    "tagline": "Submerged arc welder (SAW) up to 1000 A, also MMA and gouging.",
    "highlights": [
      "SAW",
      "1000 A",
      "100% duty"
    ],
    "specs": [
      [
        "Process",
        "Submerged arc (SAW), MMA, carbon gouging"
      ],
      [
        "Input",
        "3-phase 380/415 V ±15%"
      ],
      [
        "Current range",
        "60–1000 A"
      ],
      [
        "Duty cycle",
        "100%"
      ],
      [
        "Wire",
        "3–6 mm"
      ],
      [
        "Plate thickness",
        "8–20 mm"
      ],
      [
        "Weight",
        "98 kg"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  },
  {
    "id": "gbkore-cut-120cp",
    "brand": "gbkore",
    "name": "GB-Kore CUT 120CP",
    "media": "weld-gbkore-cut120cp",
    "tagline": "Plasma cutter with built-in air compressor, 30–120 A.",
    "highlights": [
      "Plasma cutter",
      "120 A",
      "Built-in air"
    ],
    "specs": [
      [
        "Process",
        "Plasma cutting; manual (MMA) welding"
      ],
      [
        "Input",
        "3-phase 380 V ±15%"
      ],
      [
        "Output current",
        "30–120 A"
      ],
      [
        "Duty cycle",
        "35%"
      ],
      [
        "Gas",
        "Built-in compressor; external air optional (0.5–0.6 MPa)"
      ],
      [
        "Torch cooling",
        "Air"
      ],
      [
        "Protection",
        "IP21S"
      ]
    ],
    "note": "Machine specifications are as published by the manufacturer. Tell us your power supply (single or three phase) and the work, and we will confirm the right model."
  }
];

export default {
  slug: 'welding',
  title: 'Welding products',
  lede:
    'Welding electrodes, electrode holders, welding helmets and goggles, welder’s leathers, and welding and cutting machines from Ador, ESAB and GB-Kore. Open a product for its specifications, then send us an enquiry on WhatsApp.',
  brands,
  items,
  enquiry: {
    variantLabel: 'Size / details',
    variantPlaceholder: 'e.g. 3.15 mm, 10 packets',
    unit: 'units',
    notePlaceholder: 'Power supply, type of job, delivery date',
  },
};
