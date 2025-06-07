import React from 'react';
import HeroSection from '@/components/HeroSection';
import ProblemSection from '@/components/ProblemSection';
import FeaturesSection from '@/components/FeaturesSection';
import MissionSection from '@/components/MissionSection';
import BlogSection from '@/components/BlogSection';
import CTASection from '@/components/CTASection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <FeaturesSection />
      <MissionSection />
      <BlogSection onHomepage={true} />
      <CTASection />
    </>
  );
};

export default HomePage;