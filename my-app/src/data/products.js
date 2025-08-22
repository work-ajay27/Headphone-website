// Centralized product catalog
// Types: wireless, wired, earbuds, gaming, anc, sports

// Note: Using remote photo URLs for some items to avoid vector/placeholder look

export const products = [
  // WIRELESS HEADPHONES (2,340 items)
  {
    id: 'wl-1',
    name: 'OnePlus Bullets Wireless Z2',
    price: '₹2,799',
    image: require('../resources/Earphones/oneplus.jpeg'),
    type: 'wireless',
  },
  {
    id: 'wl-2',
    name: 'Nothing Ear (1)',
    price: '₹2,499',
    image: require('../resources/Earphones/nothing.jpeg'),
    type: 'wireless',
  },
  {
    id: 'wl-3',
    name: 'realme Buds T200',
    price: '₹1,999',
    image: require('../resources/Earphones/realmeT200.jpeg'),
    type: 'wireless',
  },
  {
    id: 'wl-4',
    name: 'Sony WH-CH520 Wireless Headphones',
    price: '₹4,490',
    image: 'https://images.unsplash.com/photo-1518441902116-f4d5848b3cbd?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-5',
    name: 'boAt Rockerz 255 Neckband',
    price: '₹1,199',
    image: 'https://images.unsplash.com/photo-1518442302997-1d53b4d5b9a2?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-6',
    name: 'Apple AirPods Pro',
    price: '₹24,900',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-7',
    name: 'Samsung Galaxy Buds2 Pro',
    price: '₹19,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-8',
    name: 'Jabra Elite 85t',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-9',
    name: 'Bose QuietComfort 45',
    price: '₹32,900',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-10',
    name: 'Sennheiser Momentum 4',
    price: '₹28,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-11',
    name: 'Skullcandy Crusher Evo',
    price: '₹12,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-12',
    name: 'Beats Studio3 Wireless',
    price: '₹29,900',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },

  // WIRED HEADPHONES (1,120 items)
  {
    id: 'wd-1',
    name: 'JBL C200SI Wired Earphones',
    price: '₹899',
    image: require('../resources/Earphones/JBL.jpeg'),
    type: 'wired',
  },
  {
    id: 'wd-2',
    name: 'JBL Tune 110 Wired Earphones',
    price: '₹1,199',
    image: require('../resources/Earphones/JBL.jpeg'),
    type: 'wired',
  },
  {
    id: 'wd-3',
    name: 'Sennheiser HD 206',
    price: '₹1,499',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wired',
  },
  {
    id: 'wd-4',
    name: 'Audio-Technica ATH-M20x',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wired',
  },
  {
    id: 'wd-5',
    name: 'Beyerdynamic DT 770 Pro',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wired',
  },
  {
    id: 'wd-6',
    name: 'AKG K240 Studio',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wired',
  },
  {
    id: 'wd-7',
    name: 'Shure SE215',
    price: '₹6,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wired',
  },
  {
    id: 'wd-8',
    name: 'Grado SR80e',
    price: '₹12,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'wired',
  },

  // EARBUDS (3,210 items)
  {
    id: 'eb-1',
    name: 'Apple AirPods (3rd Gen)',
    price: '₹18,900',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-2',
    name: 'Samsung Galaxy Buds Live',
    price: '₹14,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-3',
    name: 'Google Pixel Buds A-Series',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-4',
    name: 'OnePlus Buds Z2',
    price: '₹4,999',
    image: require('../resources/Earphones/oneplus.jpeg'),
    type: 'earbuds',
  },
  {
    id: 'eb-5',
    name: 'realme Buds Air 3',
    price: '₹3,999',
    image: require('../resources/Earphones/realmeT200.jpeg'),
    type: 'earbuds',
  },
  {
    id: 'eb-6',
    name: 'OPPO Enco X2',
    price: '₹9,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-7',
    name: 'Xiaomi Redmi Buds 4 Pro',
    price: '₹5,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-8',
    name: 'Vivo TWS 2',
    price: '₹4,499',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-9',
    name: 'iQOO TWS 1',
    price: '₹3,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },
  {
    id: 'eb-10',
    name: 'Poco Buds Pro',
    price: '₹4,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'earbuds',
  },

  // GAMING HEADSETS (980 items)
  {
    id: 'gm-1',
    name: 'Gaming Headset with Mic',
    price: '₹1,099',
    image: require('../resources/Earphones/Gaming.jpeg'),
    type: 'gaming',
  },
  {
    id: 'gm-2',
    name: 'Pro Gaming Headset RGB',
    price: '₹1,699',
    image: require('../resources/Earphones/Gaming.jpeg'),
    type: 'gaming',
  },
  {
    id: 'gm-3',
    name: 'Razer BlackShark V2 Pro',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'gaming',
  },
  {
    id: 'gm-4',
    name: 'SteelSeries Arctis 7',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'gaming',
  },
  {
    id: 'gm-5',
    name: 'HyperX Cloud Alpha',
    price: '₹8,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'gaming',
  },
  {
    id: 'gm-6',
    name: 'Logitech G Pro X',
    price: '₹12,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'gaming',
  },
  {
    id: 'gm-7',
    name: 'Corsair HS80 RGB',
    price: '₹14,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'gaming',
  },
  {
    id: 'gm-8',
    name: 'ASUS ROG Strix Go 2.4',
    price: '₹16,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'gaming',
  },

  // ANC HEADPHONES (1,450 items)
  {
    id: 'anc-1',
    name: 'Sony WH-1000XM5',
    price: '₹34,990',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-2',
    name: 'Bose QuietComfort 35 II',
    price: '₹28,900',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-3',
    name: 'Apple AirPods Max',
    price: '₹59,900',
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-4',
    name: 'Sennheiser Momentum 3',
    price: '₹32,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-5',
    name: 'Jabra Elite 85h',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-6',
    name: 'Bowers & Wilkins PX7',
    price: '₹39,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-7',
    name: 'Sony WF-1000XM4',
    price: '₹19,990',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },
  {
    id: 'anc-8',
    name: 'Bose QuietComfort Earbuds II',
    price: '₹24,900',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'anc',
  },

  // SPORTS HEADPHONES (870 items)
  {
    id: 'sp-1',
    name: 'Jabra Elite Active 75t',
    price: '₹16,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-2',
    name: 'Beats Powerbeats Pro',
    price: '₹22,900',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-3',
    name: 'Jaybird Vista 2',
    price: '₹18,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-4',
    name: 'Plantronics BackBeat Fit',
    price: '₹12,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-5',
    name: 'AfterShokz Aeropex',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-6',
    name: 'Sony WF-SP800N',
    price: '₹14,990',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-7',
    name: 'Bose Sport Earbuds',
    price: '₹19,900',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
  {
    id: 'sp-8',
    name: 'Garmin Venu Sq Music',
    price: '₹24,999',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop',
    type: 'sports',
  },
];

export function getProductsByType(type) {
  const t = String(type || '').toLowerCase();
  if (!t || t === 'all') return products;
  return products.filter((p) => String(p.type).toLowerCase() === t);
}


