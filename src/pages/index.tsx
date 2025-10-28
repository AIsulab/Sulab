import Head from "next/head";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import PortfolioSection from "../components/PortfolioSection";
import SolutionSection from "../components/SolutionSection";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>SULAB | AI 마케팅 연구소</title>
        <meta
          name="description"
          content="SULAB은 AI로 마케팅 인사이트를 만들어내는 연구소입니다. 데이터 분석과 자동화를 기반으로 브랜드의 성장을 지원합니다."
        />
        <meta property="og:title" content="SULAB | AI 마케팅 연구소" />
        <meta
          property="og:description"
          content="AI 기반 유튜브 인사이트와 자동화 솔루션으로 브랜드 성장을 가속화하세요."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <HeroSection />
        <SolutionSection />
        <PortfolioSection />
        <Footer />
      </main>
    </>
  );
};

export default HomePage;
