const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-white"
    >
      <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_60%)] blur-2xl" />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold text-sky-600">
            IT 프로젝트 매칭 플랫폼
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            플랫폼 제작, 쉽고 빠르게 매칭해 드려요
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            10만 개발자와 디자이너, 그리고 1만 기업이 신뢰하는 프로젝트 매칭 서비스입니다.
            원하는 전문 인력을 쉽고 빠르게 찾고, 안전하게 협업하세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-600"
            >
              프로젝트 의뢰하기
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-sky-300 px-6 py-3 text-sm font-semibold text-sky-600 transition hover:bg-sky-50"
            >
              서비스 소개
            </a>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                누적 의뢰
              </dt>
              <dd className="text-2xl font-bold text-slate-900">124,131건</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                파트너 풀
              </dt>
              <dd className="text-2xl font-bold text-slate-900">20,062명</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                만족도
              </dt>
              <dd className="text-2xl font-bold text-slate-900">97%</dd>
            </div>
          </dl>
        </div>
        <div className="relative hidden rounded-3xl border border-sky-100 bg-white p-8 shadow-xl shadow-sky-200/60 lg:block">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-slate-800">
                전문가 추천 카드
              </p>
              <p className="text-xs text-slate-500">
                프로젝트에 맞춰 선별된 전문가 프로필을 확인하고 바로 상담을 시작하세요.
              </p>
            </div>
            <div className="space-y-4">
              {["풀스택 개발자", "UX·UI 디자이너", "PM / 기획자"].map((role) => (
                <div
                  key={role}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-left"
                >
                  <p className="text-sm font-semibold text-slate-900">{role}</p>
                  <p className="text-xs text-slate-500">최근 참여 프로젝트 12건 · 리뷰 평점 4.9/5.0</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-sky-50 px-4 py-3 text-sm text-sky-600">
              24시간 이내에 프로젝트 상담이 가능하도록 매칭을 도와드립니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
