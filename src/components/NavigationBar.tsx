const NAV_ITEMS = [
  { label: "서비스 소개", href: "#services" },
  { label: "프로젝트 의뢰", href: "#matching" },
  { label: "비즈니스 사례", href: "#cases" },
  { label: "전문가 소개", href: "#experts" },
  { label: "고객센터", href: "#support" },
];

const NavigationBar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="border-b border-slate-100 bg-sky-50/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-xs text-slate-600">
          <span>IT 프로젝트, 쉽고 빠르게 매칭하세요.</span>
          <span className="font-medium text-sky-600">상담 02-0000-0000</span>
        </div>
      </div>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="text-lg font-bold text-sky-600">
          Wishket Studio
        </a>
        <nav className="hidden items-center gap-8 text-sm text-slate-600 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-sky-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#login"
            className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-600 md:inline-flex"
          >
            로그인
          </a>
          <a
            href="#start"
            className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-sky-600"
          >
            프로젝트 등록
          </a>
        </div>
      </div>
    </header>
  );
};

export default NavigationBar;
