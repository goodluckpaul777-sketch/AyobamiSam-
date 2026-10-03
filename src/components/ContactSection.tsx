import React from 'react';
import { StoreSettings } from '../types';
import { MapPin, Phone, MessageCircle, Clock, ExternalLink, Mail, ShieldCheck, Sparkles } from 'lucide-react';
import { FacebookIcon, TikTokIcon } from './SocialIcons';
import { OFFICIAL_LOGO_URL } from '../data/initialData';

interface ContactSectionProps {
  settings: StoreSettings;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ settings }) => {
  const facebookUrl = settings.facebook || 'https://www.facebook.com/share/1BeLmWzV8P/';
  const tiktokUrl = settings.tiktok || 'https://www.tiktok.com/@ayobami.samuel31';
  const logoSrc = settings.logoUrl || OFFICIAL_LOGO_URL;

  const whatsappUrl = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(
    `Hello, ${settings.storeName}. I am contacting you from your website to make an inquiry.`
  )}`;

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]" id="contact-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block">
            CONTACT & PHYSICAL LOCATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F2E22] tracking-tight">
            Visit Our Store or Place Your Order Directly
          </h2>
          <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed">
            We are open 6 days a week at Balogun Market, Lagos Island. Contact our dedicated sales representatives for immediate assistance, price quotes, and waybill arrangements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* WhatsApp Priority Card */}
            <div className="p-6 rounded-3xl bg-[#25D366]/10 border-2 border-[#25D366]/40 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow-md">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#1EBE5D] bg-[#25D366]/20 px-2 py-0.5 rounded-md inline-block">
                  Fastest Response (Instant Reply)
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#0F2E22]">
                  WhatsApp Sales & Waybill Line
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  Send pictures of the exact design, machine model, or color you need for immediate quotes and payment details.
                </p>
                <div className="pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-black text-[#1EBE5D] hover:underline"
                  >
                    <span>Chat on WhatsApp: {settings.phone}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Calls Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border-2 border-[#E8E2D9] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                <Phone className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0F2E22] bg-gray-200 px-2 py-0.5 rounded-md inline-block">
                  Direct Telephone Lines
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#0F2E22]">
                  Call Our Store Directly
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  Speak directly with Mr. Ayobami or the Balogun customer service desk.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-black text-[#0F2E22]">
                  <a href="tel:08033810865" className="hover:text-[#2D6A4F] bg-white px-3 py-1.5 rounded-xl border border-gray-300 shadow-xs">
                    08033810865
                  </a>
                  <a href="tel:09150996348" className="hover:text-[#2D6A4F] bg-white px-3 py-1.5 rounded-xl border border-gray-300 shadow-xs">
                    09150996348
                  </a>
                </div>
              </div>
            </div>

            {/* Physical Address Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border-2 border-[#E8E2D9] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0F2E22] bg-gray-200 px-2 py-0.5 rounded-md inline-block">
                  Physical Store Address
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#0F2E22]">
                  {settings.address}
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  Located in the heart of Balogun Market, Lagos Island. Easily accessible by private car, hailing ride, or Lagos Island market transport.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(settings.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-black text-[#2D6A4F] hover:underline"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="p-6 rounded-3xl bg-[#FAF8F5] border-2 border-[#E8E2D9] flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] text-[#D4AF37] flex items-center justify-center shrink-0 shadow-md">
                <Clock className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0F2E22] bg-gray-200 px-2 py-0.5 rounded-md inline-block">
                  Store Hours
                </span>
                <h3 className="text-base sm:text-lg font-black text-[#0F2E22]">
                  Monday - Saturday: 8:00 AM - 6:00 PM
                </h3>
                <p className="text-xs text-gray-600 font-medium">
                  Closed on Sundays and recognized Nigerian public holidays. WhatsApp inquiries remain open 24/7.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Royal Business Card with Official Logo & Socials */}
          <div className="lg:col-span-6 bg-[#0F2E22] text-white p-8 sm:p-10 rounded-3xl border-4 border-[#D4AF37] shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute inset-0 bg-radial from-[#D4AF37]/15 via-transparent to-transparent pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              
              <div className="flex items-center gap-4">
                <img
                  src={logoSrc}
                  alt="Ayobami SAM Ventures"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain drop-shadow-xl"
                />
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                    {settings.storeName}
                  </h3>
                  <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mt-0.5">
                    Commercial Wholesaler & Retailer
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-[#E0D6C8] leading-relaxed">
                <p>
                  Whether you are organizing an Owambe event, sourcing Aso-Ebi for 50+ guests, setting up an industrial garment factory, or ordering matching Italian leather footwear, our team provides personalized customer support from start to finish.
                </p>
                <p className="text-[#D4AF37] font-bold">
                  ✓ Verified Bank Accounts for Business Invoicing
                  <br />
                  ✓ High-Resolution Video Inspection of Fabrics before Payment
                  <br />
                  ✓ Stamped Interstate Park Waybill Receipts
                </p>
              </div>

              {/* Official Social Media Channels */}
              <div className="pt-4 border-t border-[#D4AF37]/30 space-y-3">
                <span className="text-[11px] font-black uppercase tracking-widest text-[#D4AF37] block">
                  Follow Our Official Channels:
                </span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#1877F2] text-white font-bold text-xs shadow hover:opacity-90 transition-opacity"
                  >
                    <FacebookIcon className="w-4 h-4 fill-current" />
                    <span>Facebook Profile</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>

                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black text-[#25F4EE] border border-[#25F4EE]/40 font-bold text-xs shadow hover:opacity-90 transition-opacity"
                  >
                    <TikTokIcon className="w-4 h-4" />
                    <span>TikTok Videos</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Open WhatsApp Button */}
            <div className="relative z-10 pt-8 mt-6 border-t border-[#D4AF37]/30">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-sm flex items-center justify-center gap-2 shadow-xl transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Start Direct Order Inquiry on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
