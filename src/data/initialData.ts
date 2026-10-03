import { Category, FabricProduct, StoreSettings, SectionCategoryInfo, TailoringYardGuide, CustomerTestimonial } from '../types';

export const INITIAL_CATEGORIES: Category[] = [
  {
    "id": "cat-ankara",
    "name": "Ankara Wax Prints",
    "slug": "ankara",
    "mainSection": "cloths",
    "description": "Authentic 100% Cotton Pleasant Dutch Wax and African prints in vibrant non-fading designs for Owambe, kaftans, and everyday wear.",
    "itemCount": 25
  },
  {
    "id": "cat-lace",
    "name": "Swiss Voile Lace",
    "slug": "lace",
    "mainSection": "cloths",
    "description": "Pure Swiss voile, dry lace, cord lace, and French beaded tulle for grand occasions and luxury Aso-Ebi.",
    "itemCount": 8
  },
  {
    "id": "cat-senator",
    "name": "Senator Suiting",
    "slug": "senator",
    "mainSection": "cloths",
    "description": "Super 150s wool cashmere blends and crease-resistant fabrics for executive native outfits.",
    "itemCount": 12
  },
  {
    "id": "cat-shoe-bag",
    "name": "Matching Shoe & Bag Sets",
    "slug": "shoe-and-bag",
    "mainSection": "shoes",
    "description": "Luxury 2-in-1 coordinated footwear and matching handbag or clutch sets for party celebrations.",
    "itemCount": 10
  },
  {
    "id": "cat-men-shoes",
    "name": "Men's Native Loafers",
    "slug": "men-shoes",
    "mainSection": "shoes",
    "description": "Handcrafted Italian burnished calfskin slip-ons, mule slippers, and royal loafers.",
    "itemCount": 8
  },
  {
    "id": "cat-industrial-machine",
    "name": "Industrial Sewing Machines",
    "slug": "industrial-machine",
    "mainSection": "tailoring-machine",
    "description": "Direct-drive lockstitch, walking-foot, and high-speed garment manufacturing machinery.",
    "itemCount": 6
  },
  {
    "id": "cat-domestic-machine",
    "name": "Domestic Machines & Sergers",
    "slug": "domestic-machine",
    "mainSection": "tailoring-machine",
    "description": "Multi-stitch home sewing machines, buttonholers, and overlock machines.",
    "itemCount": 5
  }
];

