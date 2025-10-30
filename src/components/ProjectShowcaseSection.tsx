'use client';

const projects = [
  {
    title: '모빌리티 스타트업 서비스 고도화',
    description: '앱 개선과 통합 백오피스 구축으로 12주 만에 신규 서비스 출시를 지원했습니다.',
  },
  {
    title: '대기업 사내 포털 리뉴얼',
    description: 'UI/UX 개선과 접근성 강화를 통해 반응형 사내 포털을 재구축했습니다.',
  },
  {
    title: '커머스 자동화 프로젝트',
    description: 'OMS·WMS 연동으로 반복 업무를 자동화하여 운영 효율을 40% 개선했습니다.',
  },
];

const ProjectShowcaseSection = () => {
  return (
    <section id="cases" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
              Success Story
            </span>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              SULAB과 함께한 성공적인 프로젝트를 확인해 보세요
            </h2>
          </div>
          <a
            href="#start"
            className="inline-flex w-fit items-center justify-center rounded-full border border-sky-300 px-4 py-2 text-sm font-semibold text-sky-600 transition hover:bg-sky-100"
          >
            더 많은 사례 보기
          </a>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-500">PROJECT</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">{project.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{project.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcaseSection;
