import React from 'react';
import { StoreSettings } from '../types';
import { MAIN_DEPARTMENTS, DepartmentInfo } from '../data/initialData';
import { Shirt, Footprints, Scissors, MessageCircle, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface DepartmentsSectionProps {
  settings: StoreSettings;
}

export const DepartmentsSection: React.FC<DepartmentsSectionProps> = ({ settings }) => {
  const getDepartmentIcon = (id: string) => {
    if (id === 'shoes-bags') return <Footprints className="w-8 h-8 text-[#E0A96D]" />;
    if (id === 'tailoring-machines') return <Scissors className="w-8 h-8 text-[#95D5B2]" />;
    return <Shirt className="w-8 h-8 text-[#D4AF37]" />;
  };

  const handleInquireDepartment = (dept: DepartmentInfo) => {
    const msg = `Hello, ${settings.storeName}. I am inquiring about your "${dept.name}" (${dept.subtitle}). Please send me available designs, machine specifications, and wholesale pricing.`;
    const url = `https://wa.me/${settings.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]" id="departments-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-white px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block">
            OUR 3 CORE SPECIALTIES
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F2E22] tracking-tight">
            Direct Balogun Wholesale & Retail Departments
          </h2>
          <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed">
            From single retail purchases to 20-bundle merchant bales and industrial factory setups, we supply authentic merchandise directly from Balogun Market West, Lagos Island.
          </p>
        </div>

        {/* 3 Department Showcases */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {MAIN_DEPARTMENTS.map((dept, index) => (
            <div 
              key={dept.id}
              className="bg-white rounded-3xl border-2 border-[#E8E2D9] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group p-6 sm:p-8"
            >
              <div className="space-y-6">
                
                {/* Header with Icon & Badge */}
                <div className="flex items-center justify-between gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#0F2E22] flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {getDepartmentIcon(dept.id)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F5] border border-[#D4AF37] text-[#0F2E22] text-[10px] font-black uppercase tracking-wider">
                    {dept.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div>
                  <div className="text-[11px] font-black text-[#D4AF37] uppercase tracking-wider mb-1">
                    Department 0{index + 1}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-[#0F2E22] tracking-tight leading-snug">
                    {dept.name}
                  </h3>
                  <p className="text-xs font-bold text-gray-500 mt-1">
                    {dept.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-600 leading-relaxed font-medium">
                  {dept.description}
                </p>

                {/* Key Offerings List */}
                <div className="space-y-2.5 pt-2 border-t border-gray-100">
                  <span className="text-[11px] font-black text-[#0F2E22] uppercase tracking-wider block">
                    Available Inventory & Features:
                  </span>
                  <ul className="space-y-2 text-xs text-gray-700">
                    {dept.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#2D6A4F] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For Tag */}
                <div className="p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D9]">
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-wider block mb-0.5">
                    Recommended For:
                  </span>
                  <p className="text-xs font-semibold text-[#0F2E22]">
                    {dept.popularUses}
                  </p>
                </div>

              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => handleInquireDepartment(dept)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#0F2E22] hover:bg-[#1B4332] text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all group-hover:bg-[#25D366]"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Inquire {dept.name} on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
