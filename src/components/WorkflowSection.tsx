const steps = [
  {
    title: "데이터 수집",
    description:
      "YouTube Analytics, 검색 콘솔, CRM 데이터를 실시간으로 받아 시청자 의도와 전환 흐름을 파악합니다.",
  },
  {
    title: "콘텐츠 생성 및 승인",
    description:
      "AI가 스크립트, 썸네일, CTA를 제안하고, 팀원들은 코파일럿에서 바로 피드백과 승인을 진행합니다.",
  },
  {
    title: "캠페인 실행",
    description:
      "발행, 광고 집행, 리마케팅 등 반복 업무를 자동화합니다. 필요한 앱과 시스템이 자동으로 연결됩니다.",
  },
  {
    title: "성과 학습",
    description:
      "대시보드가 핵심 지표를 요약하고 다음 실험 방향을 추천합니다. 보고서 작성까지 자동으로 마무리됩니다.",
  },
];

const WorkflowSection = () => {
  return (
    <section id="workflow" className="bg-gradient-to-b from-slate-100 via-white to-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-4">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Seamless Workflow
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            인사이트에서 실행까지 끊김 없는 업무 루프
          </h2>
          <p className="text-sm text-slate-600 sm:text-base">
            Copilot은 마케팅, 데이터, 크리에이티브 팀이 함께 일하는 과정을 설계합니다. 각 단계는 템플릿과 자동화로
            구성되어 업무 속도와 협업 품질을 동시에 높입니다.
          </p>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
            <div className="grid gap-6 md:grid-cols-2">
              {steps.map((step, index) => (
                <div key={step.title} className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-sky-500">
                    STEP {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
          <h3 className="text-lg font-semibold text-slate-900">연동 가능한 업무 환경</h3>
          <p className="mt-2 text-sm text-slate-600">
            기존에 사용하던 협업 도구와 BI 시스템을 그대로 활용하세요. 승인과 공유, 데이터 연동이 자동으로 이어집니다.
          </p>
          <div className="mt-6 grid gap-4 text-sm text-slate-700">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong className="font-semibold text-slate-900">콘텐츠 제작</strong> · Figma · Adobe CC · Canva · Notion
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong className="font-semibold text-slate-900">업무 자동화</strong> · Slack · Microsoft Teams · Jira · Trello
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <strong className="font-semibold text-slate-900">데이터 분석</strong> · GA4 · BigQuery · Looker Studio · Tableau
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
