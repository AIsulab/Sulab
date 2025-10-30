const CASES = [
  {
    client: "글로벌 커피 프랜차이즈",
    metric: "검색 유입 215% 증가",
    summary:
      "매장 확장 시점에 맞춰 검색 키워드와 영상 콘텐츠를 설계해 가맹 문의와 방문 전환율을 동시에 끌어올렸습니다.",
  },
  {
    client: "B2B SaaS 협업툴",
    metric: "리드 전환율 72% 향상",
    summary:
      "튜토리얼 시리즈와 숏폼 콘텐츠, 리타게팅 여정을 결합해 고의향 고객만 세일즈 팀에 전달되도록 자동화했습니다.",
  },
  {
    client: "D2C 뷰티 브랜드",
    metric: "CAC 38% 절감",
    summary:
      "리뷰 콘텐츠를 다국어·멀티 포맷으로 재가공하고 인플루언서 협업을 병행하여 재구매율을 크게 높였습니다.",
  },
  {
    client: "온라인 교육 플랫폼",
    metric: "구독자 1.8배 성장",
    summary:
      "학부모와 수험생을 세분화한 이야기 구조를 적용해 시청 유지율과 구독자 증가 추세를 안정적으로 만들었습니다.",
  },
];

export const PortfolioSection = () => {
  return (
    <section id="portfolio" className="border-t border-slate-100 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-9 px-6 py-16">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            실제 도입 기업의 성장 레퍼런스
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            빠른 실험과 학습 사이클을 만들고 싶은 팀이 코파일럿을 선택했습니다. 데이터로 검증된 사례를 확인해 보세요.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {CASES.map((item) => (
            <article
              key={item.client}
              className="flex h-full flex-col gap-3 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-900">
                  {item.client}
                </h3>
                <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
                  {item.metric}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.summary}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
