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
                alt="SULAB 濡쒓퀬"
                className="h-8 w-8 object-contain"
              />
              <span style={{ fontSize: "1.25rem", fontWeight: 700 }}>SULAB</span>
            </div>
            <p className="text-[#E9ECEF]" style={{ fontSize: "0.875rem", lineHeight: 1.6 }}>
              AI濡?留뚮뱶??留덉??낆쓽 誘몃옒<br />
              湲곗닠怨?李쎌쓽???꾨꼍??議고빀
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>諛붾줈媛湲?/h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  ?뚯궗?뚭컻
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  ?쒕퉬??                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  ?ы듃?대━??                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                  style={{ fontSize: "0.875rem" }}
                >
                  臾몄쓽
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="mb-4" style={{ fontWeight: 600 }}>?곕씫泥?/h4>
            <ul className="space-y-2 mb-4">
              <li className="text-[#E9ECEF]" style={{ fontSize: "0.875rem" }}>
                ?대찓?? sulabstore@naver.com
              </li>
              <li className="text-[#E9ECEF]" style={{ fontSize: "0.875rem" }}>
                二쇱냼: ?쒖슱?밸퀎??(?낅뜲?댄듃 ?덉젙)
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
              짤 2025 SULAB. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                style={{ fontSize: "0.875rem" }}
              >
                ?댁슜?쎄?
              </a>
              <a
                href="#"
                className="text-[#E9ECEF] hover:text-[#00ADB5] transition-colors"
                style={{ fontSize: "0.875rem" }}
              >
                媛쒖씤?뺣낫泥섎━諛⑹묠
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


