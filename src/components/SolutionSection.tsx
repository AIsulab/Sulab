const serviceHighlights = [
  {
    title: "전담 매니저 배정",
    description: "프로젝트 기획부터 계약, 일정 관리까지 전담 매니저가 함께합니다.",
  },
  {
    title: "검증된 전문가 추천",
    description: "평가 지표와 리뷰 기반으로 프로젝트에 꼭 맞는 전문가를 선별합니다.",
  },
  {
    title: "안전 결제 시스템",
    description: "단계별 대금 보호 프로세스로 안정적인 협업을 지원합니다.",
  },
];

const SolutionSection = () => {
  return (
    <section className="bg-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            위시켓이 제공하는 프로젝트 매칭 서비스
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            프로젝트 성공 확률을 높이는 체계적인 매칭과 관리 시스템을 경험해 보세요.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-sky-100 bg-white p-6 text-left shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
