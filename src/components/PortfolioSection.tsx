const CASE_STUDIES = [
  {
    category: "\ud504\ub79c\ucc28\uc774\uc988\u0020\ub7f0\uce6d",
    client: "\ube0c\ub79c\ub4dc\u0020\u0041",
    metric: "\uad6c\ub3c5\uc790\u0020\u0034\u0032\u0030\u0025\u0020\uc131\uc7a5",
    result:
      "\ube0c\ub79c\ub4dc\u0020\uc2a4\ud1a0\ub9ac\ud154\ub9c1\uacfc\u0020\uc20f\ud3fc\u0020\uc2dc\ub9ac\uc988\ub97c\u0020\ubcd1\ud589\ud558\uc5ec\u0020\u0036\uc8fc\u0020\ub9cc\uc5d0\u0020\ucd08\uae30\u0020\uad6c\ub3c5\uc790\u0020\u0031\ub9cc\u0020\uba85\uc744\u0020\ub3cc\ud30c\ud588\uc2b5\ub2c8\ub2e4\u002e",
  },
  {
    category: "\uc804\ud658\u0020\ucea0\ud398\uc778",
    client: "\uc774\ucee4\uba38\uc2a4\u0020\u0044\u0032\u0043",
    metric: "\u0052\u004f\u0041\u0053\u0020\u0033\u002e\u0035\ubc30\u0020\uac1c\uc120",
    result:
      "\uac80\uc0c9\u0020\uc758\ub3c4\uc5d0\u0020\ub9de\ub294\u0020\ucf58\ud150\uce20\uc640\u0020\ub79c\ub529\u0020\ucd5c\uc801\ud654\ub97c\u0020\ud1b5\ud574\u0020\uad11\uace0\u0020\uc758\uc874\ub3c4\ub97c\u0020\ub0ae\ucd94\uace0\u0020\uc790\uc0dd\u0020\ucc44\ub110\uc744\u0020\uad6c\ucd95\ud588\uc2b5\ub2c8\ub2e4\u002e",
  },
  {
    category: "\ucf58\ud150\uce20\u0020\ub9ac\ub274\uc5bc",
    client: "\ud504\ub85c\ub355\ud2b8\u0020\u0053\u0061\u0061\u0053",
    metric: "\ub9ac\ub4dc\u0020\uc804\ud658\u0020\u0036\u0038\u0025\u0020\uc99d\uac00",
    result:
      "\ud29c\ud1a0\ub9ac\uc5bc\u0020\uae30\ubc18\u0020\uc601\uc0c1\uacfc\u0020\uc6e8\ube44\ub098\u0020\ud074\ub9bd\uc744\u0020\uc7ac\uac00\uacf5\ud558\uc5ec\u0020\uc720\uc785\u0020\ub300\ube44\u0020\ub9ac\ub4dc\u0020\ud68d\ub4dd\ub960\uc744\u0020\ud070\u0020\ud3ed\uc73c\ub85c\u0020\uac1c\uc120\ud588\uc2b5\ub2c8\ub2e4\u002e",
  },
];

export const PortfolioSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="flex flex-col gap-4 text-center">
          <span className="text-sm font-semibold text-sky-500">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {"\uc2e4\ud5d8\uc73c\ub85c\u0020\uac80\uc99d\ud55c\u0020\uc131\uc7a5\u0020\uc0ac\ub840"}
          </h2>
          <p className="text-base text-slate-600">
            {"\uc2e4\ud5d8\u0020\uc124\uacc4\ubd80\ud130\u0020\ud06c\ub9ac\uc5d0\uc774\ud2f0\ube0c\u0020\uc81c\uc791\u002c\u0020\uc131\uacfc\u0020\uce21\uc815\uae4c\uc9c0\u0020\ud300\uc774\u0020\uc9c1\uc811\u0020\uc2e4\ud589\ud558\uba70\u0020\ub9cc\ub4e0\u0020\uacb0\uacfc\uc785\ub2c8\ub2e4\u002e"}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {CASE_STUDIES.map((study) => (
            <article
              key={`${study.client}-${study.metric}`}
              className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {study.category}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-slate-900">
                {study.client}
              </h3>
              <p className="mt-2 text-sm font-semibold text-sky-500">
                {study.metric}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {study.result}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
