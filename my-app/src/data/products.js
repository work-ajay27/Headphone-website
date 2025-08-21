// Centralized product catalog
// Types: wireless, wired, gaming

// Note: Using remote photo URLs for some items to avoid vector/placeholder look

export const products = [
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
    name: 'OnePlus Bullets Wireless Z2 (Black)',
    price: '₹2,299',
    image: require('../resources/Earphones/oneplus.jpeg'),
    type: 'wireless',
  },
  {
    id: 'wl-5',
    name: 'Nothing Ear (Stick)',
    price: '₹1,999',
    image: require('../resources/Earphones/nothing.jpeg'),
    type: 'wireless',
  },
  {
    id: 'wl-6',
    name: 'realme Buds T200 (Blue)',
    price: '₹2,199',
    image: require('../resources/Earphones/realmeT200.jpeg'),
    type: 'wireless',
  },
  {
    id: 'wl-7',
    name: 'Sony WH-CH520 Wireless Headphones',
    price: '₹4,490',
    image: 'https://images.unsplash.com/photo-1518441902116-f4d5848b3cbd?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },
  {
    id: 'wl-8',
    name: 'boAt Rockerz 255 Neckband',
    price: '₹1,199',
    image: 'https://images.unsplash.com/photo-1518442302997-1d53b4d5b9a2?q=80&w=800&auto=format&fit=crop',
    type: 'wireless',
  },

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
];

export function getProductsByType(type) {
  const t = String(type || '').toLowerCase();
  if (!t || t === 'all') return products;
  return products.filter((p) => String(p.type).toLowerCase() === t);
}


