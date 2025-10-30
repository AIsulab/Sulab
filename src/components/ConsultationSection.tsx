const ConsultationSection = () => {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-[0.7fr_0.3fr]">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-8 text-white shadow-2xl shadow-slate-900/20">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200">
            상담 신청
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight">
            지금 바로 AI 업무 혁신 로드맵을 만나보세요
          </h2>
          <p className="mt-3 text-sm text-slate-200">
            현재 업무 현황과 목표를 알려주시면 24시간 이내 SULAB 전문가가 맞춤 제안과 데모를 제공합니다.
            파일럿 설계부터 전사 확대 전략까지 함께 고민해 드립니다.
          </p>
          <dl className="mt-8 grid gap-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                01
              </span>
              <div>
                <dt className="font-semibold">현황 공유</dt>
                <dd className="text-slate-300">
                  팀 구조, 목표 고객, 기대하는 KPI 등을 간단히 말씀해주세요.
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                02
              </span>
              <div>
                <dt className="font-semibold">데이터 진단</dt>
                <dd className="text-slate-300">
                  보유 데이터와 현재 워크플로우를 진단하고 빠르게 적용 가능한 시나리오를 제시합니다.
                </dd>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-sm font-semibold text-white">
                03
              </span>
              <div>
                <dt className="font-semibold">실행 로드맵</dt>
                <dd className="text-slate-300">
                  4주 이내 실행 가능한 플랜과 견적, 기대 효과를 정리한 제안서를 전달드립니다.
                </dd>
              </div>
            </div>
          </dl>
          <div className="mt-8 flex flex-col gap-3 text-sm text-slate-200">
            <span>Email: hello@sulab.ai</span>
            <span>Phone: +82 2-123-4567 (월–금 10:00–18:00)</span>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-md">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">
              상담 요청서 작성
            </h3>
            <p className="text-sm text-slate-600">
              아래 정보를 남겨주시면 SULAB 담당자가 빠르게 연락드리겠습니다.
            </p>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="회사/조직명"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
            />
            <input
              type="email"
              placeholder="업무용 이메일"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
            />
            <textarea
              placeholder="현재 과제와 기대 효과를 간단히 적어주세요."
              rows={4}
              className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-600"
            >
              상담 요청하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
