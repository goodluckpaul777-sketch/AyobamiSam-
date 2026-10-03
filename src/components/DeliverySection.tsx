import React from 'react';
import { StoreSettings } from '../types';
import { NIGERIA_STATES_DELIVERY } from '../data/initialData';
import { Truck, ShieldCheck, Clock, MapPin, PackageCheck, Plane } from 'lucide-react';

interface DeliverySectionProps {
  settings: StoreSettings;
}

export const DeliverySection: React.FC<DeliverySectionProps> = ({ settings }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]" id="delivery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#0F2E22] bg-white px-4 py-1.5 rounded-full border border-[#D4AF37]/50 shadow-xs inline-block">
            FAST LOGISTICS & DISPATCH
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-[#0F2E22] tracking-tight">
            Interstate & Worldwide Delivery Network
          </h2>
          <p className="text-xs sm:text-base text-gray-600 font-medium leading-relaxed">
            From our Balogun Island hub, we dispatch daily via recognized transport parks, dedicated doorstep couriers across Lagos, and express air cargo worldwide.
          </p>
        </div>

        {/* 3 Logistic Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          <div className="bg-white p-6 rounded-3xl border-2 border-[#E8E2D9] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-sm font-black text-[#0F2E22] mb-1">
                All 36 Nigerian States
              </h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Direct waybills through major motor parks (Jibowu, Ojota, Maza Maza, Mile 2) with driver contact and parcel receipt provided.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#E8E2D9] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] flex items-center justify-center shrink-0">
              <PackageCheck className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-sm font-black text-[#0F2E22] mb-1">
                Moisture-Proof Packaging
              </h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                All fabrics, shoes, and machines are wrapped in thick protective waterproof bagging before strapping to guarantee zero stains or tears.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border-2 border-[#E8E2D9] shadow-xs flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#0F2E22] flex items-center justify-center shrink-0">
              <Plane className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <div>
              <h3 className="text-sm font-black text-[#0F2E22] mb-1">
                Diaspora Express Air Cargo
              </h3>
              <p className="text-xs text-gray-600 font-medium leading-relaxed">
                Fast international delivery to the United Kingdom, United States, Canada, and Europe within 4 to 7 business days via DHL.
              </p>
            </div>
          </div>

        </div>

        {/* State Rates Table Card */}
        <div className="bg-white rounded-3xl border-2 border-[#E8E2D9] overflow-hidden shadow-sm">
          <div className="p-6 bg-[#0F2E22] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-black text-white">Estimated Shipping Rates & Transit Timelines</h3>
              <p className="text-xs text-[#D4AF37] font-semibold mt-0.5">Rates apply to standard single package / bundle shipments. Bulk bales billed on volume.</p>
            </div>
            <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-white border border-white/20 self-start sm:self-auto">
              Updated October 2026
            </span>
          </div>

          <div className="divide-y divide-gray-100 overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAF8F5] text-gray-500 font-black uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="py-3.5 px-6">Destination Location</th>
                  <th className="py-3.5 px-6">Estimated Transit Time</th>
                  <th className="py-3.5 px-6 text-right">Standard Waybill Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium text-gray-700">
                {NIGERIA_STATES_DELIVERY.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#FAF8F5]/80 transition-colors">
                    <td className="py-3 px-6 font-bold text-[#0F2E22] flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-3 px-6 text-gray-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span>{item.deliveryDays}</span>
                      </span>
                    </td>
                    <td className="py-3 px-6 text-right font-black text-[#2D6A4F]">
                      ₦{item.rate.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
