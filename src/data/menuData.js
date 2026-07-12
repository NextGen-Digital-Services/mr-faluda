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
    tag: 'Signature',
    accentColor: '#D96A2B', // Saffron Terracotta
    iconName: 'Dessert'
  },
  {
    id: 'thick-shakes',
    title: 'Thick Shakes',
    description: 'Rich & Creamy',
    startingPrice: 99,
    tag: 'Indulgent',
    accentColor: '#D96A2B', // Saffron Terracotta
    iconName: 'CupSoda'
  },
  {
    id: 'premium-scoops',
    title: 'Premium Scoops',
    description: "Flavors You'll Love",
    startingPrice: 80,
    tag: 'Classic',
    accentColor: '#1F6E43', // Emerald Green
    iconName: 'FlameKindling'
  },
  {
    id: 'premium-kulfi',
    title: 'Premium Kulfi',
    description: 'Traditional Indian Goodness',
    startingPrice: 75,
    tag: 'Traditional',
    accentColor: '#7A1930', // Heritage Maroon
    iconName: 'IceCream'
  },
  {
    id: 'classic-kulfi',
    title: 'The Classic Kulfi',
    description: 'Lighter & Refreshing, Served in a Bowl',
    startingPrice: 60,
    tag: 'Refreshing',
    accentColor: '#7A1930', // Heritage Maroon
    iconName: 'Sparkles'
  },
  {
    id: 'kulfi-pop',
    title: 'Kulfi Pop',
    description: 'Premium • Organic • Delicious',
    startingPrice: 30,
    image: kulfiPopImg,
    tag: 'Organic',
    accentColor: '#5B2A6E', // Plum Berry
    iconName: 'Candy'
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
    subBadge: 'No Added Sugar',
    accentColor: '#5B2A6E', // Plum Berry
    iconName: 'Sparkles'
  }
];
