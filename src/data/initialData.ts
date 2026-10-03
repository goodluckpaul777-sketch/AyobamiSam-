import { Category, FabricProduct, StoreSettings, SectionCategoryInfo, TailoringYardGuide, CustomerTestimonial } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    id: 'cat-ankara',
    name: 'Ankara Wax Prints',
    slug: 'ankara',
    mainSection: 'cloths',
    description: 'Vibrant Dutch & African Wax cotton prints for Owambe, gowns, and shirts.',
    itemCount: 1
  },
  {
    id: 'cat-lace',
    name: 'Swiss Voile & French Lace',
    slug: 'lace',
    mainSection: 'cloths',
    description: 'Exquisite beaded, sequined, and corded Swiss Voile laces for celebration outfits.',
    itemCount: 1
  },
  {
    id: 'cat-senator',
    name: 'Senator Cashmere & Wool',
    slug: 'senator',
    mainSection: 'cloths',
    description: 'High-thread-count Super 150s cashmere and wool blends for men native suits.',
    itemCount: 1
  },
  {
    id: 'cat-brocade',
    name: 'Atiku & Guinea Brocade',
    slug: 'brocade',
    mainSection: 'cloths',
    description: 'Royal 100% cotton Bazin Riche and Atiku brocades for Grand Agbada.',
    itemCount: 1
  },
  {
    id: 'cat-shoe-bag',
    name: 'Matching Shoe & Bag Sets',
    slug: 'shoe-and-bag',
    mainSection: 'shoes',
    description: 'Coordinated Italian leather shoes and matching clutch bags for ceremonies.',
    itemCount: 2
  },
  {
    id: 'cat-mens-shoes',
    name: "Men's Italian Native Loafers",
    slug: 'mens-loafers',
    mainSection: 'shoes',
    description: 'Burnished genuine leather loafers designed specifically for Senator & Agbada.',
    itemCount: 2
  },
  {
    id: 'cat-industrial-machine',
    name: 'Industrial Sewing Machines',
    slug: 'industrial-machine',
    mainSection: 'tailoring-machine',
    description: 'Direct-drive silent servo motor industrial lockstitch sewing machines.',
    itemCount: 2
  },
  {
    id: 'cat-domestic-machine',
    name: 'Domestic & Overlock Machines',
    slug: 'domestic-machine',
    mainSection: 'tailoring-machine',
    description: 'Heavy-duty home sewing machines and multi-thread overlock sergers.',
    itemCount: 2
  }
];

export const MAIN_SECTIONS: SectionCategoryInfo[] = [
  {
    id: 'cloths',
    name: 'Cloths & Fabrics',
    slug: 'cloths',
    subtitle: 'Authentic Nigerian & Imported Fabrics',
    description: 'Swiss Voile Lace, Dutch Wax Ankara, Cashmere Senator Suiting, and Brocades for bespoke Nigerian native wear.',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Ankara Wax Prints', 'Swiss Voile Lace', 'Senator Cashmere', 'Atiku Brocade'],
    features: ['Swiss Voile Lace', 'Dutch Wax Ankara', 'Senator Suiting', 'Atiku Brocade']
  },
  {
    id: 'shoes',
    name: 'Italian Shoes & Matching Bags',
    slug: 'shoes',
    subtitle: 'Handcrafted Native Loafers & Sets',
    description: 'Handcrafted Italian leather loafers, native slippers, and luxury 2-in-1 matching shoe and handbag sets for events.',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Matching Shoe & Bag Sets', 'Italian Native Loafers', 'Handmade Leather Slippers'],
    features: ['Matching 2-in-1 Sets', 'Genuine Italian Leather', 'Bespoke Craftsmanship', 'Comfort Cushioned Soles']
  },
  {
    id: 'tailoring-machine',
    name: 'Tailoring & Sewing Machines',
    slug: 'tailoring-machine',
    subtitle: 'Industrial & Domestic Sewing Equipment',
    description: 'Direct-drive industrial lockstitch machines, overlocking sergers, and heavy-duty domestic sewing equipment.',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Industrial Direct-Drive', 'Overlock Sergers', 'Domestic Manual & Electric', 'Tailoring Accessories'],
    features: ['Direct-Drive Motors', 'Energy Saving', 'Heavy Duty Stitches', 'Spare Parts & Support']
  }
];

