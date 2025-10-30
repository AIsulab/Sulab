const plans = [
  {
    name: "비즈니스",
    price: "₩990,000",
    period: "월 구독 (VAT 별도)",
    description: "3개 이하 조직에서 빠르게 파일럿을 진행하고 싶은 팀을 위한 플랜입니다.",
    highlights: [
      "워크스페이스 10개 제공",
      "일간 AI 인사이트 리포트",
      "월 30건 콘텐츠 자동 생성",
      "Slack · Notion 기본 연동",
      "24시간 이내 이메일 지원",
    ],
  },
  {
    name: "엔터프라이즈",
    price: "맞춤 견적",
    period: "연 단위 계약",
    description: "전사 도입과 보안 요건, 전담 지원이 필요한 대규모 조직을 위한 플랜입니다.",
    highlights: [
      "무제한 워크스페이스 & 사용자",
      "전용 클라우드/온프레미스 구축",
      "고급 자동화 및 API 연동",
      "전담 Customer Success 엔지니어",
      "온·오프라인 교육 및 워크숍",
    ],
    featured: true,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="space-y-3 text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Pricing
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            성장 단계에 맞는 유연한 요금제
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-600 sm:text-base">
            모든 요금제는 보안 인프라와 거버넌스, SULAB 전문가의 온보딩을 포함합니다. 조직 규모와 요구사항에 맞춰 확장하세요.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`flex h-full flex-col gap-6 rounded-3xl border p-6 shadow-sm ${
                plan.featured
                  ? "border-sky-500 bg-slate-950 text-white shadow-xl shadow-sky-500/20"
                  : "border-slate-200 bg-white"
              }`}
            >
              <div>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${
                    plan.featured
                      ? "bg-white/10 text-sky-200"
                      : "bg-sky-100 text-sky-600"
                  }`}
                >
                  {plan.name}
                </span>
                <p
                  className={`mt-4 text-sm font-medium ${
                    plan.featured ? "text-slate-200" : "text-slate-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>
              <div>
                <p className={`text-4xl font-bold ${plan.featured ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </p>
                <p
                  className={`text-xs uppercase tracking-widest ${
                    plan.featured ? "text-slate-300" : "text-slate-500"
                  }`}
                >
                  {plan.period}
                </p>
              </div>
              <ul className="space-y-3 text-sm">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className={`mt-1 h-2 w-2 rounded-full ${plan.featured ? "bg-sky-300" : "bg-sky-500"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-auto inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.featured
                    ? "bg-sky-500 text-white hover:bg-sky-400"
                    : "border border-slate-300 text-slate-900 hover:border-slate-400"
                }`}
              >
                {plan.featured ? "엔터프라이즈 상담" : "비즈니스 플랜 시작"}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
