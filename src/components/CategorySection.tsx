'use client';

const categories = [
  { label: '웹 · 앱 개발', description: '서비스 개발, 유지 보수, 리뉴얼 프로젝트를 빠르게 진행하세요.' },
  { label: '퍼블리싱 · 디자인', description: 'UI/UX 개선과 반응형 웹 구축까지 원스톱으로 지원합니다.' },
  { label: '커머스 · 플랫폼', description: '마켓플레이스, 예약 시스템 등 비즈니스 플랫폼을 구축합니다.' },
  { label: '브랜딩 · 마케팅', description: '콘텐츠 제작, 퍼포먼스 마케팅 등 성장 전략을 함께 설계합니다.' },
];

const CategorySection = () => {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            비즈니스에 필요한 모든 IT 프로젝트를 진행할 수 있어요
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            프로젝트 성격과 예산, 일정에 맞는 최적의 전문가 풀을 추천드립니다.
          </p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.label}
              className="rounded-3xl border border-slate-100 bg-slate-50 p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold text-slate-900">{category.label}</h3>
              <p className="mt-3 text-sm text-slate-600">{category.description}</p>
              <button className="mt-4 text-sm font-semibold text-sky-600 transition hover:text-sky-700">
                프로젝트 살펴보기 →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