export const INITIAL_PRODUCTS: FabricProduct[] = [
  {
    "id": "pleasant-ankara-master-bundle",
    "productCode": "019001-MB",
    "name": "Pleasant Ankara - Full 24-Design Master Collection",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Cotton Pleasant Dutch Wax (Wholesale & Retail)",
    "description": "Complete Pleasant Ankara Dutch Wax Collection featuring 24 rich African print designs. Available for individual 6-yard bundle orders or 20-bundle wholesale bales with nationwide dispatch.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 120,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-master.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-master.jpg",
      "/pleasant-ankara/pleasant-ankara-1.jpg",
      "/pleasant-ankara/pleasant-ankara-2.jpg",
      "/pleasant-ankara/pleasant-ankara-3.jpg",
      "/pleasant-ankara/pleasant-ankara-4.jpg",
      "/pleasant-ankara/pleasant-ankara-5.jpg",
      "/pleasant-ankara/pleasant-ankara-6.jpg",
      "/pleasant-ankara/pleasant-ankara-7.jpg",
      "/pleasant-ankara/pleasant-ankara-8.jpg",
      "/pleasant-ankara/pleasant-ankara-9.jpg",
      "/pleasant-ankara/pleasant-ankara-10.jpg",
      "/pleasant-ankara/pleasant-ankara-11.jpg",
      "/pleasant-ankara/pleasant-ankara-12.jpg",
      "/pleasant-ankara/pleasant-ankara-13.jpg",
      "/pleasant-ankara/pleasant-ankara-14.jpg",
      "/pleasant-ankara/pleasant-ankara-15.jpg",
      "/pleasant-ankara/pleasant-ankara-16.jpg",
      "/pleasant-ankara/pleasant-ankara-17.jpg",
      "/pleasant-ankara/pleasant-ankara-18.jpg",
      "/pleasant-ankara/pleasant-ankara-19.jpg",
      "/pleasant-ankara/pleasant-ankara-20.jpg",
      "/pleasant-ankara/pleasant-ankara-21.jpg",
      "/pleasant-ankara/pleasant-ankara-22.jpg",
      "/pleasant-ankara/pleasant-ankara-23.jpg",
      "/pleasant-ankara/pleasant-ankara-24.jpg"
    ],
    "colors": [
      "Full Color Spectrum",
      "Gold Wax",
      "Emerald Green",
      "Royal Navy",
      "Burgundy"
    ],
    "suitableFor": [
      "Aso-Ebi Group Orders",
      "Wholesale Bales",
      "Gowns",
      "Men & Women Native Wear"
    ]
  },
  {
    "id": "pleasant-ankara-01",
    "productCode": "019001-01",
    "name": "Pleasant Ankara - Design 01",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 01). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-1.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-1.jpg",
      "/pleasant-ankara/pleasant-ankara-2.jpg",
      "/pleasant-ankara/pleasant-ankara-24.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-02",
    "productCode": "019001-02",
    "name": "Pleasant Ankara - Design 02",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 02). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-2.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-2.jpg",
      "/pleasant-ankara/pleasant-ankara-3.jpg",
      "/pleasant-ankara/pleasant-ankara-1.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-03",
    "productCode": "019001-03",
    "name": "Pleasant Ankara - Design 03",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 03). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-3.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-3.jpg",
      "/pleasant-ankara/pleasant-ankara-4.jpg",
      "/pleasant-ankara/pleasant-ankara-2.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-04",
    "productCode": "019001-04",
    "name": "Pleasant Ankara - Design 04",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 04). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-4.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-4.jpg",
      "/pleasant-ankara/pleasant-ankara-5.jpg",
      "/pleasant-ankara/pleasant-ankara-3.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-05",
    "productCode": "019001-05",
    "name": "Pleasant Ankara - Design 05",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 05). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-5.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-5.jpg",
      "/pleasant-ankara/pleasant-ankara-6.jpg",
      "/pleasant-ankara/pleasant-ankara-4.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-06",
    "productCode": "019001-06",
    "name": "Pleasant Ankara - Design 06",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 06). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-6.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-6.jpg",
      "/pleasant-ankara/pleasant-ankara-7.jpg",
      "/pleasant-ankara/pleasant-ankara-5.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-07",
    "productCode": "019001-07",
    "name": "Pleasant Ankara - Design 07",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 07). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-7.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-7.jpg",
      "/pleasant-ankara/pleasant-ankara-8.jpg",
      "/pleasant-ankara/pleasant-ankara-6.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-08",
    "productCode": "019001-08",
    "name": "Pleasant Ankara - Design 08",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 08). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-8.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-8.jpg",
      "/pleasant-ankara/pleasant-ankara-9.jpg",
      "/pleasant-ankara/pleasant-ankara-7.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-09",
    "productCode": "019001-09",
    "name": "Pleasant Ankara - Design 09",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 09). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-9.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-9.jpg",
      "/pleasant-ankara/pleasant-ankara-10.jpg",
      "/pleasant-ankara/pleasant-ankara-8.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-10",
    "productCode": "019001-10",
    "name": "Pleasant Ankara - Design 10",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 10). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": true,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-10.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-10.jpg",
      "/pleasant-ankara/pleasant-ankara-11.jpg",
      "/pleasant-ankara/pleasant-ankara-9.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-11",
    "productCode": "019001-11",
    "name": "Pleasant Ankara - Design 11",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 11). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-11.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-11.jpg",
      "/pleasant-ankara/pleasant-ankara-12.jpg",
      "/pleasant-ankara/pleasant-ankara-10.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-12",
    "productCode": "019001-12",
    "name": "Pleasant Ankara - Design 12",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 12). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-12.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-12.jpg",
      "/pleasant-ankara/pleasant-ankara-13.jpg",
      "/pleasant-ankara/pleasant-ankara-11.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-13",
    "productCode": "019001-13",
    "name": "Pleasant Ankara - Design 13",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 13). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-13.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-13.jpg",
      "/pleasant-ankara/pleasant-ankara-14.jpg",
      "/pleasant-ankara/pleasant-ankara-12.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-14",
    "productCode": "019001-14",
    "name": "Pleasant Ankara - Design 14",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 14). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-14.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-14.jpg",
      "/pleasant-ankara/pleasant-ankara-15.jpg",
      "/pleasant-ankara/pleasant-ankara-13.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-15",
    "productCode": "019001-15",
    "name": "Pleasant Ankara - Design 15",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 15). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": true,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-15.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-15.jpg",
      "/pleasant-ankara/pleasant-ankara-16.jpg",
      "/pleasant-ankara/pleasant-ankara-14.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-16",
    "productCode": "019001-16",
    "name": "Pleasant Ankara - Design 16",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 16). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-16.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-16.jpg",
      "/pleasant-ankara/pleasant-ankara-17.jpg",
      "/pleasant-ankara/pleasant-ankara-15.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-17",
    "productCode": "019001-17",
    "name": "Pleasant Ankara - Design 17",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 17). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-17.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-17.jpg",
      "/pleasant-ankara/pleasant-ankara-18.jpg",
      "/pleasant-ankara/pleasant-ankara-16.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-18",
    "productCode": "019001-18",
    "name": "Pleasant Ankara - Design 18",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 18). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-18.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-18.jpg",
      "/pleasant-ankara/pleasant-ankara-19.jpg",
      "/pleasant-ankara/pleasant-ankara-17.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-19",
    "productCode": "019001-19",
    "name": "Pleasant Ankara - Design 19",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 19). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-19.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-19.jpg",
      "/pleasant-ankara/pleasant-ankara-20.jpg",
      "/pleasant-ankara/pleasant-ankara-18.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-20",
    "productCode": "019001-20",
    "name": "Pleasant Ankara - Design 20",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 20). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-20.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-20.jpg",
      "/pleasant-ankara/pleasant-ankara-21.jpg",
      "/pleasant-ankara/pleasant-ankara-19.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-21",
    "productCode": "019001-21",
    "name": "Pleasant Ankara - Design 21",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 21). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-21.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-21.jpg",
      "/pleasant-ankara/pleasant-ankara-22.jpg",
      "/pleasant-ankara/pleasant-ankara-20.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-22",
    "productCode": "019001-22",
    "name": "Pleasant Ankara - Design 22",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 22). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-22.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-22.jpg",
      "/pleasant-ankara/pleasant-ankara-23.jpg",
      "/pleasant-ankara/pleasant-ankara-21.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-23",
    "productCode": "019001-23",
    "name": "Pleasant Ankara - Design 23",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 23). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-23.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-23.jpg",
      "/pleasant-ankara/pleasant-ankara-24.jpg",
      "/pleasant-ankara/pleasant-ankara-22.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "pleasant-ankara-24",
    "productCode": "019001-24",
    "name": "Pleasant Ankara - Design 24",
    "mainSection": "cloths",
    "category": "Ankara Wax Prints",
    "categorySlug": "ankara",
    "fabricType": "100% Premium Cotton Pleasant Dutch Wax",
    "description": "Authentic 100% Premium Cotton Pleasant Ankara Wax Print (Design 24). Vibrant, non-fading double-sided print with royal African motifs. Ideal for Owambe Aso-Ebi, gowns, 6-piece skirts, kaftans, and couple outfits.",
    "pricePerYard": 18500,
    "unitLabel": "6 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isBestseller": false,
    "isFeatured": false,
    "isNewArrival": true,
    "inStock": true,
    "image": "/pleasant-ankara/pleasant-ankara-24.jpg",
    "galleryImages": [
      "/pleasant-ankara/pleasant-ankara-24.jpg",
      "/pleasant-ankara/pleasant-ankara-1.jpg",
      "/pleasant-ankara/pleasant-ankara-23.jpg",
      "/pleasant-ankara/pleasant-ankara-master.jpg"
    ],
    "colors": [
      "Multi-Color",
      "Vibrant Wax",
      "Gold Motifs"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi",
      "6-Piece Skirt & Blouse",
      "Gowns",
      "Tailored Native Shirts"
    ]
  },
  {
    "id": "asv-lace-01",
    "productCode": "019004-1",
    "name": "Swiss Voile Lace - Royal Emerald & Gold",
    "mainSection": "cloths",
    "category": "Swiss Voile Lace",
    "categorySlug": "lace",
    "fabricType": "100% Pure Swiss Cotton Voile with Metallic Threading",
    "description": "Heavyweight authentic Swiss Voile Lace with intricate eyelet cutouts and hand-sewn crystal rhinestones. Soft on the skin, vibrant non-fading emerald green hue.",
    "unitLabel": "5 Yards (1 Bundle)",
    "minimumOrder": 1,
    "availableStock": 35,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": true,
    "image": "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Emerald Green",
      "Royal Gold",
      "Pure White"
    ],
    "suitableFor": [
      "Owambe Aso-Ebi Gowns",
      "Peplum Blouse & Skirt",
      "Bride & Groom Mother Outfits"
    ]
  },
  {
    "id": "asv-senator-01",
    "productCode": "019004-2",
    "name": "Super 150s Wool Cashmere Senator Suiting",
    "mainSection": "cloths",
    "category": "Senator Suiting",
    "categorySlug": "senator",
    "fabricType": "Italian Wool Cashmere Blend (Super 150s)",
    "description": "Crisp, crease-resistant Senator wool cashmere for sharp executive kaftans and 2-piece native suits. Smooth texture with moderate weight.",
    "unitLabel": "4 Yards (1 Cut)",
    "minimumOrder": 1,
    "availableStock": 50,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": true,
    "image": "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Midnight Black",
      "Deep Navy",
      "Charcoal Grey",
      "Wine Red"
    ],
    "suitableFor": [
      "Executive Senator Native Suits",
      "Groom & Groomsmen Native Wear",
      "Friday Office Kaftans"
    ]
  },
  {
    "id": "asv-atiku-01",
    "productCode": "019004-3",
    "name": "Presidential Swiss Bazin Riche Atiku Cotton (10 Yards)",
    "mainSection": "cloths",
    "category": "Atiku Brocade",
    "categorySlug": "atiku",
    "fabricType": "100% Egyptian Giza Cotton with High-Luster Glaze",
    "description": "Crisp, heavy-fall Atiku brocade material with embossed jacquard watermark patterning. Designed for grand royal 3-piece Agbada ensembles.",
    "unitLabel": "10 Yards (Full Agbada Cut)",
    "minimumOrder": 1,
    "availableStock": 40,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": true,
    "image": "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Pure Snow White",
      "Cream Ivory",
      "Sky Blue",
      "Charcoal Grey"
    ],
    "suitableFor": [
      "Grand Agbada Ensembles",
      "Kaftan Sets",
      "Chieftaincy Outfits"
    ]
  },
  {
    "id": "asv-shoe-01",
    "productCode": "019005-1",
    "name": "Italian Leather 2-in-1 Matching Shoe & Handbag Set",
    "mainSection": "shoes",
    "category": "Matching Shoe & Bag Set",
    "categorySlug": "shoe-and-bag",
    "fabricType": "100% Genuine Italian Calfskin Leather with Matching Clutch",
    "description": "Bespoke 2-in-1 matching footwear and leather clutch set. Hand-stitched with cushioned arch support, designed for Owambe, Agbada, and Senator outfits.",
    "unitLabel": "1 Matching Set (Shoe + Bag)",
    "minimumOrder": 1,
    "availableStock": 20,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": true,
    "isMatchingSet": true,
    "image": "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Rich Brown",
      "Onyx Black",
      "Burgundy"
    ],
    "suitableFor": [
      "Agbada & Senator Outfits",
      "Weddings & Celebrations",
      "Matching Couple Sets"
    ]
  },
  {
    "id": "asv-shoebag-01",
    "productCode": "019005-2",
    "name": "Royal Velvet 2-in-1 Matching Shoe & Clutch Bag Set",
    "mainSection": "shoes",
    "category": "Matching Shoe & Bag Set",
    "categorySlug": "shoe-and-bag",
    "fabricType": "Luxury Velvet with Embellished Rhinestone Brooch",
    "description": "Perfect 2-in-1 matching footwear and evening clutch set for Owambe parties and weddings. Features 3-inch comfortable block heel.",
    "unitLabel": "1 Matching Set (Shoe + Bag)",
    "minimumOrder": 1,
    "availableStock": 15,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": true,
    "isMatchingSet": true,
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Royal Gold",
      "Magenta Pink",
      "Emerald Green"
    ],
    "suitableFor": [
      "Owambe Wedding Guests",
      "Aso-Ebi Celebrations",
      "Galas & Parties"
    ]
  },
  {
    "id": "asv-shoe-02",
    "productCode": "019005-3",
    "name": "Handcrafted Italian Burnished Loafers for Agbada & Senator",
    "mainSection": "shoes",
    "category": "Men's Native Loafers",
    "categorySlug": "men-shoes",
    "fabricType": "Hand-Burnished Italian Leather with Cushioned Insole",
    "description": "Executive slip-on loafers crafted for traditional Nigerian Agbada and Senator outfits. Breathable leather lining with non-slip rubber grip sole.",
    "unitLabel": "1 Pair (Sizes 40 - 46)",
    "minimumOrder": 1,
    "availableStock": 30,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": false,
    "image": "https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Cognac Tan",
      "Midnight Black",
      "Deep Wine"
    ],
    "suitableFor": [
      "Executive Senator Native Wear",
      "Agbada Native Suits",
      "Church & Weddings"
    ]
  },
  {
    "id": "asv-machine-01",
    "productCode": "019006-1",
    "name": "Direct-Drive Automatic Industrial Sewing Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machine",
    "categorySlug": "industrial-machine",
    "fabricType": "Heavy-Duty Motorized Direct Drive Equipment",
    "description": "Energy-saving direct drive industrial lockstitch machine. Low noise, LED needle light, automatic thread trimmer, handles delicate laces to thick leather.",
    "unitLabel": "1 Machine Set (Complete with Stand & Table)",
    "minimumOrder": 1,
    "availableStock": 10,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": true,
    "image": "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Pure White / Industrial Metal"
    ],
    "suitableFor": [
      "Fashion Design Studios",
      "Tailoring Workshops",
      "Commercial Garment Production"
    ]
  },
  {
    "id": "asv-machine-02",
    "productCode": "019006-2",
    "name": "Heavy-Duty 4-Thread Industrial Overlock / Serger Machine",
    "mainSection": "tailoring-machine",
    "category": "Industrial Sewing Machine",
    "categorySlug": "industrial-machine",
    "fabricType": "High-Speed 4-Thread Overlocking System",
    "description": "Professional high-speed overlock machine for neat fabric edge trimming and seam reinforcement. Prevents fraying on ankara, lace, and stretch fabrics.",
    "unitLabel": "1 Complete Machine Set (Stand & Motor)",
    "minimumOrder": 1,
    "availableStock": 8,
    "isNewArrival": true,
    "inStock": true,
    "isFeatured": false,
    "image": "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Factory White & Steel"
    ],
    "suitableFor": [
      "Garment Edge Finishing",
      "Aso-Ebi Seam Overlocking",
      "Commercial Tailoring Studios"
    ]
  },
  {
    "id": "asv-machine-03",
    "productCode": "019006-3",
    "name": "Butterfly Heavy-Duty Manual & Electric Domestic Sewing Machine",
    "mainSection": "tailoring-machine",
    "category": "Domestic Machines & Sergers",
    "categorySlug": "domestic-machine",
    "fabricType": "Classic Cast-Iron Lockstitch with Treadle Stand & Electric Motor",
    "description": "Legendary Butterfly sewing machine equipped with both foot pedal treadle mechanism and attachable electric motor. Reliable for daily domestic sewing and apprentices.",
    "unitLabel": "1 Complete Machine (Head, Table & Treadle Stand)",
    "minimumOrder": 1,
    "availableStock": 15,
    "isNewArrival": false,
    "inStock": true,
    "isFeatured": false,
    "image": "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=800",
    "colors": [
      "Classic Black & Gold Filigree"
    ],
    "suitableFor": [
      "Tailoring Apprentices",
      "Home Tailoring",
      "Fashion Training Centers"
    ]
  }
];

