import { MessageSquare, Lightbulb, Code, Rocket } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: MessageSquare,
      number: "01",
      title: "상담 및 기획",
      description: "프로젝트 목표와 요구사항을 상세히 분석하고, 최적의 전략을 수립합니다.",
      color: "#1C6DF2",
    },
    {
      icon: Lightbulb,
      number: "02",
      title: "시안 제작",
      description: "브랜드 아이덴티티를 반영한 디자인 시안을 제작하고 피드백을 반영합니다.",
      color: "#00BFA5",
    },
    {
      icon: Code,
      number: "03",
      title: "제작 및 수정",
      description: "실제 개발을 진행하며, 정기적인 검토와 수정을 통해 완성도를 높입니다.",
      color: "#1C6DF2",
    },
    {
      icon: Rocket,
      number: "04",
      title: "런칭 및 유지보수",
      description: "성공적인 런칭 후, 지속적인 모니터링과 업데이트로 최적의 성과를 보장합니다.",
      color: "#00BFA5",
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-[#F9FBFD]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <span className="text-[#1C6DF2]" style={{ fontWeight: 600 }}>진행 과정</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            프로젝트는 이렇게 진행됩니다
          </h2>
          <p className="text-[#0A2540] opacity-70 max-w-2xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            체계적인 프로세스로 성공적인 결과물을 만듭니다.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines - Desktop Only */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#1C6DF2] via-[#00BFA5] to-[#1C6DF2] opacity-20 -z-0" style={{ width: "calc(100% - 8rem)", left: "4rem" }}></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                  {/* Number Badge */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <span style={{ fontSize: "1.5rem", fontWeight: 700, color: step.color }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 mx-auto"
                    style={{ backgroundColor: step.color }}
                  >
                    <Icon size={28} className="text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-[#0A2540] text-center mb-3" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                    {step.title}
                  </h3>
                  <p className="text-[#0A2540] opacity-70 text-center" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                    {step.description}
                  </p>
                </div>

                {/* Arrow - Mobile Only */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <div className="w-1 h-8 bg-gradient-to-b from-[#1C6DF2] to-[#00BFA5] opacity-30"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
