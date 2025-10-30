import { Logo } from "@/components/Logo";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = [
  { id: "services", label: "서비스" },
  { id: "ai-search", label: "AI 검색" },
  { id: "portfolio", label: "포트폴리오" },
  { id: "process", label: "진행과정" },
  { id: "contact", label: "문의" }
];

const scrollToSection = (sectionId: string) => {
  const node = document.getElementById(sectionId);

  if (node) {
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Header() {
  return (
    <header className="sticky inset-x-0 top-0 z-30 bg-white/80 backdrop-blur shadow-sm dark:bg-dark/80">
      <div className="section-container flex items-center justify-between py-4 text-dark dark:text-slate-100 lg:py-5">
        <button
          type="button"
          aria-label="홈 섹션으로 이동"
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-3 text-lg font-semibold text-dark transition hover:opacity-90 dark:text-white"
        >
          <Logo size={40} className="h-9 w-auto" priority />
          <span className="text-xl font-semibold tracking-tight">SULAB</span>
        </button>

        <nav className="hidden items-center gap-8 text-sm font-medium text-gray dark:text-slate-300 md:flex">
          {sections.map((section) => (
            <button
              key={section.id}
              type="button"
              aria-label={`${section.label} 섹션으로 이동`}
              onClick={() => scrollToSection(section.id)}
              className="cursor-pointer transition hover:text-primary dark:hover:text-primary"
            >
              {section.label}
            </button>
          ))}
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
