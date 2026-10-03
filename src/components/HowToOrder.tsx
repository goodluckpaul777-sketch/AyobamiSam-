import React from 'react';
import { Layers, MessageSquare, CheckCircle2, Truck, ClipboardList } from 'lucide-react';

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      num: '1',
      icon: <Layers className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Select Your Department',
      desc: 'Choose from Cloths & Fabrics (Ankara, Swiss Lace, Senator), Shoes & Matching Bags, or Tailoring Machines.'
    },
    {
      num: '2',
      icon: <ClipboardList className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Specify Your Order Needs',
      desc: 'State your required quantity — retail cuts, 20-bundle merchant bales, footwear shoe size, or machine model.'
    },
    {
      num: '3',
      icon: <MessageSquare className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Chat Directly on WhatsApp',
      desc: 'Connect with our Balogun West sales desk on WhatsApp (+234 803 381 0865) for live assistance.'
    },
    {
      num: '4',
      icon: <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Receive Quote & Video Proof',
      desc: 'Get a clear proforma invoice, video inspection of your fabric or machine, and verified payment details.'
    },
    {
      num: '5',
      icon: <Truck className="w-6 h-6 text-[#D4AF37]" />,
      title: 'Fast Waybill Dispatch',
      desc: 'Your goods are securely packed and dispatched via trusted interstate park couriers or DHL worldwide.'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]" id="how-to-order-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-white px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block">
            FAST & SIMPLE WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0F2E22] tracking-tight">
            HOW TO INQUIRE & ORDER
          </h2>
          <p className="text-xs sm:text-base text-gray-600 font-medium">
            Ordering from Ayobami SAM Ventures at Balogun Market is direct, safe, and transparent.
          </p>
        </div>

        {/* Steps Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border-2 border-[#E8E2D9] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] flex items-center justify-center">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-black text-[#D4AF37]/40">
                    0{s.num}
                  </span>
                </div>
                <h3 className="text-base font-black text-[#0F2E22] mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="text-xs text-gray-600 font-medium leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-black text-[#2D6A4F] uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#2D6A4F]" />
                <span>Verified Step 0{s.num}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
