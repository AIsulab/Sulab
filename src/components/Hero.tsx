import { useCallback } from "react";

const stats = [
  { label: "완료 프로젝트", value: "100+" },
  { label: "고객 만족도", value: "98%" },
  { label: "응답 시간", value: "24h" },
  { label: "업력", value: "5년" }
];

const scrollToSection = (sectionId: string) => {
  const node = document.getElementById(sectionId);

  if (node) {
    node.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export function Hero() {
  const handleScroll = useCallback((target: string) => scrollToSection(target), []);

  return (
    <section
      id="hero"
      className="section-padding relative isolate overflow-hidden bg-gradient-to-br from-white via-slate-50 to-slate-100"
    >
      <div className="section-container flex w-full flex-col-reverse gap-12 md:flex-row md:items-center">
        <div className="w-full md:w-2/3">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
            SULAB PERFORMANCE AGENCY
          </span>
          <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-dark sm:text-4xl lg:text-5xl">
            홈페이지 제작 · 웹디자인 · 광고마케팅, SULAB이 성과로 증명합니다.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray md:text-lg">
            데이터를 기반으로 한 전략 설계부터 디자인, 개발, 마케팅까지. 브랜드의 디지털 여정을
            풀파이프라인으로 지원합니다.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button
              type="button"
              className="btn-primary cursor-pointer"
              aria-label="상담 요청하기 섹션으로 이동"
              onClick={() => handleScroll("contact")}
            >
              상담 요청하기
            </button>
            <button
              type="button"
              className="btn-secondary cursor-pointer"
              aria-label="포트폴리오 섹션으로 이동"
              onClick={() => handleScroll("portfolio")}
            >
              포트폴리오 보기
            </button>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-xl border border-slate-200 bg-white/70 p-4 shadow-sm">
                <dt className="text-sm font-medium text-gray">{item.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-dark">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative w-full md:w-1/3">
          <div className="relative mx-auto h-80 w-full max-w-sm overflow-hidden rounded-3xl border border-primary/10 bg-white shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#2563EB22,_transparent_55%)]" />
            <div className="absolute inset-x-0 top-10 mx-auto flex w-5/6 flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg">
              <p className="text-sm font-medium text-gray">
                통합 마케팅, 어디서부터 시작해야 할지 고민되시나요?
              </p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
                  AI
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">맞춤 전략 리포트</p>
                  <p className="text-xs text-gray">30초 안에 우리 서비스에 맞는 전략을 추천받으세요.</p>
                </div>
              </div>
              <button
                type="button"
                className="btn-primary cursor-pointer text-sm"
                aria-label="맞춤 전략 리포트 상담 섹션 이동"
                onClick={() => handleScroll("ai-search")}
              >
                AI 검색 이용하기
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white" />
    </section>
  );
}
