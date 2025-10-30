const heroMetrics = [
  { label: "도입 기업", value: "120+" },
  { label: "업무 생산성 향상", value: "38%", sub: "평균 절감 시간" },
  { label: "연동 시스템", value: "40+" },
];

const HeroSection = () => {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.35),_transparent_70%)] blur-3xl" />
        <div className="absolute inset-y-0 right-[-10%] w-2/3 bg-[radial-gradient(circle_at_center,_rgba(99,102,241,0.35),_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-xl space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-sky-200">
            SULAB COPILOT
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            생성형 AI로 업무와 마케팅을 동시에 혁신하세요
          </h1>
          <p className="text-base text-slate-200 sm:text-lg">
            SULAB 코파일럿은 검색 데이터와 콘텐츠 제작, 협업 워크플로우를 하나로 묶어 업무 효율을 높이는
            기업용 생성형 AI 플랫폼입니다. 기획부터 실행, 리포팅까지 1주일 안에 반복 가능한 성과를 만들어 보세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
            >
              데모 상담 신청
            </a>
            <a
              href="#workflow"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
            >
              기능 살펴보기
            </a>
          </div>
        </div>

        <div className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Copilot Briefing</h2>
              <span className="rounded-full border border-slate-500 px-3 py-1 text-xs uppercase tracking-widest text-slate-200">
                실시간 대시보드
              </span>
            </div>
            <div className="grid gap-4 text-sm text-slate-100">
              <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                “카페 프랜차이즈 창업 키워드에서 구독자 성장률이 높은 채널을 분석하고, 주요 콘텐츠 패턴을 요약해줘.”
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
                  <p className="font-semibold uppercase tracking-widest text-sky-200">추천 액션</p>
                  <ul className="mt-2 space-y-1">
                    <li>• 숏폼 스크립트 3종 생성</li>
                    <li>• 랜딩 페이지 카피 생성</li>
                    <li>• KPI 리포트 내보내기</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-200">
                  <p className="font-semibold uppercase tracking-widest text-sky-200">핵심 기회</p>
                  <ul className="mt-2 space-y-1">
                    <li>• 검색량 전주 대비 +32%</li>
                    <li>• 구독 전환률 상위 15%</li>
                    <li>• 45초 지점 재시청 1.6배</li>
                  </ul>
                </div>
              </div>
              <div className="rounded-2xl bg-sky-500/10 px-4 py-3 text-xs text-sky-100">
                코파일럿 인사이트: “듀얼 카메라와 나레이션을 결합한 영상이 시청 지속시간을 크게 올리고 있습니다.
                다음 콘텐츠 기획에 반영해 보세요.”
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-10 sm:grid-cols-3">
          {heroMetrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center shadow-inner shadow-sky-500/10"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-200">
                {metric.label}
              </p>
              <p className="mt-2 text-2xl font-bold text-white">{metric.value}</p>
              {metric.sub && (
                <p className="text-xs text-slate-300">{metric.sub}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
