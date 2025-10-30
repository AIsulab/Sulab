const FounderSection = () => {
  return (
    <section id="about" className="bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80"
            alt="SULAB team"
            className="h-72 w-full object-cover"
            loading="lazy"
          />
          <div className="space-y-4 p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-600">
              About SULAB
            </span>
            <h3 className="text-2xl font-bold text-slate-900">SULAB Growth Lab</h3>
            <p className="text-sm leading-relaxed text-slate-600">
              We are an AI-first marketing studio that connects brand stories with search demand. Since 2018,
              our team has built proprietary datasets for YouTube, automated creative production pipelines,
              and shipped repeatable growth systems for startups and enterprises across Asia.
            </p>
            <blockquote className="rounded-2xl bg-slate-900 px-5 py-4 text-sm text-slate-100">
              “We obsess over transforming raw data into creative hypotheses that compound over time.”
            </blockquote>
            <div className="flex flex-wrap gap-4 text-xs text-slate-500">
              <span>Founded: 2018</span>
              <span>Headquarters: Seoul</span>
              <span>Focus: Channel growth, creative automation, search strategy</span>
            </div>
          </div>
        </div>
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-100">
          <h4 className="text-xl font-semibold text-slate-900">
            What sets our growth studio apart
          </h4>
          <ul className="space-y-4 text-sm leading-relaxed text-slate-600">
            <li>
              <strong className="text-slate-900">01. Search-aligned narratives</strong>
              <p>
                We map the customer journey and build keyword clusters that inform scripts, landing pages,
                and paid media targeting in a single workflow.
              </p>
            </li>
            <li>
              <strong className="text-slate-900">02. AI production pipeline</strong>
              <p>
                Script drafts, thumbnails, and captioning are automated so strategists can focus on creative direction
                and iteration speed.
              </p>
            </li>
            <li>
              <strong className="text-slate-900">03. Transparent measurement</strong>
              <p>
                Our dashboards highlight lift across awareness, engagement, and conversion — making weekly planning
                meetings frictionless.
              </p>
            </li>
          </ul>
          <a
            href="#consult"
            className="inline-flex items-center justify-center rounded-xl border border-slate-900 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-900 hover:text-white"
          >
            Explore partnership options
          </a>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
