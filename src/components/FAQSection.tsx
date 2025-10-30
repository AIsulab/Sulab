const faqs = [
  {
    question: "SULAB 코파일럿은 기업 데이터를 어떻게 보호하나요?",
    answer:
      "코파일럿은 국내·해외 리전에 선택적으로 구축 가능한 전용 클라우드 환경을 제공합니다. SSO, 역할 기반 접근 제어, 암호화, 사용 로그까지 지원해 보안 요구사항을 충족합니다.",
  },
  {
    question: "기존 데이터/분석 시스템과 연동이 가능한가요?",
    answer:
      "GA4, BigQuery, Snowflake, Tableau 등 주요 BI 도구와 API 연결을 지원합니다. 사내 시스템 연동을 위한 웹훅과 REST API도 제공됩니다.",
  },
  {
    question: "도입 시 어떤 온보딩 지원을 받을 수 있나요?",
    answer:
      "비즈니스 플랜에는 4주 온보딩과 라이브 트레이닝이 포함되며, 엔터프라이즈 플랜은 전담 성공 매니저와 분기별 워크숍을 추가 제공합니다.",
  },
  {
    question: "콘텐츠 제작까지 함께 운영해 주나요?",
    answer:
      "원하시는 경우 SULAB 제작팀이 스크립트, 촬영, 편집, 번역까지 담당하거나 내부팀과 협업하는 모델을 제공합니다.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            자주 묻는 질문
          </h2>
        </div>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-sm font-semibold text-slate-900">
                {faq.question}
                <span className="text-lg text-sky-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
