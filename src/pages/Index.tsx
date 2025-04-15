
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import TicketSearchSection from '../components/TicketSearchSection';
import PremiumServicesSection from '../components/PremiumServicesSection';
import FeaturedCitiesSection from '../components/FeaturedCitiesSection';
import SpecialOffersSection from '../components/SpecialOffersSection';
import PopularRoutesSection from '../components/PopularRoutesSection';
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
      <PremiumServicesSection />
      <FeaturedCitiesSection />
      <SpecialOffersSection />
      <PopularRoutesSection />
      <TestimonialsSection />
      <PartnersSection />
      <CtaSection />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
