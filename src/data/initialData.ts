import { StoreSettings, CustomerTestimonial, NigerianStateDelivery } from '../types';

export const OFFICIAL_LOGO_URL = '/hero-logo.png';

export const NIGERIA_STATES_DELIVERY: NigerianStateDelivery[] = [
  { name: "Lagos State (Island & Mainland)", rate: 2500, deliveryDays: "Same-day or 24 Hours" },
  { name: "Ogun & Oyo States (Ibadan, Abeokuta)", rate: 3500, deliveryDays: "24 - 48 Hours" },
  { name: "Abuja FCT", rate: 5000, deliveryDays: "1 - 2 Business Days" },
  { name: "Port Harcourt & Rivers State", rate: 5000, deliveryDays: "2 - 3 Business Days" },
  { name: "Enugu, Anambra & South East", rate: 4500, deliveryDays: "2 - 3 Business Days" },
  { name: "Kano, Kaduna & Northern Nigeria", rate: 6000, deliveryDays: "2 - 4 Business Days" },
  { name: "Edo & Delta States", rate: 4500, deliveryDays: "2 - 3 Business Days" },
  { name: "All Other Nigerian States", rate: 5000, deliveryDays: "2 - 4 Business Days" },
  { name: "International Shipping (UK, US, Canada, EU)", rate: 35000, deliveryDays: "4 - 7 Business Days via DHL / Air Cargo" },
];

export const INITIAL_STORE_SETTINGS: StoreSettings = {
  storeName: "Ayobami SAM Ventures",
  tagline: "Premier Nigerian Hub for Quality Cloths, Shoes & Tailoring Machines",
  phone: "08033810865",
  whatsapp: "2348033810865",
  secondaryPhone: "09150996348",
  phoneNumbers: ["08033810865", "09150996348"],
  email: "ayobamisamuelventures@gmail.com",
  address: "37/39 Balogun West, Molake House, Lagos Island, Nigeria",
  marketLocation: "37/39 Balogun West, Molake House, Lagos Island",
  city: "Lagos Island",
  state: "Lagos",
  country: "Nigeria",
  openingHours: "Mon - Sat: 8:00 AM - 6:00 PM (Sunday: Closed)",
  logoUrl: OFFICIAL_LOGO_URL,
  facebook: "https://www.facebook.com/share/1BeLmWzV8P/",
  tiktok: "https://www.tiktok.com/@ayobami.samuel31",
  announcement: "📍 Visit us at 37/39 Balogun West, Molake House, Lagos Island • Wholesale & Retail Available • Nationwide & International Delivery",
  bankDetails: {
    bankName: "First Bank of Nigeria / Moniepoint",
    accountNumber: "Available on Invoice",
    accountName: "Ayobami SAM Ventures",
  },
  stateDeliveryRates: NIGERIA_STATES_DELIVERY.reduce((acc, curr) => {
    acc[curr.name] = curr;
    return acc;
  }, {} as Record<string, NigerianStateDelivery>),
  enableWhatsAppDirect: true,
};

export interface DepartmentInfo {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  badge: string;
  highlights: string[];
  popularUses: string;
}

export const MAIN_DEPARTMENTS: DepartmentInfo[] = [
  {
    id: "cloths-fabrics",
    name: "Cloths & Authentic Fabrics",
    subtitle: "Premium African Prints, Swiss Lace & Senator Suiting",
    badge: "Wholesale & Retail Bales",
    description: "Authentic 100% cotton Pleasant Dutch Wax prints, luxury Swiss voile lace, dry cord lace, and Super 150s executive Senator cashmere suiting. Sourced directly for Owambe ceremonies, uniform Aso-Ebi, fashion designers, and everyday elegance.",
    highlights: [
      "100% Pure Cotton Pleasant Dutch Wax (6-yard bundles & wholesale bales)",
      "Exclusive Swiss Voile, Dry Lace, Cord Lace & French Beaded Tulle",
      "Executive Senator Suiting, Cashmere Wool Blends & Crease-Resistant Fabrics",
      "Custom Aso-Ebi color coordination for weddings, coronations & celebrations",
      "Bulk merchant pricing for retailers and boutique owners nationwide"
    ],
    popularUses: "Aso-Ebi wedding uniforms, executive native agbada, kaftans, dresses, and fashion retail boutiques."
  },
  {
    id: "shoes-bags",
    name: "Shoes & Matching Handbags",
    subtitle: "Italian Leather Loafers, Mules & Royal 2-in-1 Party Sets",
    badge: "Handcrafted Luxury",
    description: "Artisan handcrafted footwear made from burnished Italian calfskin, luxury velvet loafers, royal slip-on mules, and coordinated 2-in-1 matching shoe and clutch bag sets crafted for distinguished Nigerian celebrations and corporate elegance.",
    highlights: [
      "Matching 2-in-1 Luxury Shoe and Handbag / Clutch Sets for Owambe occasions",
      "Handcrafted Italian Burnished Calfskin Loafers, Mules & Slip-on Slippers",
      "Royal embroidered velvet slippers for traditional weddings and chiefs",
      "Comfort-cushioned orthopedic insoles built for long-duration party wear",
      "All standard Nigerian and European sizes (EU 38 to 47)"
    ],
    popularUses: "Owambe ceremonies, weddings, executive boardroom native wear, and social milestones."
  },
  {
    id: "tailoring-machines",
    name: "Industrial & Domestic Tailoring Machines",
    subtitle: "Heavy-Duty Lockstitch, Overlock Sergers & Spare Parts",
    badge: "Direct Factory Imports",
    description: "Heavy-duty direct-drive lockstitch sewing machines, multi-thread industrial overlockers, computerized pattern stitchers, and reliable domestic sewing machines. Tested, tuned, and supplied with full accessories, motors, and replacement parts.",
    highlights: [
      "Direct-drive high-speed industrial lockstitch sewing machines",
      "Multi-thread overlock sergers, hemming, and buttonholing machinery",
      "Heavy-duty leather, denim, and multi-layer fabric walking-foot machines",
      "Multi-stitch domestic machines for fashion academies and home ateliers",
      "Complete machine tables, quiet energy-saving servo motors & authentic spare parts"
    ],
    popularUses: "Garment manufacturing factories, tailoring academies, bespoke designers, and industrial workshops."
  }
];

