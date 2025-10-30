import { useState } from "react";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-[#1C6DF2] to-[#00BFA5] rounded-xl flex items-center justify-center">
              <span className="text-white" style={{ fontWeight: 700 }}>S</span>
            </div>
            <span className="text-[#0A2540]" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
              SULAB
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#0A2540] hover:text-[#1C6DF2] transition-colors"
              style={{ fontWeight: 500 }}
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#0A2540] hover:text-[#1C6DF2] transition-colors"
              style={{ fontWeight: 500 }}
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-[#0A2540] hover:text-[#1C6DF2] transition-colors"
              style={{ fontWeight: 500 }}
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-[#0A2540] hover:text-[#1C6DF2] transition-colors"
              style={{ fontWeight: 500 }}
            >
              진행과정
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-[#1C6DF2] text-white rounded-full hover:bg-[#1557c7] transition-all hover:scale-105"
              style={{ fontWeight: 600 }}
            >
              문의하기
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-[#0A2540]"
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
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-[#0A2540] hover:bg-[#F9FBFD] rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              소개
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-[#0A2540] hover:bg-[#F9FBFD] rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-2 text-[#0A2540] hover:bg-[#F9FBFD] rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-4 py-2 text-[#0A2540] hover:bg-[#F9FBFD] rounded-lg transition-colors"
              style={{ fontWeight: 500 }}
            >
              진행과정
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full px-6 py-2.5 bg-[#1C6DF2] text-white rounded-full hover:bg-[#1557c7] transition-all text-center"
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
