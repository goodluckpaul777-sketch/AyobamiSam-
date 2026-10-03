import React, { useState } from 'react';
import { StoreSettings } from './types';
import { INITIAL_STORE_SETTINGS } from './data/initialData';
import { getLocalStoreSettings } from './services/api';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { DepartmentsSection } from './components/DepartmentsSection';
import { WhyShopWithUs } from './components/WhyShopWithUs';
import { HowToOrder } from './components/HowToOrder';
import { DeliverySection } from './components/DeliverySection';
import { CustomerReviews } from './components/CustomerReviews';
import { AboutUsSection } from './components/AboutUsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [settings] = useState<StoreSettings>(() => getLocalStoreSettings());

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0F2E22]">
      {/* 1. Brand Header with Logo and Fast Contact Navigation */}
      <Header
        settings={settings}
        onNavigateSection={scrollToSection}
      />

      <main className="flex-1">
        {/* 2. Grand Royal Hero Section with Official Logo */}
        <Hero
          settings={settings}
          onExploreDepartments={() => scrollToSection('departments-section')}
          onContactClick={() => scrollToSection('contact-section')}
        />

        {/* 3. The 3 Core Departments (Cloths, Shoes, Tailoring Machines) */}
        <DepartmentsSection settings={settings} />

        {/* 4. Why Shop With Us (Reputation, Integrity, Direct Balogun Pricing) */}
        <WhyShopWithUs />

        {/* 5. How to Inquire & Order Workflow */}
        <HowToOrder />

        {/* 6. Nationwide Interstate & Worldwide Logistics */}
        <DeliverySection settings={settings} />

        {/* 7. Verified Customer Feedback */}
        <CustomerReviews />

        {/* 8. About Ayobami SAM Ventures */}
        <AboutUsSection
          settings={settings}
          onContactClick={() => scrollToSection('contact-section')}
        />

        {/* 9. Physical Storefront, Directions & Contact Information */}
        <ContactSection settings={settings} />
      </main>

      {/* 10. Official Footer with Logo & Contact */}
      <Footer
        settings={settings}
        onNavigateSection={scrollToSection}
      />
    </div>
  );
}
