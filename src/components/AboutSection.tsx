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
                alt="SULAB 스튜디오"
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
              <h2 className="text-[#14213D] mb-2" style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.3 }}>
                수랩(SULAB)
              </h2>
              <p className="text-[#667085]" style={{ fontSize: "0.9375rem" }}>
                역할: <span style={{ fontWeight: 600 }}>CIO · 디자인 엔지니어</span>
              </p>
            </div>

            <p className="text-[#333333]" style={{ fontSize: "1.125rem", lineHeight: 1.8 }}>
              수랩(SULAB)은 기술과 창의를 결합해 AI 마케팅 솔루션을 연구·개발하는 스튜디오입니다. 데이터 기반 자동화와 감각적인 디자인을 통해 브랜드가 더 빠르게 성장할 수 있도록 돕습니다.
            </p>

            <p className="text-[#333333]" style={{ fontSize: "1rem", lineHeight: 1.8 }}>
              특히 카페와 라이프스타일 비즈니스가 손쉽게 온라인을 구축하고 유지할 수 있도록, AI 자동화 워크플로와 맞춤형 콘텐츠 제작을 한 번에 제공하는 것이 우리의 핵심 역량입니다.
            </p>

            <div className="bg-[#E9ECEF] rounded-xl p-6">
              <p className="text-[#14213D]" style={{ fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.6 }}>
                “데이터와 AI를 활용해 브랜드 성장을 가속합니다.”
              </p>
              <p className="text-[#333333] mt-2">- 비전 -</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

