import React from 'react';
import { CUSTOMER_TESTIMONIALS } from '../data/initialData';
import { Star, MapPin, Quote, ShieldCheck } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E8E2D9]" id="reviews-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block mb-3">
              VERIFIED REPUTATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-[#0F2E22] tracking-tight">
              CUSTOMER TESTIMONIALS & REVIEWS
            </h2>
            <p className="text-xs sm:text-base text-gray-600 mt-1 font-medium">
              Read feedback from retail and wholesale customers across Lagos, Abuja, Port Harcourt, and overseas.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-[#FAF8F5] px-4 py-2.5 rounded-2xl border-2 border-[#E8E2D9] self-start sm:self-auto shadow-xs">
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-xs font-black text-[#0F2E22]">4.9 / 5.0 Star Merchant</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CUSTOMER_TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAF8F5] rounded-3xl p-6 sm:p-7 border-2 border-[#E8E2D9] shadow-sm hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#D4AF37]/40" />
                </div>

                <h3 className="text-sm font-black text-[#0F2E22]">
                  {review.title}
                </h3>

                <p className="text-xs text-gray-700 leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-gray-200">
                <h4 className="text-xs font-black text-[#0F2E22]">
                  {review.customerName}
                </h4>
                <div className="flex items-center gap-1 text-[11px] text-[#2D6A4F] font-bold mt-0.5">
                  <MapPin className="w-3 h-3" />
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
