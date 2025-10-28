const CASE_STUDIES = [
  {
    category: "프랜차이즈 런칭",
    client: "브랜드 A",
    metric: "구독자 420% 성장",
    result:
      "브랜드 스토리텔링과 숏폼 시리즈를 병행하여 6주 만에 초기 구독자 1만 명을 돌파했습니다.",
  },
  {
    category: "전환 캠페인",
    client: "이커머스 D2C",
    metric: "ROAS 3.5배 개선",
    result:
      "검색 의도에 맞는 콘텐츠와 랜딩 최적화를 통해 광고 의존도를 낮추고 자생 채널을 구축했습니다.",
  },
  {
    category: "콘텐츠 리뉴얼",
    client: "프로덕트 SaaS",
    metric: "리드 전환 68% 증가",
    result:
      "튜토리얼 기반 영상과 웨비나 클립을 재가공하여 유입 대비 리드 획득률을 큰 폭으로 개선했습니다.",
  },
];

export const PortfolioSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-sm font-semibold text-sky-500">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            실험으로 검증한 성장 사례
          </h2>
          <p className="text-base text-slate-600">
            실험 설계부터 크리에이티브 제작, 성과 측정까지 팀이 직접 실행하며 만든 결과입니다.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={`${study.client}-${study.metric}`}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {study.category}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {study.client}
              </h3>
              <p className="mt-2 text-sm font-semibold text-sky-500">
                {study.metric}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {study.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
