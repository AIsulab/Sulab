import { ImageWithFallback } from "./figma/ImageWithFallback";
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
      className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-gradient-to-b from-[#E8F3FF] to-[#F9FBFD] overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm">
              <span className="text-[#1C6DF2]" style={{ fontWeight: 600 }}>
                AI 기반 디지털 솔루션
              </span>
            </div>

            <h1 className="text-[#0A2540]" style={{ fontSize: "2.75rem", fontWeight: 700, lineHeight: 1.2 }}>
              AI로 만드는<br />
              디지털 마케팅의 미래
            </h1>

            <p className="text-[#0A2540] opacity-80" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
              홈페이지 제작 · 브랜드 디자인 · 광고운영까지 한 번에,<br />
              SULAB과 함께하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="px-8 py-4 bg-[#1C6DF2] text-white rounded-full hover:bg-[#1557c7] transition-all hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <span>상담 요청하기</span>
                <ArrowRight size={20} />
              </button>
              <button
                onClick={scrollToPortfolio}
                className="px-8 py-4 bg-white text-[#1C6DF2] rounded-full border-2 border-[#1C6DF2] hover:bg-[#1C6DF2] hover:text-white transition-all hover:scale-105 inline-flex items-center justify-center gap-2"
                style={{ fontWeight: 600 }}
              >
                <Play size={20} />
                <span>포트폴리오 보기</span>
              </button>
            </div>

            {/* Stats */}
            <div className="pt-8 grid grid-cols-3 gap-6">
              <div>
                <div className="text-[#1C6DF2]" style={{ fontSize: "2rem", fontWeight: 700 }}>50+</div>
                <div className="text-[#0A2540] opacity-60">완료 프로젝트</div>
              </div>
              <div>
                <div className="text-[#1C6DF2]" style={{ fontSize: "2rem", fontWeight: 700 }}>100%</div>
                <div className="text-[#0A2540] opacity-60">고객 만족도</div>
              </div>
              <div>
                <div className="text-[#1C6DF2]" style={{ fontSize: "2rem", fontWeight: 700 }}>24/7</div>
                <div className="text-[#0A2540] opacity-60">빠른 응답</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1759668358660-0d06064f0f84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBsYXB0b3B8ZW58MXx8fHwxNzYxNzg5MDYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SULAB 워크스페이스"
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-[#1C6DF2]/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-[#00BFA5]/10 rounded-full blur-3xl -z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
