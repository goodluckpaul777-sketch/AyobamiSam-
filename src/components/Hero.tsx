import React from 'react';
import { StoreSettings } from '../types';
import { MessageCircle, Phone, MapPin, Sparkles, ShieldCheck, ArrowDown, Shirt, Footprints, Scissors, CheckCircle2 } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from '../data/initialData';

interface HeroProps {
  settings: StoreSettings;
  onExploreDepartments: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  settings,
  onExploreDepartments,
  onContactClick,
}) => {
  const logoSrc = settings.logoUrl || OFFICIAL_LOGO_URL;

  const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
    `Hello, ${settings.storeName}. I am interested in placing an order for fabrics, shoes & bags, or tailoring machines.`
  )}`;

  return (
    <div className="relative bg-[#0F2E22] text-white pt-8 sm:pt-16 pb-12 sm:pb-24 overflow-hidden border-b-4 border-[#D4AF37]" id="hero-section">
      
      {/* Background Subtle Geometric Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px] z-1"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Open, Royal Logo Presentation */}
        <div className="flex flex-col items-center justify-center text-center pb-6 sm:pb-10">
          
          <div className="relative group flex flex-col items-center mb-4 sm:mb-6">
            {/* Ambient Gold Halo Glow */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#D4AF37]/30 via-[#52B788]/20 to-[#D4AF37]/30 rounded-full blur-xl sm:blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none"></div>
            
            {/* Official Royal Logo */}
            <img
              src={logoSrc}
              alt="Ayobami SAM Ventures Official Logo"
              className="relative w-28 h-28 sm:w-40 sm:h-40 lg:w-48 lg:h-48 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-300"
            />

            <div className="mt-2 space-y-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37]/60 text-[#D4AF37] text-xs font-black uppercase tracking-wider backdrop-blur-md shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                <span>Ayobami SAM Ventures • Balogun Market, Lagos</span>
              </span>
            </div>
          </div>

          {/* Bold Centered Headline & Description */}
          <div className="max-w-4xl space-y-3 sm:space-y-4">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
              PREMIER NIGERIAN HUB FOR <span className="text-[#D4AF37]">CLOTHS</span>, <span className="text-[#E0A96D]">SHOES</span> & <span className="text-[#95D5B2]">TAILORING MACHINES</span>
            </h1>

            <p className="text-xs sm:text-base text-[#E0D6C8] font-medium leading-relaxed max-w-2xl mx-auto">
              Welcome to <strong>{settings.storeName}</strong> located at <strong>37/39 Balogun West, Molake House, Lagos Island</strong>. We supply guaranteed authentic native wear & fabrics, handcrafted Italian leather footwear & matching clutch bags, and heavy-duty industrial sewing machines to customers nationwide and worldwide.
            </p>
          </div>

          {/* 3 Core Departments Interactive Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 max-w-3xl w-full mt-8 text-left">
            
            <div 
              onClick={onExploreDepartments}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center shrink-0">
                  <Shirt className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white group-hover:text-[#D4AF37] transition-colors">1. Cloths & Fabrics</h3>
                  <p className="text-[11px] text-[#C4B7A5]">Pleasant Ankara & Swiss Lace</p>
                </div>
              </div>
            </div>

            <div 
              onClick={onExploreDepartments}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E0A96D]/20 border border-[#E0A96D]/50 flex items-center justify-center shrink-0">
                  <Footprints className="w-5 h-5 text-[#E0A96D]" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white group-hover:text-[#E0A96D] transition-colors">2. Shoes & Bags</h3>
                  <p className="text-[11px] text-[#C4B7A5]">Italian Loafers & 2-in-1 Sets</p>
                </div>
              </div>
            </div>

            <div 
              onClick={onExploreDepartments}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#D4AF37] hover:bg-white/10 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#95D5B2]/20 border border-[#95D5B2]/50 flex items-center justify-center shrink-0">
                  <Scissors className="w-5 h-5 text-[#95D5B2]" />
                </div>
                <div>
                  <h3 className="font-black text-sm text-white group-hover:text-[#95D5B2] transition-colors">3. Tailoring Machines</h3>
                  <p className="text-[11px] text-[#C4B7A5]">Direct-Drive Industrial & Domestic</p>
                </div>
              </div>
            </div>

          </div>

          {/* Action Callouts */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mt-8 w-full max-w-xl">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 min-w-[240px] py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-xl transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Inquire & Order on WhatsApp</span>
            </a>

            <a
              href="tel:08033810865"
              className="py-4 px-6 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-black text-sm border-2 border-white/30 flex items-center justify-center gap-2 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>Call: 08033810865</span>
            </a>

            <button
              onClick={onContactClick}
              className="py-4 px-6 rounded-2xl bg-[#D4AF37] hover:bg-[#c29c2b] text-[#0F2E22] font-black text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
            >
              <MapPin className="w-4 h-4 text-[#0F2E22]" />
              <span>Visit Lagos Storefront</span>
            </button>
          </div>

          {/* Trust Guarantees Bar */}
          <div className="pt-8 sm:pt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-bold text-[#E0D6C8]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Balogun Wholesale Prices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>Nationwide Interstate Waybill Dispatch</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Authentic Quality Guaranteed</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
