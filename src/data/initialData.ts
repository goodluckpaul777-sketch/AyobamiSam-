import { Category, FabricProduct, StoreSettings, SectionCategoryInfo, TailoringYardGuide, CustomerTestimonial } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
];

export const INITIAL_PRODUCTS: FabricProduct[] = [
  {
    id: 'asv-lace-01',
    productCode: '019004-1',
    name: 'Swiss Voile Lace - Royal Emerald & Gold',
    mainSection: 'cloths',
    category: 'Swiss Voile Lace',
    categorySlug: 'lace',
    fabricType: '100% Pure Swiss Cotton Voile with Metallic Threading',
    description: 'Heavyweight authentic Swiss Voile Lace with intricate eyelet cutouts and hand-sewn crystal rhinestones. Soft on the skin, vibrant non-fading emerald green hue.',
    unitLabel: '5 Yards (1 Bundle)',
    minimumOrder: 1,
    availableStock: 35,
    isNewArrival: true,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800',
    colors: ['Emerald Green', 'Royal Gold', 'Pure White'],
    suitableFor: ['Owambe Aso-Ebi Gowns', 'Peplum Blouse & Skirt', 'Bride & Groom Mother Outfits']
  },
  {
    id: 'asv-senator-01',
    productCode: '019004-2',
    name: 'Super 150s Wool Cashmere Senator Suiting',
    mainSection: 'cloths',
    category: 'Senator Suiting',
    categorySlug: 'senator',
    fabricType: 'Italian Wool Cashmere Blend (Super 150s)',
    description: 'Crisp, crease-resistant Senator wool cashmere for sharp executive kaftans and 2-piece native suits. Smooth texture with moderate weight.',
    unitLabel: '4 Yards (1 Cut)',
    minimumOrder: 1,
    availableStock: 50,
    isNewArrival: true,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    colors: ['Midnight Black', 'Deep Navy', 'Charcoal Grey', 'Wine Red'],
    suitableFor: ['Executive Senator Native Suits', 'Groom & Groomsmen Native Wear', 'Friday Office Kaftans']
  },
  {
    id: 'asv-shoe-01',
    productCode: '019005-1',
    name: 'Italian Leather 2-in-1 Matching Shoe & Handbag Set',
    mainSection: 'shoes',
    category: 'Matching Shoe & Bag Set',
    categorySlug: 'shoe-and-bag',
    fabricType: '100% Genuine Italian Calfskin Leather with Matching Clutch',
    description: 'Bespoke 2-in-1 matching footwear and leather clutch set. Hand-stitched with cushioned arch support, designed for Owambe, Agbada, and Senator outfits.',
    unitLabel: '1 Matching Set (Shoe + Bag)',
    minimumOrder: 1,
    availableStock: 20,
    isNewArrival: true,
    inStock: true,
    isFeatured: true,
    isMatchingSet: true,
    image: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800',
    colors: ['Rich Brown', 'Onyx Black', 'Burgundy'],
    suitableFor: ['Agbada & Senator Outfits', 'Weddings & Celebrations', 'Matching Couple Sets']
  },
  {
    id: 'asv-shoebag-01',
    productCode: '019005-2',
    name: 'Royal Velvet 2-in-1 Matching Shoe & Clutch Bag Set',
    mainSection: 'shoes',
    category: 'Matching Shoe & Bag Set',
    categorySlug: 'shoe-and-bag',
    fabricType: 'Luxury Velvet with Embellished Rhinestone Brooch',
    description: 'Perfect 2-in-1 matching footwear and evening clutch set for Owambe parties and weddings. Features 3-inch comfortable block heel.',
    unitLabel: '1 Matching Set (Shoe + Bag)',
    minimumOrder: 1,
    availableStock: 15,
    isNewArrival: true,
    inStock: true,
    isFeatured: true,
    isMatchingSet: true,
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800',
    colors: ['Royal Gold', 'Magenta Pink', 'Emerald Green'],
    suitableFor: ['Owambe Wedding Guests', 'Aso-Ebi Celebrations', 'Galas & Parties']
  },
  {
    id: 'asv-machine-01',
    productCode: '019006-1',
    name: 'Direct-Drive Automatic Industrial Sewing Machine',
    mainSection: 'tailoring-machine',
    category: 'Industrial Sewing Machine',
    categorySlug: 'industrial-machine',
    fabricType: 'Heavy-Duty Motorized Direct Drive Equipment',
    description: 'Energy-saving direct drive industrial lockstitch machine. Low noise, LED needle light, automatic thread trimmer, handles delicate laces to thick leather.',
    unitLabel: '1 Machine Set (Complete with Stand & Table)',
    minimumOrder: 1,
    availableStock: 10,
    isNewArrival: true,
    inStock: true,
    isFeatured: true,
    image: 'https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800',
    colors: ['Pure White / Industrial Metal'],
    suitableFor: ['Fashion Design Studios', 'Tailoring Workshops', 'Commercial Garment Production']
  }
];

