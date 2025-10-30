const NAV_LINKS = [
  { href: "#overview", label: "브리티 코파일럿" },
  { href: "#advantages", label: "핵심 특징" },
  { href: "#success", label: "도입 사례" },
  { href: "#pricing", label: "요금제" },
  { href: "#resources", label: "자료실" },
  { href: "#faq", label: "FAQ" },
];

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/90 text-white backdrop-blur">
      <div className="border-b border-white/10 bg-gradient-to-r from-sky-500/20 via-transparent to-indigo-500/20">
        <div className="mx-auto flex h-10 max-w-6xl items-center justify-between px-6 text-[13px] text-slate-200">
          <span>AI로 완성하는 업무 혁신, SULAB 코파일럿</span>
          <a
            href="#resources"
            className="inline-flex items-center gap-2 font-medium text-sky-200 hover:text-sky-100"
          >
            최신 백서 다운로드 →
          </a>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#overview" className="flex items-center gap-3 font-semibold tracking-[0.25em]">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-lg text-white">
            S
          </span>
          SULAB COPILOT
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/search"
            className="hidden rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-white/40 hover:text-white md:inline-flex"
          >
            실시간 분석 체험
          </a>
          <a
            href="#contact"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-400"
          >
            상담 신청
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
