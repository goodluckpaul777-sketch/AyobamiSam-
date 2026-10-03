import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, MapPin, Sparkles, Shirt, Footprints, Scissors } from 'lucide-react';
import { StoreSettings } from '../types';
import { OFFICIAL_LOGO_URL } from '../data/initialData';

interface HeaderProps {
  settings: StoreSettings;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ settings, onNavigateSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logoSrc = settings.logoUrl || OFFICIAL_LOGO_URL;

  const handleNav = (sectionId: string) => {
    onNavigateSection(sectionId);
    setMobileMenuOpen(false);
  };

  const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
    `Hello, ${settings.storeName}. I would like to make an inquiry and place an order.`
  )}`;

  return (
    <header className="sticky top-0 z-40 bg-white border-b-2 border-[#E8E2D9] shadow-md">
      {/* Top Banner */}
      <div className="bg-[#0F2E22] text-[#D4AF37] px-4 py-1.5 text-center text-[10px] sm:text-xs font-black tracking-wide border-b border-[#D4AF37]/30 flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 shrink-0 animate-pulse" />
        <span className="truncate">
          📍 Balogun West, Molake House, Lagos Island • Wholesale Bales & Retail Orders • Fast Nationwide Waybill
        </span>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-2.5 sm:py-3.5 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <div 
            onClick={() => handleNav('hero-section')}
            className="cursor-pointer flex items-center gap-2.5 sm:gap-3.5 group"
          >
            <div className="relative shrink-0">
              <img
                src={logoSrc}
                alt="Ayobami SAM Ventures Logo"
                className="w-10 h-10 sm:w-14 sm:h-14 object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div>
              <h1 className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-[#0F2E22] group-hover:text-[#2D6A4F] transition-colors leading-tight">
                {settings.storeName}
              </h1>
              <p className="text-[9px] sm:text-[11px] font-black text-[#D4AF37] uppercase tracking-wider mt-0.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse"></span>
                <span>37/39 Balogun West, Molake House, Lagos</span>
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-black text-[#0F2E22] uppercase tracking-wider">
            <button 
              onClick={() => handleNav('departments-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
            >
              Our Departments
            </button>
            <button 
              onClick={() => handleNav('why-us-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => handleNav('how-to-order-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
            >
              How to Order
            </button>
            <button 
              onClick={() => handleNav('delivery-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
            >
              Delivery & Waybills
            </button>
            <button 
              onClick={() => handleNav('about-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
            >
              About ASV
            </button>
            <button 
              onClick={() => handleNav('contact-section')}
              className="hover:text-[#D4AF37] transition-colors cursor-pointer py-1"
            >
              Contact & Location
            </button>
          </nav>

          {/* Quick WhatsApp CTA Button */}
          <div className="flex items-center gap-2.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 sm:px-5 sm:py-2.5 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-xs sm:text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <MessageCircle className="w-4 h-4 fill-current shrink-0" />
              <span>WhatsApp Order</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 space-y-2 animate-fadeIn">
            <button
              onClick={() => handleNav('departments-section')}
              className="w-full text-left px-4 py-2.5 text-xs font-black text-[#0F2E22] hover:bg-emerald-50 rounded-xl"
            >
              1. Our 3 Core Departments
            </button>
            <button
              onClick={() => handleNav('why-us-section')}
              className="w-full text-left px-4 py-2.5 text-xs font-black text-[#0F2E22] hover:bg-emerald-50 rounded-xl"
            >
              2. Why Choose Us
            </button>
            <button
              onClick={() => handleNav('how-to-order-section')}
              className="w-full text-left px-4 py-2.5 text-xs font-black text-[#0F2E22] hover:bg-emerald-50 rounded-xl"
            >
              3. How to Place an Order
            </button>
            <button
              onClick={() => handleNav('delivery-section')}
              className="w-full text-left px-4 py-2.5 text-xs font-black text-[#0F2E22] hover:bg-emerald-50 rounded-xl"
            >
              4. Interstate & International Delivery
            </button>
            <button
              onClick={() => handleNav('about-section')}
              className="w-full text-left px-4 py-2.5 text-xs font-black text-[#0F2E22] hover:bg-emerald-50 rounded-xl"
            >
              5. About Ayobami SAM Ventures
            </button>
            <button
              onClick={() => handleNav('contact-section')}
              className="w-full text-left px-4 py-2.5 text-xs font-black text-[#0F2E22] hover:bg-emerald-50 rounded-xl"
            >
              6. Physical Storefront & Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
