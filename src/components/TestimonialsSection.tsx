const testimonials = [
  {
    quote:
      "코파일럿 덕분에 캠페인 기획 시간이 절반으로 줄었고, 유튜브 유입 리드는 2.4배 늘었습니다. 매주 리포트를 기다리는 즐거움이 생겼어요.",
    name: "조한나",
    role: "성장총괄, 블루컵 프랜차이즈",
  },
  {
    quote:
      "크리에이티브 팀이 이야기 구성에 집중할 수 있게 되었어요. 반복 작업을 AI가 대신하면서 모든 출시 일정이 가볍고 정확해졌습니다.",
    name: "Miguel Santos",
    role: "Creative Director, Aurora SaaS",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="success" className="bg-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
            Customer Voice
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            SULAB 코파일럿으로 성장하는 조직들
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                “{testimonial.quote}”
              </p>
              <footer className="mt-4 text-sm font-semibold text-slate-900">
                {testimonial.name}
                <span className="block text-xs font-normal text-slate-500">
                  {testimonial.role}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
