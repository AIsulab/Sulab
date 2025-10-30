import Head from "next/head";
import CTASection from "../components/CTASection";
import CategorySection from "../components/CategorySection";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import MatchingPreviewSection from "../components/MatchingPreviewSection";
import MetricsSection from "../components/MetricsSection";
import NavigationBar from "../components/NavigationBar";
import PartnersSection from "../components/PartnersSection";
import ProjectShowcaseSection from "../components/ProjectShowcaseSection";
import SolutionSection from "../components/SolutionSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>위시켓 스타일 홈 | SULAB</title>
        <meta
          name="description"
          content="위시켓과 유사한 구조로 구성된 프로젝트 매칭 랜딩 페이지입니다."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
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
