import CTASection from "./components/CTASection";
import CategorySection from "./components/CategorySection";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import MatchingPreviewSection from "./components/MatchingPreviewSection";
import MetricsSection from "./components/MetricsSection";
import NavigationBar from "./components/NavigationBar";
import PartnersSection from "./components/PartnersSection";
import ProjectShowcaseSection from "./components/ProjectShowcaseSection";
import SolutionSection from "./components/SolutionSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
        
        * {
          font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
      `}</style>
      <NavigationBar />
      <main>
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
    </div>
  );
}
