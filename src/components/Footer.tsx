import { Instagram, Youtube, FileText } from "lucide-react";
import logo from "figma:asset/abf9816ebaecbe448905f80cd9fb228c25413530.png";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img src={logo} alt="SULAB" className="h-12 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 mb-6" style={{ fontSize: "0.9375rem", lineHeight: 1.7 }}>
              SULAB은 AI 기술과 디자인 감각으로<br />
              비즈니스의 디지털 성장을 만듭니다.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors"
                aria-label="Notion"
              >
                <FileText size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#2563EB] transition-colors"
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
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("ai-search")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AI 검색
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  포트폴리오
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  진행과정
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4" style={{ fontWeight: 700 }}>연락처</h3>
            <ul className="space-y-3 text-gray-400">
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
                  className="text-[#2563EB] hover:text-[#1d4ed8] transition-colors"
                  style={{ fontWeight: 600 }}
                >
                  카카오톡 상담 →
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500" style={{ fontSize: "0.875rem" }}>
              © 2025 SULAB. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-500" style={{ fontSize: "0.875rem" }}>
              <a href="#" className="hover:text-white transition-colors">이용약관</a>
              <a href="#" className="hover:text-white transition-colors">개인정보처리방침</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
