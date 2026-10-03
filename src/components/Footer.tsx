import React from 'react';
import { StoreSettings } from '../types';
import { Phone, MessageCircle, MapPin, Clock, ArrowUp, ExternalLink, Shirt, Footprints, Scissors } from 'lucide-react';
import { FacebookIcon, TikTokIcon } from './SocialIcons';
import { OFFICIAL_LOGO_URL } from '../data/initialData';

interface FooterProps {
  settings: StoreSettings;
  onNavigateSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ settings, onNavigateSection }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const facebookUrl = settings.facebook || 'https://www.facebook.com/share/1BeLmWzV8P/';
  const tiktokUrl = settings.tiktok || 'https://www.tiktok.com/@ayobami.samuel31';
  const logoSrc = settings.logoUrl || OFFICIAL_LOGO_URL;

  return (
    <footer className="bg-[#0F2E22] text-[#E0D6C8] pt-16 pb-12 border-t-4 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#245842]">
          
          {/* Brand & Official Logo Column */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              {logoSrc && (
                <img
                  src={logoSrc}
                  alt="Ayobami SAM Ventures"
                  className="w-20 h-20 sm:w-24 sm:h-24 object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                />
              )}
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {settings.storeName}
                </h3>
                <p className="text-xs sm:text-sm font-black text-[#D4AF37] uppercase tracking-wider mt-1 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37]"></span>
                  <span>Cloths • Shoes • Tailoring Machines</span>
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#C4B7A5] font-medium leading-relaxed max-w-md">
              Your premier retail and wholesale store based at 37/39 Balogun West, Molake House, Lagos. Delivering guaranteed quality fabrics, handcrafted shoes, and industrial tailoring machines across Nigeria and internationally.
            </p>

            {/* Direct Contact Links */}
            <div className="pt-2 flex flex-col gap-2.5 text-xs font-bold text-white">
              <a
                href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
                  `Hello, ${settings.storeName}. I want to place an order.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#52B788] hover:text-white"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {settings.phone}</span>
              </a>
              <div className="inline-flex flex-wrap items-center gap-2 text-[#D4AF37]">
                <Phone className="w-4 h-4" />
                <a href="tel:08033810865" className="hover:text-white">08033810865</a>
                <span>/</span>
                <a href="tel:09150996348" className="hover:text-white">09150996348</a>
              </div>
            </div>

            {/* Social Media Channels */}
            <div className="pt-3">
              <span className="text-[11px] font-black uppercase tracking-widest text-[#D4AF37] block mb-2.5">
                Official Social Media Handles:
              </span>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#1877F2]/20 hover:bg-[#1877F2] text-white border border-[#1877F2]/40 transition-all font-bold text-xs"
                >
                  <FacebookIcon className="w-4 h-4 text-[#1877F2] hover:text-white" />
                  <span>Facebook Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>

                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-black text-[#25F4EE] border border-[#25F4EE]/40 hover:bg-black/80 transition-all font-bold text-xs"
                >
                  <TikTokIcon className="w-4 h-4" />
                  <span>TikTok Videos</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Nav Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-b border-[#245842] pb-2">
              Store Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              <li>
                <button
                  onClick={() => onNavigateSection('departments-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Our 3 Core Departments
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('why-us-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Why Shop With Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('how-to-order-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  How to Place Orders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('delivery-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Interstate Delivery & Waybills
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('reviews-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Customer Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('about-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  About Ayobami SAM Ventures
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigateSection('contact-section')}
                  className="hover:text-[#D4AF37] transition-colors"
                >
                  Storefront Address & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Location & Visiting Hours */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-black text-white uppercase tracking-wider border-b border-[#245842] pb-2">
              Physical Store Location
            </h4>
            <div className="space-y-2.5 text-xs text-[#C4B7A5]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>{settings.openingHours}</span>
              </div>
            </div>

            <div className="pt-3">
              <a
                href={`https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
                  `Hello, ${settings.storeName}. I would like to visit your Balogun store.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-xs flex items-center justify-center gap-2 shadow"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Customer Desk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A89A88]">
          <p className="font-medium text-center sm:text-left">
            © {new Date().getFullYear()} {settings.storeName}. All Rights Reserved. Balogun Market, Lagos Island, Nigeria.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-white hover:text-[#D4AF37] font-black bg-[#143D2E] px-4 py-2 rounded-xl transition-colors border border-[#245842] cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
