const features = [
  {
    title: "도메인 특화 지식 그래프",
    description:
      "업종별로 최적화된 키워드, 시청 패턴, 전환 지표를 AI가 자동 분석합니다. 한 번의 검색으로 경쟁사 대비 성장 기회를 확인하세요.",
    icon: "📊",
  },
  {
    title: "생성형 콘텐츠 자동화",
    description:
      "AI가 영상 스크립트, 숏폼 아이디어, 썸네일 문구를 제안하고 팀 피드백을 반영해 버전 관리를 돕습니다.",
    icon: "✨",
  },
  {
    title: "통합 업무 워크플로우",
    description:
      "Notion, Slack, Jira, Teams와 연동되어 승인·배포·리포트까지 자동화합니다. 템플릿과 체크리스트가 함께 제공됩니다.",
    icon: "🔄",
  },
  {
    title: "엔터프라이즈 보안",
    description:
      "국내외 보안 규정을 충족하는 독립 인프라, 접근 제어, 사용 기록 관리 기능을 통해 데이터를 안전하게 보호합니다.",
    icon: "🔐",
  },
];

const FeatureOverviewSection = () => {
  return (
    <section id="advantages" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Why SULAB Copilot
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            검색부터 제작까지 한 번에 완성되는 AI 업무 동반자
          </h2>
          <p className="mx-auto max-w-3xl text-sm text-slate-600 sm:text-base">
            기획자, 데이터 분석가, 크리에이터가 하나의 공간에서 일합니다. Copilot이 인사이트를 전달하면
            즉시 실행 가능한 액션과 자동화된 보고가 이어집니다.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-3xl">{feature.icon}</span>
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureOverviewSection;
