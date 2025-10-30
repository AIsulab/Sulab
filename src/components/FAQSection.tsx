'use client';

const faqs = [
  {
    question: '프로젝트 상담은 어떻게 진행되나요?',
    answer:
      '요청서를 등록하면 24시간 이내에 전문 매니저가 연락을 드려 요구 사항을 정리하고 다음 단계를 안내해 드립니다.',
  },
  {
    question: '전문가는 어떤 방식으로 검증되나요?',
    answer:
      '기술 역량, 프로젝트 리뷰, 인터뷰를 통해 평가 지표를 관리하며 매칭 이후에도 지속적으로 모니터링합니다.',
  },
  {
    question: '계약과 결제는 안전한가요?',
    answer:
      'SULAB은 단계별 대금 보호 시스템을 통해 진척도에 맞춰 대금을 지급하며, 문제가 발생하면 매니저가 중재를 지원합니다.',
  },
];

const FAQSection = () => {
  return (
    <section id="support" className="bg-white py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            FAQ
          </span>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">자주 묻는 질문</h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-slate-50 p-5"
            >
              <summary className="flex cursor-pointer items-center justify-between text-left text-sm font-semibold text-slate-900">
                {faq.question}
                <span className="text-lg text-sky-500 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
