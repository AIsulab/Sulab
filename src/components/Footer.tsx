export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">SULAB</h3>
          <p className="text-sm text-slate-400">
            AI 마케팅 전략 연구소. 데이터와 크리에이티브로 브랜드의 지속 가능한 성장을 설계합니다.
          </p>
          <div className="text-xs text-slate-500">
            {"\u00a9"} {new Date().getFullYear()} SULAB. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="/search"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl px-5 py-2 transition"
          >
            유튜브 인사이트 검색
          </a>
          <a
            href="mailto:hello@sulab.ai"
            className="rounded-xl border border-sky-400/40 px-5 py-2 font-semibold text-sky-200 hover:border-sky-400 hover:text-white transition"
          >
            프로젝트 문의
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
