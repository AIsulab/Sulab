'use client';

const heroStats = [
  { label: '누적 의뢰', value: '124,131건' },
  { label: '전문가 풀', value: '20,062명' },
  { label: '파트너 만족도', value: '97%' },
];

const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-sky-100 via-white to-blue-50"
    >
      <div className="pointer-events-none absolute -left-10 top-10 h-64 w-64 rounded-full bg-sky-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-semibold text-sky-600 shadow-sm">
            SULAB PROJECT STUDIO
          </span>
          <h1 className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            플랫폼 제작, SULAB이 쉽고 빠르게 매칭해 드립니다
          </h1>
          <p className="text-base text-slate-600 sm:text-lg">
            10년 이상 축적된 데이터를 기반으로 검증된 개발자, 디자이너, 기획자를 추천합니다.
            프로젝트 기획부터 실행, 유지 보수까지 한 번에 진행해 보세요.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#start"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-sky-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:from-sky-600 hover:to-sky-700"
            >
              프로젝트 의뢰하기
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-sky-300 bg-white px-6 py-3 text-sm font-semibold text-sky-600 transition hover:bg-sky-50"
            >
              서비스 소개
            </a>
          </div>
          <dl className="grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white bg-white/80 p-4 text-left shadow-sm backdrop-blur"
              >
                <dt className="text-xs font-semibold uppercase tracking-widest text-sky-600">
                  {stat.label}
                </dt>
                <dd className="mt-2 text-2xl font-bold text-slate-900">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hidden rounded-3xl border border-sky-100 bg-white p-8 shadow-xl shadow-sky-200/60 lg:block">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-slate-800">실시간 추천 전문가</p>
              <p className="mt-1 text-xs text-slate-500">
                프로젝트에 적합한 전문가 프로필을 즉시 확인하고 상담을 시작하세요.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  role: '풀스택 개발자',
                  details: '최근 5개 앱 서비스 출시 · 리뷰 4.9/5.0',
                },
                {
                  role: 'UX/UI 디자이너',
                  details: '프로토타이핑 · 반응형 웹 전문 · 기업 채널 경험',
                },
                {
                  role: 'PM / 기획자',
                  details: '핀테크 · 커머스 분야 10년 경력 · 고객 인터뷰 전문',
                },
              ].map((profile) => (
                <div
                  key={profile.role}
                  className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3"
                >
                  <h3 className="text-sm font-semibold text-slate-900">{profile.role}</h3>
                  <p className="text-xs text-slate-500">{profile.details}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl bg-sky-50 px-4 py-3 text-xs text-sky-600">
              SULAB 매니저가 프로젝트 기획, 계약, 일정 관리를 모두 도와드립니다.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
