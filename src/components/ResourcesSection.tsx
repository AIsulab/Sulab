const articles = [
  {
    title: "검색 기반 콘텐츠 스프린트 가이드",
    description:
      "제품 · 마케팅 · 데이터 팀이 2주 주기로 캠페인을 설계하고 실행하는 방법을 실무 예시와 함께 정리했습니다.",
    category: "Playbook",
    href: "#",
  },
  {
    title: "Copilot × Slack · Notion 연동 활용법",
    description:
      "스탠드업, 승인, 산출물 공유를 자동화하는 방법을 단계별로 설명합니다. 템플릿과 커넥터 설정 팁을 포함합니다.",
    category: "Integration",
    href: "#",
  },
  {
    title: "12개 산업군 유튜브 벤치마크 리포트",
    description:
      "시청 유지율, 업로드 주기, CTA 성과 데이터를 비교해 다음 분기의 채널 전략을 세울 수 있도록 도와드립니다.",
    category: "Insight",
    href: "#",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Resources
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              브리티 코파일럿을 더 깊이 알아보세요
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            전문가와 상담하기
          </a>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex h-full flex-col gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                {article.category}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">{article.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {article.description}
              </p>
              <a
                href={article.href}
                className="mt-auto text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                자세히 보기 →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
