import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { YouTubeAnalyticsSection } from "./components/YouTubeAnalyticsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { YouTubeAnalyticsProvider } from "./contexts/YouTubeAnalyticsContext";

export default function App() {
  return (
    <YouTubeAnalyticsProvider>
      <div className="min-h-screen">
        <style>{`
          @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css');
          
          * {
            font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          }
        `}</style>
        
        <Navigation />
        <HeroSection />
        <YouTubeAnalyticsSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <ContactSection />
        <Footer />
      </div>
    </YouTubeAnalyticsProvider>
  );
}