export const STORE_SETTINGS: StoreSettings = {
  storeName: 'Ayobami SAM Ventures',
  tagline: 'Premium Fabrics, Bespoke Shoes & Bags, and Tailoring Equipment',
  address: '37/39 Balogun West, Molake House, Lagos Island, Nigeria',
  marketLocation: '37/39 Balogun West, Molake House, Lagos Island',
  city: 'Lagos Island',
  state: 'Lagos State',
  country: 'Nigeria',
  phone: '08033810865',
  phoneNumbers: ['08033810865', '+234 803 381 0865'],
  secondaryPhone: '+234 803 381 0865',
  whatsapp: '2348033810865',
  email: '',
  announcement: '✨ Welcome to Ayobami SAM Ventures! Direct Wholesale & Retail for Fabrics, Shoes, Matching Bags & Tailoring Machines. Click any product to order directly on WhatsApp!',
  themeColor: '#0F2E22',
  logoUrl: '/hero-logo.png',
  aboutText: 'Ayobami SAM Ventures (ASV) is your trusted Nigerian merchant for authentic Swiss Voile Laces, Dutch Wax Ankara, Cashmere Senator suitings, Atiku Brocades, handcrafted Italian native shoes, coordinated 2-in-1 matching shoe and bag sets, and industrial sewing equipment. Serving retail fashion enthusiasts and wholesale merchants nationwide.',
  businessType: 'Wholesale & Retail Merchant',
  customerReach: 'Nationwide & International Diaspora Delivery',
  openingHours: 'Open 24/7 (Always Open for Orders & Inquiries)',
  bankDetails: {
    bankName: '',
    accountNumber: '',
    accountName: ''
  },
  stateDeliveryRates: {
    'Lagos State': { name: 'Lagos State', rate: 2500, deliveryDays: '24 - 48 Hours' },
    'Oyo State (Ibadan)': { name: 'Oyo State (Ibadan)', rate: 1500, deliveryDays: 'Same Day / 24 Hours' },
    'Ogun State': { name: 'Ogun State', rate: 3000, deliveryDays: '24 - 48 Hours' },
    'Osun State': { name: 'Osun State', rate: 3000, deliveryDays: '24 - 48 Hours' },
    'Ondo State': { name: 'Ondo State', rate: 3500, deliveryDays: '2 - 3 Days' },
    'Ekiti State': { name: 'Ekiti State', rate: 3500, deliveryDays: '2 - 3 Days' },
    'FCT Abuja': { name: 'FCT Abuja', rate: 4500, deliveryDays: '2 - 3 Days' },
    'Rivers State (Port Harcourt)': { name: 'Rivers State (Port Harcourt)', rate: 5000, deliveryDays: '2 - 4 Days' },
    'Kano / Kaduna State': { name: 'Kano / Kaduna State', rate: 5500, deliveryDays: '3 - 5 Days' },
    'Other States / Nationwide Interstate': { name: 'Other States / Nationwide Interstate', rate: 4500, deliveryDays: '2 - 4 Days via Interstate Park / Courier' }
  },
  freeDeliveryThreshold: 100000,
  enableWhatsAppDirect: true
};

