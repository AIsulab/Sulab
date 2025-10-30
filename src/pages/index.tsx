'use client';

import CTASection from '@/components/CTASection';
import CategorySection from '@/components/CategorySection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import MatchingPreviewSection from '@/components/MatchingPreviewSection';
import MetricsSection from '@/components/MetricsSection';
import NavigationBar from '@/components/NavigationBar';
import PartnersSection from '@/components/PartnersSection';
import ProjectShowcaseSection from '@/components/ProjectShowcaseSection';
import SolutionSection from '@/components/SolutionSection';

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <main className="bg-white">
        <HeroSection />
        <MetricsSection />
        <CategorySection />
        <MatchingPreviewSection />
        <ProjectShowcaseSection />
        <SolutionSection />
        <CTASection />
        <PartnersSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
