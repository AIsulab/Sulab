import { MessageCircle, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-[#E9ECEF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Info */}
            <div className="bg-gradient-to-br from-[#14213D] to-[#1a2a4d] p-12 text-white">
              <h2 style={{ fontSize: "2.5rem", fontWeight: 700, lineHeight: 1.3 }}>
                프로젝트 상담 신청하기
              </h2>
              <p className="mt-4 text-[#E9ECEF]" style={{ fontSize: "1.125rem", lineHeight: 1.6 }}>
                AI 마케팅 전문가가 직접 답변드립니다.
              </p>

              <div className="mt-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>카카오톡 상담</p>
                    <p className="text-[#E9ECEF] mt-1">빠른 1:1 채팅 상담</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#00ADB5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p style={{ fontWeight: 600 }}>이메일 문의</p>
                    <p className="text-[#E9ECEF] mt-1">sulabstore@naver.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-[#E9ECEF]" style={{ fontSize: "0.875rem" }}>
                  평균 응답 시간: 24시간 이내<br />
                  상담 가능 시간: 평일 09:00 - 18:00
                </p>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="p-12 flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-[#00ADB5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle size={40} color="#00ADB5" />
                  </div>
                  <h3 className="text-[#14213D] mb-3" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
                    지금 바로 상담 시작
                  </h3>
                  <p className="text-[#333333] mb-8">
                    AI 마케팅 솔루션에 대해<br />
                    궁금한 점을 물어보세요
                  </p>
                </div>

                <a
                  href="https://open.kakao.com/o/siMggc8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full px-8 py-4 bg-[#00ADB5] text-white rounded-xl hover:bg-[#009198] transition-all hover:shadow-lg hover:shadow-[#00ADB5]/30 flex items-center justify-center gap-3">
                    <MessageCircle size={24} />
                    <span style={{ fontSize: "1.125rem", fontWeight: 600 }}>오픈카톡 상담하기</span>
                  </button>
                </a>

                <div className="text-center">
                  <p className="text-[#333333]" style={{ fontSize: "0.875rem" }}>
                    또는
                  </p>
                  <a
                    href="mailto:sulabstore@naver.com"
                    className="text-[#00ADB5] hover:text-[#009198] transition-colors inline-block mt-2"
                    style={{ fontWeight: 600 }}
                  >
                    sulabstore@naver.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