export const INITIAL_STORE_SETTINGS = STORE_SETTINGS;

export const OFFICIAL_LOGO_URL = '/hero-logo.png';

export const CATEGORIES = INITIAL_CATEGORIES;

export const MAIN_SECTIONS: SectionCategoryInfo[] = [
];

export const TAILORING_YARD_GUIDES: TailoringYardGuide[] = [
  {
    outfitName: 'Full 3-Piece Grand Agbada with Buba & Sokoto',
    gender: 'Men',
    recommendedYards: 10,
    yardRange: '8 - 10 Yards',
    suggestedFabrics: ['Atiku Cotton', 'Guinea Brocade (Bazin Riche)', 'Senator Cashmere'],
    description: 'Generous 10-yard cut provides ample fullness for royal drape and high-cap sleeve folds.'
  },
  {
    outfitName: 'Classic Senator Native Suit (Top & Trouser)',
    gender: 'Men',
    recommendedYards: 4,
    yardRange: '4 Yards',
    suggestedFabrics: ['Super 150s Wool Cashmere', 'Wool Blend Suiting'],
    description: 'Standard 4 yards allows full shirt length with chest pockets and tailored trouser cuts.'
  },
  {
    outfitName: 'Long Owambe Fitted Corset Gown with Train',
    gender: 'Women',
    recommendedYards: 5,
    yardRange: '5 - 6 Yards',
    suggestedFabrics: ['Swiss Voile Lace', 'French Beaded Net Lace', 'Sequined Lace'],
    description: '5 yards is the standard Nigerian bundle size for floor-length luxury gowns.'
  },
  {
    outfitName: 'Six-Piece Mermaid Skirt and Peplum Blouse',
    gender: 'Women',
    recommendedYards: 6,
    yardRange: '6 Yards (1 Bundle)',
    suggestedFabrics: ['Dutch Wax Ankara', 'African Wax Cotton'],
    description: 'Full 6-yard bundle allows perfect pattern alignment on flared panels and peplum pleats.'
  },
  {
    outfitName: 'Simple Kaftan / Short-Sleeve Daily Native',
    gender: 'General',
    recommendedYards: 3.5,
    yardRange: '3 - 3.5 Yards',
    suggestedFabrics: ['Cotton Atiku', 'Lightweight Senator Wool'],
    description: 'Ideal economic cut for casual weekday or Friday native shirts and trousers.'
  }
];

export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    id: 'rev-01',
    customerName: 'Alhaja Kudirat Adeleke',
    location: 'Bodija, Ibadan',
    title: 'Aso-Ebi Lead Organizer',
    comment: 'We ordered 85 bundles of Swiss Voile Lace and matching shoe/bag sets for my daughter wedding. Everything arrived exactly as pictured and the quality was top tier. Our guests were thrilled!',
    rating: 5,
    date: '3 weeks ago',
    verifiedBuyer: true,
    fabricBought: 'Swiss Voile Lace & Matching Shoe/Bag Set'
  },
  {
    id: 'rev-02',
    customerName: 'Chief Babatunde Ogundimu',
    location: 'Victoria Island, Lagos',
    title: 'VIP Senator Client',
    comment: 'The Italian burnished loafers and Super 150s cashmere senator material were delivered promptly. The leather is soft, durable, and comfortable all day during chieftaincy meetings.',
    rating: 5,
    date: '1 month ago',
    verifiedBuyer: true,
    fabricBought: 'Super 150s Cashmere & Italian Loafers'
  },
  {
    id: 'rev-03',
    customerName: 'Mrs. Funmilayo Bakare',
    location: 'Garki, Abuja',
    title: 'Fashion Academy Director',
    comment: 'We purchased 6 industrial direct-drive sewing machines and Butterfly sets for our tailoring training institute. Smooth silent operation, fast delivery, and very responsive customer support on WhatsApp.',
    rating: 5,
    date: '2 months ago',
    verifiedBuyer: true,
    fabricBought: 'Industrial Direct-Drive Machines'
  }
];
