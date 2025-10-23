import { Globe, Zap, Sparkles } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "AI 카페·웹사이트 제작",
      description: "클릭 몇 번으로 반응형 웹사이트 생성",
      color: "#00ADB5",
    },
    {
      icon: Zap,
      title: "AI 마케팅 자동화",
      description: "광고 세팅부터 리포트까지 AI가 처리",
      color: "#00ADB5",
    },
    {
      icon: Sparkles,
      title: "AI 콘텐츠 제작",
      description: "블로그 포스트, SNS 콘텐츠를 AI가 자동 생성",
      color: "#00ADB5",
    },
  ];

  return (
    <section id="services" className="py-20 bg-[#E9ECEF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white rounded-full mb-4">
            <span className="text-[#00ADB5]" style={{ fontWeight: 600 }}>서비스</span>
          </div>
          <h2 className="text-[#14213D]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            AI 기반 마케팅 솔루션
          </h2>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${service.color}15` }}
                >
                  <Icon size={32} color={service.color} strokeWidth={2} />
                </div>
                <h3 className="text-[#14213D] mb-3" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                  {service.title}
                </h3>
                <p className="text-[#333333] mb-6" style={{ lineHeight: 1.7 }}>
                  {service.description}
                </p>
                <button className="text-[#00ADB5] hover:text-[#009198] transition-colors flex items-center gap-2">
                  <span style={{ fontWeight: 600 }}>자세히 보기</span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12L10 8L6 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

