import { Instagram, Youtube, FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0A2540] text-white py-16">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#1C6DF2] to-[#00BFA5] rounded-xl flex items-center justify-center">
                <span style={{ fontWeight: 700 }}>S</span>
              </div>
              <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>SULAB</span>
            </div>
            <p className="text-white/70 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              SULAB은 AI 기술과 디자인 감각으로<br />
              비즈니스의 디지털 성장을 만듭니다.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1C6DF2] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1C6DF2] transition-colors"
                aria-label="Notion"
              >
                <FileText size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#1C6DF2] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4" style={{ fontWeight: 700 }}>바로가기</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  포트폴리오
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  진행과정
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4" style={{ fontWeight: 700 }}>연락처</h3>
            <ul className="space-y-3 text-white/70">
              <li>
                <span style={{ fontWeight: 600 }}>대표:</span> 이진수
              </li>
              <li>
                <span style={{ fontWeight: 600 }}>이메일:</span> sulabstore@naver.com
              </li>
              <li>
                <span style={{ fontWeight: 600 }}>주소:</span> 전북특별자치도 전주시
              </li>
              <li>
                <a
                  href="https://open.kakao.com/o/siMggc8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00BFA5] hover:text-[#00a898] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  카카오톡 상담 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50" style={{ fontSize: "0.875rem" }}>
              © 2025 SULAB. All rights reserved.
            </p>
            <div className="flex gap-6 text-white/50" style={{ fontSize: "0.875rem" }}>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
