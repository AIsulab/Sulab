export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#14213D] via-[#1a2a4d] to-[#14213D] pt-16">
      {/* AI Data Graphics Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ADB5" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="20%" cy="30%" r="3" fill="#00ADB5" opacity="0.6">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="40%" r="4" fill="#00ADB5" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="70%" r="2" fill="#00ADB5" opacity="0.6">
            <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="#00ADB5" strokeWidth="1" opacity="0.3" />
          <line x1="80%" y1="40%" x2="50%" y2="70%" stroke="#00ADB5" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-white" style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2 }}>
            AI로 만드는 마케팅의 미래
          </h1>
          <p className="text-[#E9ECEF] max-w-3xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
            수랩은 인공지능 기술을 통해 홈페이지 제작과 광고 마케팅을 자동화하는 AI 연구소입니다.
          </p>
          <div className="pt-4">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#00ADB5] text-white rounded-lg hover:bg-[#009198] transition-all hover:shadow-lg hover:shadow-[#00ADB5]/30"
              style={{ fontSize: "1.125rem", fontWeight: 600 }}
            >
              무료 상담 시작하기
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00ADB5]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>500+</div>
            <p className="text-[#E9ECEF] mt-2">프로젝트 완료</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00ADB5]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>AI</div>
            <p className="text-[#E9ECEF] mt-2">자동화 기술</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00ADB5]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>24/7</div>
            <p className="text-[#E9ECEF] mt-2">실시간 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
}
