import { Menu, X } from "lucide-react";
import { useState } from "react";

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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#00ADB5] rounded-lg flex items-center justify-center">
                <span className="text-white" style={{ fontWeight: 700 }}>S</span>
              </div>
              <span className="text-[#14213D]" style={{ fontSize: "1.25rem", fontWeight: 700 }}>SULAB</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-[#333333] hover:text-[#00ADB5] transition-colors"
            >
              회사소개
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-[#333333] hover:text-[#00ADB5] transition-colors"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-[#333333] hover:text-[#00ADB5] transition-colors"
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-[#00ADB5] text-white rounded-lg hover:bg-[#009198] transition-colors"
            >
              문의
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#14213D]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-[#333333] hover:bg-[#E9ECEF] rounded-lg transition-colors"
            >
              회사소개
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-[#333333] hover:bg-[#E9ECEF] rounded-lg transition-colors"
            >
              서비스
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="block w-full text-left px-4 py-2 text-[#333333] hover:bg-[#E9ECEF] rounded-lg transition-colors"
            >
              포트폴리오
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 bg-[#00ADB5] text-white rounded-lg hover:bg-[#009198] transition-colors"
            >
              문의
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

