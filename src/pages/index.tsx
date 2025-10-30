import Head from "next/head";

import { AISearch } from "@/components/AISearch";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";

export default function HomePage() {
  const metaTitle = "SULAB | 홈페이지 제작 · 웹디자인 · 광고마케팅 전문 에이전시";
  const metaDescription =
    "SULAB은 데이터 기반 전략으로 홈페이지 제작, 브랜딩 디자인, 광고 마케팅, 전환 최적화를 제공하는 디지털 파트너입니다.";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sulab.co.kr" />
        <meta property="og:locale" content="ko_KR" />
        <meta name="keywords" content="홈페이지 제작, 웹디자인, 광고 마케팅, 전환 최적화, SULAB" />
      </Head>
      <div className="min-h-screen bg-white text-dark">
        <Header />
        <main>
          <Hero />
          <Services />
          <AISearch />
          <Portfolio />
          <Process />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
