const SOLUTIONS = [
  {
    title: "AI Keyword Web Build",
    description:
      "Transform search intent into landing pages that convert. We design architecture, write copy, and wire flows with SEO baked in.",
    badge: "3x search-to-lead lift",
  },
  {
    title: "AI Marketing Automation",
    description:
      "Connect customer data with messaging engines. Automate nurture sequences, A/B tests, and reporting without added headcount.",
    badge: "42% media efficiency",
  },
  {
    title: "AI Content Production",
    description:
      "Generate scripts, Shorts, thumbnails, and variations in weeks not months. Our creative pipeline blends AI with human editing.",
    badge: "60% faster delivery",
  },
  {
    title: "Performance Analytics",
    description:
      "Always-on dashboards track awareness, engagement, and conversion metrics. Align stakeholders with weekly growth rituals.",
    badge: "Realtime visibility",
  },
];

export const SolutionSection = () => {
  return (
    <section id="solutions" className="bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-sky-600">
            Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            AI marketing solutions designed for speed
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            From data discovery to creative automation and performance measurement, each service is built to shorten
            feedback loops while keeping teams aligned.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.title}
              className="group flex flex-col gap-4 rounded-3xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-200 hover:bg-white hover:shadow-lg"
            >
              <span className="inline-flex w-max items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600">
                {solution.badge}
              </span>
              <h3 className="text-xl font-semibold text-slate-900">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{solution.description}</p>
              <a
                href="#consult"
                className="text-sm font-semibold text-sky-600 transition hover:text-sky-700"
              >
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
