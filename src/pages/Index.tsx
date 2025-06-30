
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedPrograms from '@/components/FeaturedPrograms';
import BenefitsSection from '@/components/BenefitsSection';
import TrustedPartners from '@/components/TrustedPartners';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedPartners />
        <FeaturedPrograms />
        <BenefitsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
