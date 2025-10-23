import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#14213D] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo.png"
                onError={(e) => {
                  const img = e.currentTarget as HTMLImageElement;
                  img.onerror = null;
                  img.src = "/logo.svg";
                }}
                alt="SULAB 로고"
                className="h-8 w-8 object-contain"
              />
              <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>SULAB</span>
            </div>
            <p className="text-[#E9ECEF]" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
              SULAB은 AI 기술로 홈페이지 제작과 마케팅을 자동화하는 연구소형 기업입니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  회사 소개
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  서비스
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  포트폴리오
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  문의하기
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>연락처</h4>
            <ul className="space-y-2 mb-4">
              <li className="text-[#E9ECEF]" style={{ fontSize: "0.875rem" }}>
                이메일: sulabstore@naver.com
              </li>
              <li className="text-[#E9ECEF]" style={{ fontSize: "0.875rem" }}>
                운영시간: 평일 09:00 - 18:00 (주말/공휴일 휴무)
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#00ADB5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#E9ECEF]" style={{ fontSize: "0.875rem" }}>
              © 2025 SULAB. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                style={{ fontSize: "0.875rem" }}
              >
                이용약관
              </a>
              <a
                href="#"
                className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                style={{ fontSize: "0.875rem" }}
              >
                개인정보처리방침
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


