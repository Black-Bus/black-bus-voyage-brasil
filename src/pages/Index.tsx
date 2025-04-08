
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TicketSearchSection from '../components/TicketSearchSection';
import BenefitsSection from '../components/BenefitsSection';
import PopularRoutesSection from '../components/PopularRoutesSection';
import PackagesSection from '../components/PackagesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PartnersSection from '../components/PartnersSection';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';
import { Toaster } from '../components/ui/toaster';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <TicketSearchSection />
      <BenefitsSection />
      <PopularRoutesSection />
      <PackagesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
