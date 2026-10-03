import React from 'react';
import { StoreSettings } from '../types';
import { ShieldCheck, Ruler, Users, HeartHandshake, MapPin, Shirt, Footprints, Scissors, Clock, Phone, MessageCircle } from 'lucide-react';
import { OFFICIAL_LOGO_URL } from '../data/initialData';

interface AboutUsSectionProps {
  settings: StoreSettings;
  onContactClick: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ settings, onContactClick }) => {
  const logoSrc = settings.logoUrl || OFFICIAL_LOGO_URL;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]" id="about-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column with ASV Brand Visual & Royal Emblem Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative py-8 px-6 sm:px-8 flex flex-col items-center text-center bg-[#0F2E22] text-white rounded-3xl border-4 border-[#D4AF37] shadow-2xl overflow-hidden">
              {/* Subtle Gold Ambient Glow */}
              <div className="absolute inset-0 bg-radial from-[#D4AF37]/20 via-transparent to-transparent blur-2xl pointer-events-none"></div>

              {/* Official Storefront Emblem */}
              <div className="relative z-10 flex flex-col items-center">
                <img
                  src={logoSrc}
                  alt="Ayobami SAM Ventures Official Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain drop-shadow-xl mb-4 hover:scale-105 transition-transform"
                />

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-[#D4AF37] text-[#D4AF37] text-[10px] font-black uppercase tracking-wider mb-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Physical Storefront</span>
                </span>

                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {settings.storeName}
                </h3>
                <p className="text-xs text-[#D4AF37] font-bold mt-1">
                  37/39 Balogun West, Molake House, Lagos Island
                </p>

                <div className="w-full mt-6 pt-4 border-t border-[#D4AF37]/30 text-left space-y-2 text-xs text-[#E0D6C8]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>{settings.openingHours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                    <span>Calls: 08033810865 / 09150996348</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onContactClick}
                  className="mt-6 w-full py-3 rounded-xl bg-[#D4AF37] hover:bg-[#c29c2b] text-[#0F2E22] font-black text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                >
                  View Map & Directions
                </button>
              </div>
            </div>

            {/* 3 Core Departments Summary Badges */}
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div className="p-3 bg-white rounded-2xl border border-[#E8E2D9] shadow-xs">
                <Shirt className="w-5 h-5 mx-auto text-[#0F2E22] mb-1" />
                <span className="font-black text-[#0F2E22] block text-[11px]">Fabrics</span>
                <span className="text-[10px] text-gray-500">Pleasant Ankara</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#E8E2D9] shadow-xs">
                <Footprints className="w-5 h-5 mx-auto text-[#0F2E22] mb-1" />
                <span className="font-black text-[#0F2E22] block text-[11px]">Footwear</span>
                <span className="text-[10px] text-gray-500">Italian Loafers</span>
              </div>
              <div className="p-3 bg-white rounded-2xl border border-[#E8E2D9] shadow-xs">
                <Scissors className="w-5 h-5 mx-auto text-[#0F2E22] mb-1" />
                <span className="font-black text-[#0F2E22] block text-[11px]">Machines</span>
                <span className="text-[10px] text-gray-500">Industrial Lockstitch</span>
              </div>
            </div>

          </div>

          {/* Right Column: Mission, Story & Guarantees */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-white px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block mb-3">
                ABOUT OUR BUSINESS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0F2E22] tracking-tight">
                Authentic Balogun Merchant With Nationwide Reputation
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium">
              <p>
                <strong>{settings.storeName}</strong> is one of Lagos Island's most trusted commercial merchants operating at <strong>37/39 Balogun West, Molake House</strong>. For years, we have served as the direct source of luxury native wear, Italian leather footwear, and heavy-duty sewing equipment for families, dignitaries, fashion design houses, and wholesale retailers across Nigeria.
              </p>
              <p>
                Unlike dropshippers or third-party resellers, we maintain active commercial stock in Balogun Market. Every customer enjoys direct merchant pricing, transparent product descriptions, and swift dispatch through recognized interstate parks, courier logistics, or direct storefront collection.
              </p>
            </div>

            {/* 4 Pillars of Excellence */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />
                  <h4 className="text-xs font-black text-[#0F2E22] uppercase tracking-wide">100% Genuine Quality</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Non-fading cotton wax prints, authentic Italian leather hides, and tested industrial machinery.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-[#2D6A4F]" />
                  <h4 className="text-xs font-black text-[#0F2E22] uppercase tracking-wide">Wholesale Bales & Retail</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  We supply both single retail bundles for celebrations and 20-bundle bales for boutique owners.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#2D6A4F]" />
                  <h4 className="text-xs font-black text-[#0F2E22] uppercase tracking-wide">Direct Balogun Pricing</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Enjoy direct Lagos market rates without unnecessary middleman markups.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E8E2D9] shadow-xs space-y-1.5">
                <div className="flex items-center gap-2">
                  <Ruler className="w-4 h-4 text-[#2D6A4F]" />
                  <h4 className="text-xs font-black text-[#0F2E22] uppercase tracking-wide">Custom Sourcing</h4>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed">
                  Looking for a specific Aso-Ebi design, Italian shoe size, or sewing machine brand? We source it for you.
                </p>
              </div>

            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-2">
              <a
                href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
                  `Hello, ${settings.storeName}. I would like to make an inquiry.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0F2E22] hover:bg-[#1B4332] text-white font-black text-xs uppercase tracking-wider shadow-md transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#D4AF37] fill-current" />
                <span>Chat Directly with Balogun Sales Team</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
