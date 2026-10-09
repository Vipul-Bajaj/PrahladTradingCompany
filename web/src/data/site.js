export const company = {
  name: 'Prahlad Trading Company',
  owner: 'Bipin Agrawal',
  city: 'Raipur, Chhattisgarh',
  phoneDisplay: '081090 47714',
  phoneHref: 'tel:+918109047714',
  whatsapp: '918109047714', // country code + number, no + or spaces
  email: 'prahladtrading@yahoo.co.in',
  hours: 'Monday to Saturday, 10:30 AM – 7:30 PM',
  hoursShort: 'Mon–Sat, 10:30 AM – 7:30 PM',
  years: '20+',
};

export const enquiryMailto = (subject) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    'Hello,\n\nPlease share availability and price for:\n\nItem / size / quantity:\n\n\nCompany name:\nPhone:\n'
  )}`;

// relationship: 'authorized' = authorized dealer, 'stockist' = we sell their products.
export const brands = [
  { id: 'acme', name: 'Acme Universal', logo: 'logo-acme', makes: 'Safety shoes', relationship: 'authorized', site: 'https://global.acmeuniversal9.com/' },
  { id: 'mallcom', name: 'Mallcom', logo: 'logo-mallcom', makes: 'Safety shoes, gloves, respirators, workwear', relationship: 'authorized', site: 'https://www.mallcom.in/' },
  { id: 'footland', name: 'Footland', logo: 'logo-footland', makes: 'Safety shoes', relationship: 'authorized', site: 'https://www.footlandsafetyshoes.com/' },
  { id: 'karam', name: 'Karam', logo: 'logo-karam', makes: 'Helmets, harnesses, eyewear, respirators, workwear', relationship: 'stockist', site: 'https://www.karam.in/' },
  { id: 'udyogi', name: 'Udyogi', logo: 'logo-udyogi', makes: 'Helmets, respirators, fall protection, workwear', relationship: 'stockist', site: 'https://udyogisafety.com/' },
  { id: '3m', name: '3M', logo: 'logo-3m', makes: 'Eyewear, ear protection, respirators', relationship: 'stockist', site: 'https://www.3mindia.in/' },
  { id: 'omex', name: 'Omex', logo: 'logo-omex', makes: 'Fire extinguishers and fire safety equipment', relationship: 'stockist', site: 'https://www.omex.co.in/' },
  { id: 'ador', name: 'Ador', logo: 'logo-ador', makes: 'Welding electrodes, machines and accessories', relationship: 'stockist', site: 'https://adorwelding.com/' },
  { id: 'esab', name: 'ESAB', logo: 'logo-esab', makes: 'Welding electrodes, machines and helmets', relationship: 'stockist', site: 'https://esabindia.com/' },
  { id: 'gbkore', name: 'GB-Kore', logo: 'logo-gbkore', makes: 'Welding and cutting machines', relationship: 'stockist', site: 'https://gbkore.com/' },
];

export const brandName = (id) => brands.find((b) => b.id === id)?.name ?? id;

export const categories = [
  {
    id: 'head',
    name: 'Helmets',
    summary: 'Industrial safety helmets for plants, construction and electrical work.',
    items: ['Helmets with ratchet or pin-lock harness', 'Electrical-rated helmets', 'Chin straps and sweat bands', 'Helmet-mounted visors and ear muffs'],
    brands: ['karam', 'udyogi', 'mallcom'],
    media: 'cat-head',
    page: '/products/helmets/',
    pageLabel: 'View products',
  },
  {
    id: 'foot',
    name: 'Safety shoes',
    summary: 'Safety shoes and boots with steel toe protection for industrial and site use.',
    items: ['Steel-toe safety shoes', 'High-ankle safety boots', 'Gumboots', 'Heat- and oil-resistant soles'],
    brands: ['acme', 'mallcom', 'footland'],
    media: 'cat-foot',
    page: '/products/safety-shoes/',
    pageLabel: 'View products',
  },
  {
    id: 'hand',
    name: 'Gloves',
    summary: 'Hand protection for general handling and for cut, heat, chemical and electrical hazards.',
    items: ['Cotton and knitted gloves', 'Leather and canvas gloves', 'Cut-resistant gloves', 'Rubber, nitrile and PVC gloves', 'Electrical insulating gloves'],
    brands: ['mallcom'],
    media: 'cat-hand',
    page: '/products/gloves/',
    pageLabel: 'View products',
  },
  {
    id: 'eye',
    name: 'Eye protection',
    summary: 'Safety spectacles, goggles and welding eyewear.',
    items: ['Clear and tinted safety spectacles', 'Over-the-glasses eyewear', 'Chemical splash goggles', 'Gas and arc welding eyewear'],
    brands: ['karam', 'udyogi', '3m', 'mallcom'],
    media: 'cat-eye',
    page: '/products/eye-protection/',
    pageLabel: 'View products',
  },
  {
    id: 'ear',
    name: 'Ear protection',
    summary: 'Earplugs and earmuffs with rated noise reduction.',
    items: ['Disposable foam earplugs', 'Reusable earplugs', 'Headband earmuffs', 'Helmet-mounted earmuffs'],
    brands: ['karam', 'udyogi', '3m', 'mallcom'],
    media: 'cat-ear',
    page: '/products/ear-protection/',
    pageLabel: 'View products',
  },
  {
    id: 'welding',
    name: 'Welding products',
    summary: 'Electrodes, holders, welding helmets, goggles, and welding and cutting machines.',
    items: ['Mild steel and stainless steel electrodes', 'Electrode holders', 'Auto-darkening helmets and hand shields', 'Welding goggles', 'Stick, TIG, MIG and SAW machines', 'Plasma cutters'],
    brands: ['ador', 'esab', 'gbkore'],
    media: 'cat-welding',
    page: '/products/welding/',
    pageLabel: 'View products',
  },
  {
    id: 'respiratory',
    name: 'Respiratory protection',
    summary: 'Disposable respirators, reusable half and full-face masks, and filters for dust, fumes and gases.',
    items: ['FFP1, FFP2 and FFP3 respirators', 'Welding and painting respirators', 'Half and full-face masks', 'Gas, vapour and particulate filters'],
    brands: ['karam', 'udyogi', '3m', 'mallcom'],
    media: 'cat-respiratory',
    page: '/products/respiratory/',
    pageLabel: 'View products',
  },
  {
    id: 'body',
    name: 'Workwear',
    summary: 'Coveralls, flame-resistant and arc-flash clothing, high-visibility vests, rainwear and welding leathers.',
    items: ['Cotton coveralls', 'Flame-resistant coveralls', 'Arc-flash jackets', 'Hi-vis vests and jackets', 'Rain suits', 'Leather aprons and leg guards'],
    brands: ['karam', 'udyogi', 'mallcom'],
    media: 'cat-body',
    page: '/products/workwear/',
    pageLabel: 'View products',
  },
  {
    id: 'fall',
    name: 'Fall protection',
    summary: 'Full body harnesses, lanyards, fall arresters and anchorage for work at height.',
    items: ['Full body harnesses', 'Energy-absorbing and twin lanyards', 'Retractable fall arresters', 'Anchors and karabiners'],
    brands: ['karam', 'udyogi'],
    media: 'cat-fall',
    page: '/products/fall-protection/',
    pageLabel: 'View products',
  },
  {
    id: 'fire',
    name: 'Fire safety',
    summary: 'Fire extinguishers, refills, and hydrant, sprinkler and detection equipment.',
    items: ['ABC, CO₂, clean agent, foam and water extinguishers', 'Automatic and trolley extinguishers', 'Refills and CO₂ cartridges', 'Hydrant valves, hoses, sprinklers and detectors'],
    brands: ['omex'],
    media: 'cat-fire',
    page: '/products/fire-safety/',
    pageLabel: 'View products',
  },
];