export const INITIAL_PRODUCTS: FabricProduct[] = [
  {
    id: 'asv-ankara-01',
    name: 'Authentic Dutch Wax Ankara - Royal Gold & Emerald',
    mainSection: 'cloths',
    category: 'Ankara Wax Prints',
    categorySlug: 'ankara',
    fabricType: '100% High-Grade Premium African Cotton Wax Print',
    description: 'Vibrant non-fading double-sided African Dutch wax print with rich gold and emerald motifs. Perfect for Owambe Aso-Ebi, full flared gowns, 6-piece skirts, and tailored native tops. Available in single 6-yard bundles or wholesale bales.',
    availableStock: 80,
    minimumOrder: 1,
    unitLabel: '6 Yards (1 Bundle)',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1606156133451-b844c860c2aa?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Gold & Emerald', 'Royal Navy', 'Burgundy Wine', 'Warm Ochre'],
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 28,
    suitableFor: ['Owambe Aso-Ebi', 'Full Gowns', '6-Piece Skirt & Blouse', 'Bespoke Native Shirts'],
    isWholesaleAvailable: true,
    productCode: 'ANK-01'
  },
  {
    id: 'asv-lace-01',
    name: 'Luxury Swiss Voile Net Beaded Lace',
    mainSection: 'cloths',
    category: 'Swiss Voile & French Lace',
    categorySlug: 'lace',
    fabricType: 'Heavy Beaded & Sequined Hand-Finished Swiss Voile Lace',
    description: 'Exclusive Austrian-inspired Swiss Voile Lace embellished with precision crystal beadwork and tonal embroidery. Designed for high-society weddings, bridal outfits, and royal chieftaincy celebrations.',
    availableStock: 45,
    minimumOrder: 1,
    unitLabel: '5 Yards (1 Bundle)',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Champagne Gold', 'Royal Teal', 'Lilac & Silver', 'Blush Peach'],
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 34,
    suitableFor: ['Bridal Outfits', 'Mother of the Day Gowns', 'High-Profile Owambe', 'Corset Tops'],
    isWholesaleAvailable: true,
    productCode: 'LAC-02'
  },
  {
    id: 'asv-senator-01',
    name: 'Super 150s Pure Wool Cashmere Senator Material',
    mainSection: 'cloths',
    category: 'Senator Cashmere & Wool',
    categorySlug: 'senator',
    fabricType: 'Super 150s Merino Wool Blend with Cashmere Finish',
    description: 'Silky smooth, crease-resistant cashmere wool blend tailored for Nigerian Senator suits, Kaftans, and modern Agbada accents. Excellent drape with year-round breathability for the Nigerian climate.',
    availableStock: 110,
    minimumOrder: 4,
    unitLabel: '4 Yards (Standard Senator Cut)',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ec65?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ec65?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Midnight Navy', 'Charcoal Slate', 'Forest Green', 'Desert Sand'],
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 41,
    suitableFor: ['Men Senator Native Suits', 'Kaftan Tops & Trousers', 'Corporate Native', 'Agbada Accents'],
    isWholesaleAvailable: true,
    productCode: 'SEN-03'
  },
  {
    id: 'asv-brocade-01',
    name: 'Imperial Austrian Getzner Atiku Brocade',
    mainSection: 'cloths',
    category: 'Atiku & Guinea Brocade',
    categorySlug: 'brocade',
    fabricType: '100% Mercerized Egyptian Long-Staple Cotton Bazin Riche',
    description: 'Crisp, lustrous Atiku Guinea Brocade with diamond jacquard weaves. Stands with dignified structure, making it the premier choice for 3-piece grand Agbada for traditional weddings and dignitaries.',
    availableStock: 65,
    minimumOrder: 5,
    unitLabel: '10 Yards (Grand Agbada Cut)',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Crisp White', 'Ivory Cream', 'Sky Blue', 'Light Almond'],
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 22,
    suitableFor: ['Full 3-Piece Grand Agbada', 'Royal Kaftans', 'Traditional Weddings', 'Chieftaincy Attire'],
    isWholesaleAvailable: true,
    productCode: 'ATK-04'
  },
  {
    id: 'asv-shoe-bag-01',
    name: 'Italian Leather 2-in-1 Matching Shoe & Handbag Set (Imperial Gold)',
    mainSection: 'shoes',
    category: 'Matching Shoe & Bag Sets',
    categorySlug: 'shoe-and-bag',
    fabricType: '100% Genuine Italian Calfskin Leather with Matching Clutch',
    description: 'Handcrafted luxury Italian shoe with matching evening clutch bag, adorned with Austrian crystal hardware. Designed for seamless elegance at celebrations, weddings, and formal banquets.',
    availableStock: 35,
    minimumOrder: 1,
    unitLabel: '1 Matching Set (Shoe + Bag)',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Imperial Gold', 'Rose Gold', 'Silver Metallic', 'Deep Bronze'],
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 39,
    suitableFor: ['Wedding Guests', 'Mother of the Day', 'Owambe Parties', 'Anniversaries'],
    isWholesaleAvailable: true,
    isMatchingSet: true,
    productCode: 'SET-01'
  },
  {
    id: 'asv-shoe-02',
    name: 'Handcrafted Italian Leather Native Loafers (Burnished Bronze)',
    mainSection: 'shoes',
    category: "Men's Italian Native Loafers",
    categorySlug: 'mens-loafers',
    fabricType: 'Hand-Burnished Italian Full-Grain Leather with Cushioned Insole',
    description: 'Artisanal Italian leather native slip-on loafers featuring hand-painted burnished finish, genuine leather outsole, and arch-support cushioned memory insoles. Perfect pairing for Senator native suits and Agbada.',
    availableStock: 50,
    minimumOrder: 1,
    unitLabel: '1 Pair',
    image: 'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Burnished Bronze Tan', 'Midnight Black', 'Rich Burgundy Oxblood'],
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 47,
    suitableFor: ['Senator Native Suits', 'Agbada Ensembles', 'Corporate Formal', 'Church & Events'],
    isWholesaleAvailable: true,
    productCode: 'MNS-02'
  },
  {
    id: 'asv-shoe-bag-03',
    name: 'Royal Velvet & Italian Leather 2-in-1 Evening Set (Emerald)',
    mainSection: 'shoes',
    category: 'Matching Shoe & Bag Sets',
    categorySlug: 'shoe-and-bag',
    fabricType: 'Rich Velvet & Italian Calfskin with Crystal Brooch Accent',
    description: 'Opulent emerald green velvet combined with premium Italian leather base and matching clutch. Cushioned block heel provides comfortable wear for long celebratory receptions.',
    availableStock: 28,
    minimumOrder: 1,
    unitLabel: '1 Matching Set (Shoe + Bag)',
    image: 'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Emerald Green', 'Royal Sapphire Blue', 'Wine Red'],
    isNewArrival: true,
    isFeatured: false,
    inStock: true,
    rating: 5,
    reviewCount: 19,
    suitableFor: ['Reception Gowns', 'High Society Owambe', 'Church Thanksgiving'],
    isWholesaleAvailable: true,
    isMatchingSet: true,
    productCode: 'SET-03'
  },
  {
    id: 'asv-shoe-04',
    name: 'Bespoke Cross-Strap Native Leather Slippers',
    mainSection: 'shoes',
    category: "Men's Italian Native Loafers",
    categorySlug: 'mens-loafers',
    fabricType: 'Premium Hand-Tooled Nigerian & Italian Calf Leather',
    description: 'Custom handcrafted wide-strap leather slippers built for ease and prestige. Reinforced anti-slip sole and soft inner lining tailored for daily native wear, Friday Jumuah, and casual meetings.',
    availableStock: 40,
    minimumOrder: 1,
    unitLabel: '1 Pair',
    image: 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Chocolate Brown', 'Jet Black', 'Caramel Tan'],
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 26,
    suitableFor: ['Casual Senator Native', 'Friday Jumuah / Weekend Outings', 'Lounge Wear'],
    isWholesaleAvailable: true,
    productCode: 'SLP-04'
  },
  {
    id: 'asv-machine-01',
    name: 'Direct-Drive Industrial Lockstitch Sewing Machine (Energy Saving)',
    mainSection: 'tailoring-machine',
    category: 'Industrial Sewing Machines',
    categorySlug: 'industrial-machine',
    fabricType: 'Heavy-Duty Direct-Drive Servo Motor Industrial Sewing Machine',
    description: 'High-speed, whisper-silent industrial lockstitch machine with built-in energy-saving direct-drive servo motor, automatic needle positioning, and integrated LED workspace lighting. Glides effortlessly through thick Agbada, leather, denim, and delicate lace.',
    availableStock: 25,
    minimumOrder: 1,
    unitLabel: '1 Complete Machine (Head + Table + Motor)',
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Industrial White / Teal Accent'],
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 52,
    suitableFor: ['Commercial Tailoring Workshops', 'Fashion Academies', 'Heavy Native Fabrics', 'Agbada & Senator Production'],
    isWholesaleAvailable: true,
    productCode: 'MCH-01'
  },
  {
    id: 'asv-machine-02',
    name: '4-Thread High-Speed Industrial Overlock Serger',
    mainSection: 'tailoring-machine',
    category: 'Industrial Sewing Machines',
    categorySlug: 'industrial-machine',
    fabricType: 'High-Speed Direct-Drive 4-Thread Overedging Sewing Machine',
    description: 'Professional 4-thread overlock serger delivering clean, fray-proof edge finishing for native wear and export-grade garments. Includes complete heavy-duty stand, table, and silent motor.',
    availableStock: 18,
    minimumOrder: 1,
    unitLabel: '1 Complete Machine (Head + Stand + Table)',
    image: 'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1520006403909-838d6b92c22e?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Standard Industrial White'],
    isNewArrival: false,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 31,
    suitableFor: ['Clean Seam Weaving', 'Lace Finishing', 'Jersey & Knitwear', 'Professional Tailoring Houses'],
    isWholesaleAvailable: true,
    productCode: 'MCH-02'
  },
  {
    id: 'asv-machine-03',
    name: 'Heavy-Duty All-Metal Domestic Zig-Zag & Straight Stitch Machine',
    mainSection: 'tailoring-machine',
    category: 'Domestic & Overlock Machines',
    categorySlug: 'domestic-machine',
    fabricType: 'Vintage Butterfly-Style Solid Cast Iron Sewing Machine with Electric Pedal & Manual Handle',
    description: 'Trusted, time-tested solid cast iron sewing machine. Operates with either electric foot pedal or manual hand-wheel crank during power outages. Ideal for fashion design students and tailoring homes.',
    availableStock: 30,
    minimumOrder: 1,
    unitLabel: '1 Unit',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Classic Black with Gold Filigree'],
    isNewArrival: false,
    isFeatured: false,
    inStock: true,
    rating: 5,
    reviewCount: 44,
    suitableFor: ['Home Tailoring', 'Fashion Design Students', 'Mending & Alterations', 'Off-Grid Areas (Hand Crank Option)'],
    isWholesaleAvailable: true,
    productCode: 'MCH-03'
  },
  {
    id: 'asv-machine-04',
    name: 'Industrial Heavy-Duty Fabric Steam Iron Station (3L Boiler)',
    mainSection: 'tailoring-machine',
    category: 'Domestic & Overlock Machines',
    categorySlug: 'domestic-machine',
    fabricType: 'Pressurized Industrial Gravity-Feed Continuous Steam Press',
    description: 'High-pressure continuous steam iron system for professional pressing of heavy wool Senator suits, starched Agbada, and delicate silk laces without scorching or shine marks.',
    availableStock: 40,
    minimumOrder: 1,
    unitLabel: '1 Ironing System',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80'
    ],
    colors: ['Silver & Industrial Blue'],
    isNewArrival: true,
    isFeatured: true,
    inStock: true,
    rating: 5,
    reviewCount: 29,
    suitableFor: ['Professional Pressing of Cashmere Senator Suits', 'Agbada Creasing', 'Lace Flattening', 'Laundries'],
    isWholesaleAvailable: true,
    productCode: 'ACC-04'
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
