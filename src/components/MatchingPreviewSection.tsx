const MatchingPreviewSection = () => {
  return (
    <section id="matching" className="bg-sky-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              프로젝트 등록 후 매칭까지 딱 3단계
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              상담 요청서를 작성하면 24시간 이내에 담당 매니저가 프로젝트를 정리하고 전문가 후보를 추천드립니다.
            </p>
          </div>
          <a
            href="#start"
            className="hidden rounded-full border border-sky-300 px-4 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-100 md:inline-flex"
          >
            프로젝트 등록하기
          </a>
        </div>
        <div className="rounded-3xl border border-sky-100 bg-white p-6 shadow-xl shadow-sky-100">
          <ol className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "01 상담 요청",
                description: "프로젝트 요건과 예산, 일정 정보를 남겨주세요.",
              },
              {
                title: "02 전문가 추천",
                description: "검증된 전문가 프로필을 비교하고 인터뷰를 진행하세요.",
              },
              {
                title: "03 계약 및 시작",
                description: "위시켓 매니저가 계약, 일정, 비용 관리를 함께합니다.",
              },
            ].map((step) => (
              <li key={step.title} className="space-y-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                  {step.title.split(" ")[0]}
                </span>
                <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default MatchingPreviewSection;
