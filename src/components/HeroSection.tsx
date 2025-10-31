import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="pt-28 lg:pt-36 pb-20 lg:pb-28 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="px-4 py-2 bg-blue-100 text-[#2563EB] rounded-full" style={{ fontWeight: 600 }}>
              🚀 AI 기반 디지털 솔루션
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="text-gray-900 mb-6"
            style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1.2 }}
          >
            홈페이지 제작 · 웹디자인 · 광고마케팅,<br />
            <span className="text-[#2563EB]">SULAB이 성과로 증명합니다</span>
          </h1>

          {/* Description */}
          <p
            className="text-gray-600 mb-10 max-w-2xl mx-auto"
            style={{ fontSize: "1.125rem", lineHeight: 1.7 }}
          >
            AI 기술과 전문가의 노하우로 비즈니스 성장을 만듭니다.<br />
            기획부터 디자인, 개발, 마케팅까지 한 번에 해결하세요.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-all hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <span>상담 요청하기</span>
              <ArrowRight size={20} />
            </button>
            <button
              onClick={scrollToPortfolio}
              className="px-8 py-4 bg-white text-[#2563EB] rounded-lg border-2 border-[#2563EB] hover:bg-[#2563EB] hover:text-white transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
              style={{ fontWeight: 600 }}
            >
              <Play size={20} />
              <span>포트폴리오 보기</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-[#2563EB] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                100+
              </div>
              <div className="text-gray-600" style={{ fontWeight: 500 }}>완료 프로젝트</div>
            </div>
            <div className="text-center">
              <div className="text-[#2563EB] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                98%
              </div>
              <div className="text-gray-600" style={{ fontWeight: 500 }}>고객 만족도</div>
            </div>
            <div className="text-center">
              <div className="text-[#2563EB] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                24h
              </div>
              <div className="text-gray-600" style={{ fontWeight: 500 }}>빠른 응답</div>
            </div>
            <div className="text-center">
              <div className="text-[#2563EB] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
                5년
              </div>
              <div className="text-gray-600" style={{ fontWeight: 500 }}>업계 경력</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
