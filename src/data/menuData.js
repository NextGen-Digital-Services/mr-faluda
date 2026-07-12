import royalFaloodaImg from '../assets/royal_falooda.png';
import blackJamunImg from '../assets/black_jamun_kulfi.png';
import kulfiPopImg from '../assets/kulfi_pop.png';

export const MENU_CATEGORIES = [
  {
    id: 'royal-falooda',
    title: 'The Royal Falooda',
    description: 'A Classic Delight',
    startingPrice: 149,
    image: royalFaloodaImg,
    tag: 'Signature'
  },
  {
    id: 'thick-shakes',
    title: 'Thick Shakes',
    description: 'Rich & Creamy',
    startingPrice: 99,
    tag: 'Indulgent'
  },
  {
    id: 'premium-scoops',
    title: 'Premium Scoops',
    description: "Flavors You'll Love",
    startingPrice: 80,
    tag: 'Classic'
  },
  {
    id: 'premium-kulfi',
    title: 'Premium Kulfi',
    description: 'Traditional Indian Goodness',
    startingPrice: 75,
    tag: 'Traditional'
  },
  {
    id: 'classic-kulfi',
    title: 'The Classic Kulfi',
    description: 'Lighter & Refreshing, Served in a Bowl',
    startingPrice: 60,
    tag: 'Refreshing'
  },
  {
    id: 'kulfi-pop',
    title: 'Kulfi Pop',
    description: 'Premium • Organic • Delicious',
    startingPrice: 30,
    image: kulfiPopImg,
    tag: 'Organic'
  }
];

export const SPECIAL_ITEMS = [
  {
    id: 'black-jamun-kulfi',
    title: 'Guilt-Free Black Jamun Kulfi',
    description: 'No Added Sugar — "Indulge Without Worry"',
    priceLabel: 'Specialty Range',
    image: blackJamunImg,
    tag: 'Guilt-Free',
    subBadge: 'No Added Sugar'
  }
];
