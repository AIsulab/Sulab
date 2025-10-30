import Head from "next/head";
import ConsultationSection from "../components/ConsultationSection";
import FAQSection from "../components/FAQSection";
import FeatureOverviewSection from "../components/FeatureOverviewSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import NavigationBar from "../components/NavigationBar";
import PricingSection from "../components/PricingSection";
import ResourcesSection from "../components/ResourcesSection";
import TestimonialsSection from "../components/TestimonialsSection";
import VideoShowcaseSection from "../components/VideoShowcaseSection";
import WorkflowSection from "../components/WorkflowSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>SULAB Copilot | AI Growth Marketing Lab</title>
        <meta
          name="description"
          content="SULAB Copilot combines AI keyword intelligence, creative automation, and performance analytics to accelerate YouTube-driven growth."
        />
        <meta
          property="og:title"
          content="SULAB Copilot | AI Growth Marketing Lab"
        />
        <meta
          property="og:description"
          content="Benchmark competitors, ship content faster, and measure impact with a single search-driven workflow."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="min-h-screen bg-white">
        <NavigationBar />
        <HeroSection />
        <FeatureOverviewSection />
        <VideoShowcaseSection />
        <WorkflowSection />
        <PricingSection />
        <TestimonialsSection />
        <ResourcesSection />
        <ConsultationSection />
        <FAQSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
