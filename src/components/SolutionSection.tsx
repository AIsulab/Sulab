const SOLUTIONS = [
  {
    tag: "Insight",
    title: "AI 인사이트 엔진",
    description:
      "실시간 시장 데이터와 유튜브 트렌드를 분석해 최적의 콘텐츠 타이밍과 포맷을 제안합니다.",
  },
  {
    tag: "Automation",
    title: "크리에이티브 오토메이션",
    description:
      "브랜드 맞춤 스크립트, 썸네일 키워드, 숏폼 기획안을 자동 생성하여 제작 리소스를 줄입니다.",
  },
  {
    tag: "Growth",
    title: "성과 기반 성장 관리",
    description:
      "캠페인 리포트와 대시보드로 구독자, 조회수, 참여율 변화를 추적하며 성장 전략을 고도화합니다.",
  },
];

export const SolutionSection = () => {
  return (
    <section
      id="solutions"
      className="bg-slate-950/60 text-white border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            SULAB 솔루션으로 빠르게 검증하세요
          </h2>
          <p className="mt-4 text-slate-300">
            마케팅 퍼널의 탐색부터 실행까지, 전문가 팀과 AI 기술이 함께 움직입니다. 유저 반응을 토대로 빠르게 가설을 검증하고 다음 액션을 제시합니다.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-500/60 hover:bg-sky-500/10 hover:shadow-lg"
            >
              <span className="inline-flex items-center rounded-full border border-sky-400/50 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                {solution.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