export const MAIN_SECTIONS: SectionCategoryInfo[] = [
  {
    "id": "cloths",
    "name": "Cloths & Luxury Fabrics",
    "slug": "cloths",
    "subtitle": "Authentic African Prints, Swiss Lace & Executive Senator Fabrics",
    "description": "Wholesale & retail collection of 100% Cotton Pleasant Ankara Dutch Wax, authentic Swiss Voile Lace, Super 150s Cashmere Senator materials, and Guinea Brocades directly from Balogun Market, Lagos.",
    "image": "/pleasant-ankara/pleasant-ankara-master.jpg",
    "subcategories": [
      "Ankara Wax Prints",
      "Swiss Voile Lace",
      "Senator Cashmere Suiting",
      "Atiku Brocade",
      "Cashmere Wool"
    ],
    "features": [
      "100% Non-Fading Cotton",
      "Wholesale Bale & Retail Bundles",
      "Aso-Ebi Uniform Supply",
      "Direct Factory Guaranteed"
    ]
  },
  {
    "id": "shoes",
    "name": "Bespoke Shoes & Matching Bags",
    "slug": "shoes",
    "subtitle": "Handcrafted Footwear & 2-in-1 Coordinated Owambe Sets",
    "description": "Luxurious handcrafted footwear and synchronized 2-in-1 shoe and handbag ensembles made with Italian calfskin leather and royal velvet, engineered for Owambe weddings, Agbada, and Senator native attires.",
    "image": "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&q=80&w=800",
    "subcategories": [
      "2-in-1 Matching Shoe & Bag Sets",
      "Italian Native Loafers",
      "Velvet Owambe Sets",
      "Bespoke Half-Shoes"
    ],
    "features": [
      "100% Genuine Italian Calfskin",
      "2-in-1 Matching Bag Included",
      "Cushioned Arch Comfort",
      "Owambe Party Ready"
    ]
  },
  {
    "id": "tailoring-machine",
    "name": "Tailoring Machines & Equipment",
    "slug": "tailoring-machine",
    "subtitle": "Industrial & Domestic Garment Machinery & Accessories",
    "description": "Direct-drive motorized industrial sewing machines, heavy-duty lockstitch, domestic multi-stitch machines, and overlock equipment with complete stands and tables for fashion designers, academies, and garment factories.",
    "image": "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?auto=format&fit=crop&q=80&w=800",
    "subcategories": [
      "Industrial Direct-Drive Machines",
      "Domestic Multi-Function Machines",
      "Industrial Overlock / Serger",
      "Sewing Accessories"
    ],
    "features": [
      "Energy-Saving Silent Motor",
      "Complete Stand & Table Included",
      "Handles Light Silk to Heavy Leather",
      "1-Year Workshop Warranty"
    ]
  }
];

export const CATEGORIES = INITIAL_CATEGORIES;

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

