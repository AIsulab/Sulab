import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Monitor, Zap, Sparkles, ShoppingCart, Settings, Check } from "lucide-react";

export function PortfolioSection() {
  const capabilities = [
    {
      icon: Monitor,
      title: "WordPress & Webflow 기반 반응형 사이트 구축",
      items: [
        "브랜드 성격에 맞는 사용자 경험 설계",
        "관리자와 콘텐츠(CMS) 구조 자동화",
        "모바일·태블릿 반응형 최적화",
      ],
      image:
        "https://images.unsplash.com/photo-1722596627369-a743837c7176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MTEyMjU0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Zap,
      title: "노코드/로코드 웹사이트 자동 생성 시스템",
      items: [
        "AI 프롬프트 기반 페이지 생성",
        "서비스별 자동 레이아웃 설계 · 섹션 배치",
        "데이터 연동, 문의 폼 시스템 통합",
      ],
      image:
        "https://images.unsplash.com/photo-1759661881353-5b9cc55e1cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxubyUyMGNvZGUlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2MTIzNjQ2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Sparkles,
      title: "AI 콘텐츠·이미지 자동 생성 파이프라인",
      items: [
        "텍스트·배너·상품 설명 자동 생성",
        "로고·섹션 배경·히어로 이미지 자동 생성",
        "다국어 자동 번역 및 SEO 자동 최적화",
      ],
      image:
        "https://images.unsplash.com/photo-1721864428830-7417b93831b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NjEyMzY0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: ShoppingCart,
      title: "커머스·예약·게시판 기능 통합 구축",
      items: [
        "WordPress WooCommerce / Shopify 연동",
        "예약·상담·문의 시스템 도입",
        "공공·기업용 자료 게시판 구성 가능",
      ],
      image:
        "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBwbGF0Zm9ybXxlbnwxfHx8fDE3NjEyMDM2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Settings,
      title: "운영 자동화·유지보수 서비스",
      items: [
        "AI 모니터링 기반 성과 분석",
        "문의·견적 요청 자동 분류 및 알림 발송",
        "CMS 콘텐츠·이미지 실시간 업데이트",
      ],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwYW5hbHl0aWNzJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NjEyMzY0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-[#E9ECEF] rounded-full mb-4">
            <span className="text-[#00ADB5]" style={{ fontWeight: 600 }}>포트폴리오</span>
          </div>
          <h2 className="text-[#14213D] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            AI 기반 카페·웹사이트 제작 포트폴리오
          </h2>
          <p className="text-[#333333] max-w-3xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            수랩은 워드프레스, 웹플로우, AI 빌더 등 다양한 플랫폼을 활용해 기업 맞춤형 웹사이트를 제작합니다.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="space-y-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <div
                key={index}
                className="bg-white border-2 border-[#E9ECEF] rounded-2xl overflow-hidden hover:border-[#00ADB5] transition-all hover:shadow-xl group"
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
                  {/* Left - Image (2 columns) */}
                  <div className="md:col-span-2 relative overflow-hidden">
                    <ImageWithFallback
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-cover min-h-[250px] group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                  </div>

                  {/* Right - Content (3 columns) */}
                  <div className="md:col-span-3 p-8 flex flex-col justify-center">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 rounded-xl bg-[#00ADB5]/10 flex items-center justify-center group-hover:bg-[#00ADB5] transition-colors">
                          <Icon size={28} className="text-[#00ADB5] group-hover:text-white transition-colors" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-[#14213D] mb-4" style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.4 }}>
                          {capability.title}
                        </h3>
                        <ul className="space-y-3">
                          {capability.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3">
                              <Check size={18} className="text-[#00ADB5] mt-1 flex-shrink-0" />
                              <span className="text-[#333333]" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
                                {item}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#14213D] text-white rounded-xl hover:bg-[#1a2a4d] transition-all hover:shadow-lg inline-flex items-center gap-2">
            <span style={{ fontSize: "1.0625rem", fontWeight: 600 }}>제작 방식 자세히 보기</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

