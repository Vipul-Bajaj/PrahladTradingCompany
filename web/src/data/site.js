export const company = {
  name: 'Prahlad Trading Company',
  owner: 'Bipin Agrawal',
  city: 'Raipur, Chhattisgarh',
  phoneDisplay: '081090 47714',
  phoneHref: 'tel:+918109047714',
  email: 'prahladtrading@yahoo.co.in',
  hours: 'Monday to Saturday, 10:30 AM – 7:30 PM',
  hoursShort: 'Mon–Sat, 10:30 AM – 7:30 PM',
  years: '20+',
};

export const enquiryMailto = (subject) =>
  `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    'Hello,\n\nPlease share availability and price for:\n\nItem / size / quantity:\n\n\nCompany name:\nPhone:\n'
  )}`;

// relationship: 'authorized' = authorized dealer, 'stockist' = we sell their products
export const brands = [
  {
    id: 'acme',
    name: 'Acme Universal',
    logo: 'logo-acme',
    makes: 'Safety shoes',
    relationship: 'authorized',
    site: 'https://global.acmeuniversal9.com/',
  },
  {
    id: 'karam',
    name: 'Karam',
    logo: 'logo-karam',
    makes: 'Helmets, harnesses, eyewear, respirators, workwear',
    relationship: 'stockist',
    site: 'https://www.karam.in/',
  },
  {
    id: 'udyogi',
    name: 'Udyogi',
    logo: 'logo-udyogi',
    makes: 'Gloves, welding protection, workwear',
    relationship: 'authorized',
    site: 'https://udyogisafety.com/',
  },
  {
    id: 'mallcom',
    name: 'Mallcom',
    logo: 'logo-mallcom',
    makes: 'Safety shoes, gloves, workwear',
    relationship: 'authorized',
    site: 'https://www.mallcom.in/',
  },
  {
    id: 'omex',
    name: 'Omex',
    logo: 'logo-omex',
    makes: 'Fire extinguishers',
    relationship: 'authorized',
    site: 'https://www.omex.co.in/',
  },
];

export const brandName = (id) => brands.find((b) => b.id === id)?.name ?? id;

export const categories = [
  {
    id: 'head',
    name: 'Helmets',
    summary: 'Industrial safety helmets for plants, construction and electrical work.',
    items: ['Helmets with ratchet or pin-lock harness', 'Electrical-rated helmets', 'Chin straps and sweat bands', 'Helmet-mounted visors and ear muffs'],
    brands: ['karam', 'udyogi'],
    media: 'cat-head',
  },
  {
    id: 'foot',
    name: 'Safety shoes',
    summary: 'Steel-toe shoes and boots for factory floors, sites and wet areas.',
    items: ['Steel-toe safety shoes', 'High-ankle safety boots', 'Gumboots', 'Heat- and oil-resistant soles'],
    brands: ['acme', 'mallcom', 'karam', 'udyogi'],
    media: 'cat-foot',
  },
  {
    id: 'hand',
    name: 'Gloves',
    summary: 'Gloves matched to the job, from general handling to cut and chemical risk.',
    items: ['Cotton and knitted gloves', 'Leather and canvas gloves', 'Cut-resistant gloves', 'Rubber, nitrile and PVC gloves', 'Electrical insulating gloves'],
    brands: ['udyogi', 'karam', 'mallcom'],
    media: 'cat-hand',
  },
  {
    id: 'eye',
    name: 'Eye protection',
    summary: 'Spectacles and goggles against dust, flying particles and splashes.',
    items: ['Clear and tinted safety spectacles', 'Chemical splash goggles', 'Over-spectacle goggles'],
    brands: ['karam', 'udyogi'],
    media: 'cat-eye',
  },
  {
    id: 'welding',
    name: 'Welding protection',
    summary: 'Face shields and leather protection for welding and grinding.',
    items: ['Welding helmets and hand shields', 'Grinding face shields', 'Leather welding gloves', 'Leather aprons, sleeves and leg guards'],
    brands: ['udyogi', 'karam'],
    media: 'cat-welding',
  },
  {
    id: 'respiratory',
    name: 'Respiratory protection',
    summary: 'Masks and respirators for dust, fumes and vapours.',
    items: ['Disposable dust masks', 'Half-face respirators', 'Replacement filters and cartridges'],
    brands: ['karam', 'udyogi'],
    media: 'cat-respiratory',
  },
  {
    id: 'body',
    name: 'Workwear',
    summary: 'Coveralls, reflective jackets and rainwear for crews and visitors.',
    items: ['Coveralls and boiler suits', 'Reflective safety jackets', 'Raincoats', 'Aprons'],
    brands: ['karam', 'mallcom', 'udyogi'],
    media: 'cat-body',
  },
  {
    id: 'fall',
    name: 'Fall protection',
    summary: 'Harnesses and lanyards for work at height.',
    items: ['Full body harnesses', 'Lanyards with shock absorbers', 'Retractable fall arresters', 'Anchorages and karabiners'],
    brands: ['karam', 'udyogi'],
    media: 'cat-fall',
  },
  {
    id: 'fire',
    name: 'Fire extinguishers',
    summary: 'Extinguishers for offices, stores, workshops and plants.',
    items: ['ABC dry powder extinguishers', 'CO₂ extinguishers', 'Clean agent extinguishers', 'Modular automatic extinguishers'],
    brands: ['omex'],
    media: 'cat-fire',
  },
];
