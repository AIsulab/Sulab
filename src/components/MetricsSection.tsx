const metrics = [
  { title: "10년 이상 축적된 데이터", description: "누적 의뢰 124,131건 · 매월 2,000건 이상" },
  { title: "전문가 네트워크 20,062명", description: "검증된 개발자 · 디자이너 · 기획자 · QA" },
  { title: "프로젝트 만족도 97%", description: "프로세스와 품질 평가 기반 매칭 시스템" },
];

const MetricsSection = () => {
  return (
    <section className="bg-sky-50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-2xl font-semibold text-slate-900 sm:text-3xl">
          왜 수많은 기업이 위시켓을 선택할까요?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.title}
              className="rounded-3xl border border-sky-100 bg-white p-6 text-center shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{metric.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
