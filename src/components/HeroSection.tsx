export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(2,132,199,0.35),_transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.18),_transparent_60%)] blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 backdrop-blur">
          AI 마케팅 전문 연구소 SULAB
        </span>
        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          AI로 만드는 마케팅의 미래
        </h1>
        <p className="mt-6 text-base text-sky-100 sm:text-lg md:text-xl">
          데이터 인사이트부터 콘텐츠 전략까지, 인공지능으로 브랜드의 경쟁력을 확장하세요. 실시간 유튜브 인사이트로 빠르게 시장 기회를 포착할 수 있습니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/search"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl px-8 py-3 shadow-lg shadow-sky-500/30 transition"
          >
            검색 페이지로 이동
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-semibold text-slate-900 bg-white hover:bg-slate-100 transition"
          >
            SULAB 솔루션 살펴보기
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