export const CUSTOMER_TESTIMONIALS: CustomerTestimonial[] = [
  {
    id: "rev-1",
    customerName: "Alhaja Shakirat O.",
    location: "Lagos Island (Balogun Market Regular)",
    title: "100% Genuine Fabrics Every Single Time",
    comment: "I have been buying fabric from Ayobami SAM Ventures at Balogun West for over 4 years. Their Pleasant Ankara never bleeds and their Swiss voile lace is top tier. You can trust them with your money without hesitation.",
    rating: 5,
    date: "September 2026",
    verifiedBuyer: true,
    fabricBought: "Pleasant Ankara & Swiss Voile"
  },
  {
    id: "rev-2",
    customerName: "Chief Emeka N.",
    location: "Enugu & Abuja",
    title: "Fast Waybill Dispatch to the East",
    comment: "Ordered 5 bales of Senator material and 2 industrial machines for my tailoring factory in Enugu. Everything was carefully packaged and sent via interstate transport park within 24 hours. Very reliable business.",
    rating: 5,
    date: "August 2026",
    verifiedBuyer: true,
    fabricBought: "Senator Wool Bales & Industrial Machines"
  },
  {
    id: "rev-3",
    customerName: "Mrs. Folashade Adeyemi",
    location: "Ibadan, Oyo State",
    title: "Stunning Matching Shoe and Bag Sets",
    comment: "I bought 12 sets of coordinated shoes and clutch bags for our daughter's wedding Aso-Ebi. Every guest was praising the quality. The leather finish is exceptional!",
    rating: 5,
    date: "August 2026",
    verifiedBuyer: true,
    fabricBought: "2-in-1 Royal Shoe & Bag Sets"
  },
  {
    id: "rev-4",
    customerName: "Engr. Tunde Bakare",
    location: "Lekki Phase 1, Lagos",
    title: "Solid Direct-Drive Sewing Machines",
    comment: "Equipped my wife's fashion design studio with 6 industrial sewing machines from Ayobami SAM Ventures. Smooth motors, quiet operation, and prompt technical support.",
    rating: 5,
    date: "July 2026",
    verifiedBuyer: true,
    fabricBought: "Direct-Drive Industrial Lockstitch"
  },
  {
    id: "rev-5",
    customerName: "Madam Beatrice Kalu",
    location: "Port Harcourt, Rivers State",
    title: "Honest Merchant & Excellent Customer Care",
    comment: "I placed my order entirely through WhatsApp from Port Harcourt. They sent videos, packed my goods securely, and the waybill arrived safely. A truly dependable merchant.",
    rating: 5,
    date: "July 2026",
    verifiedBuyer: true,
    fabricBought: "Pleasant Dutch Wax & Dry Lace"
  },
  {
    id: "rev-6",
    customerName: "Dr. Funmi Williams",
    location: "London, United Kingdom (Diaspora Order)",
    title: "Seamless International Delivery",
    comment: "Ordered native fabric and accessories for our family reunion in the UK. They handled packaging and DHL air dispatch smoothly. Outstanding professionalism.",
    rating: 5,
    date: "June 2026",
    verifiedBuyer: true,
    fabricBought: "Aso-Ebi Uniform Package"
  }
];
