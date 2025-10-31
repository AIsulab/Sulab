import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/abf9816ebaecbe448905f80cd9fb228c25413530.png";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group"
          >
            <img
              src={logo}
              alt="SULAB"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
              style={{ fontWeight: 500 }}
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("ai-search")}
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
              style={{ fontWeight: 500 }}
            >
              AI 검색
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
              style={{ fontWeight: 500 }}
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-gray-700 hover:text-[#2563EB] transition-colors"
              style={{ fontWeight: 500 }}
            >
              진행과정
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-all hover:shadow-lg"
              style={{ fontWeight: 600 }}
            >
              문의하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("ai-search")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              AI 검색
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              진행과정
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-6 py-2.5 bg-[#2563EB] text-white rounded-lg hover:bg-[#1d4ed8] transition-all text-center"
              style={{ fontWeight: 600 }}
            >
              문의하기
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
