import { Globe, Sparkles, BarChart3, Search, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: "WordPress / Custom Website",
      description: "반응형 웹사이트부터 복잡한 커스텀 시스템까지, 비즈니스에 최적화된 웹 솔루션을 제공합니다.",
      features: ["WordPress/Webflow", "커스텀 개발", "CMS 구축", "유지보수"],
    },
    {
      icon: Sparkles,
      title: "Brand Identity Design",
      description: "브랜드의 가치를 시각적으로 표현합니다. 로고부터 전체 브랜딩까지 일관된 디자인을 제공합니다.",
      features: ["로고 디자인", "브랜드 가이드", "패키지 디자인", "콘텐츠 제작"],
    },
    {
      icon: BarChart3,
      title: "SNS & Google Ads",
      description: "효과적인 광고 전략으로 타겟 고객에게 정확하게 도달합니다. 데이터 기반 최적화를 진행합니다.",
      features: ["광고 기획/운영", "Meta/Google 광고", "네이버 광고", "A/B 테스트"],
    },
    {
      icon: Search,
      title: "Performance Marketing",
      description: "성과 중심의 마케팅으로 실질적인 비즈니스 성장을 만듭니다. 정기 리포트와 개선안을 제공합니다.",
      features: ["SEO 최적화", "전환율 분석", "리포팅", "컨설팅"],
    },
  ];

  return (
    <section id="services" className="py-24 lg:py-32 bg-[#F9FBFD]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <span className="text-[#1C6DF2]" style={{ fontWeight: 600 }}>서비스</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            SULAB의 주요 서비스
          </h2>
          <p className="text-[#0A2540] opacity-70 max-w-2xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            디지털 비즈니스 성장을 위한 통합 솔루션을 제공합니다.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#1C6DF2] to-[#00BFA5] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[#0A2540] mb-3" style={{ fontSize: "1.375rem", fontWeight: 700 }}>
                      {service.title}
                    </h3>
                    <p className="text-[#0A2540] opacity-70 mb-4" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-[#F9FBFD] text-[#1C6DF2] rounded-full text-sm"
                          style={{ fontWeight: 500 }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <button className="text-[#1C6DF2] hover:text-[#1557c7] inline-flex items-center gap-2 group-hover:gap-3 transition-all" style={{ fontWeight: 600 }}>
                      <span>자세히 보기</span>
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
