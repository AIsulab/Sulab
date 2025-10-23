import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjEyMDM2MTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="SULAB 회사"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <div className="inline-block px-4 py-2 bg-[#E9ECEF] rounded-full mb-4">
                <span className="text-[#00ADB5]" style={{ fontWeight: 600 }}>회사 소개</span>
              </div>
              <h2 className="text-[#14213D] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.3 }}>
                수랩(SULAB)
              </h2>
            </div>

            <p className="text-[#333333]" style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
              수랩(SULAB)은 기술과 창의를 결합해 AI 마케팅 솔루션을 개발하는 연구형 기업입니다.
            </p>

            <p className="text-[#333333]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              AI가 사람을 대체하는 것이 아니라, 마케팅의 효율과 품질을 높이는 도구가 되도록 설계합니다.
            </p>

            <div className="pt-4 space-y-4">
              <div className="border-l-4 border-[#00ADB5] pl-4">
                <p className="text-[#333333]" style={{ fontWeight: 600 }}>설립 · 본사</p>
                <p className="text-[#333333]">2025 · 서울</p>
              </div>

              <div className="bg-[#E9ECEF] rounded-xl p-6">
                <p className="text-[#14213D]" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.6 }}>
                  “데이터와 AI를 활용해 브랜드 성장을 가속하는 세상을 만듭니다.”
                </p>
                <p className="text-[#333333] mt-2">- 비전 -</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

