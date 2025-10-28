const SOLUTIONS = [
  {
    tag: "Insight",
    title: "\u0041\u0049\u0020\uc778\uc0ac\uc774\ud2b8\u0020\uc5d4\uc9c4",
    description:
      "\uc2e4\uc2dc\uac04\u0020\uc2dc\uc7a5\u0020\ub370\uc774\ud130\uc640\u0020\uc720\ud29c\ube0c\u0020\ud2b8\ub80c\ub4dc\ub97c\u0020\ubd84\uc11d\ud574\u0020\ucd5c\uc801\uc758\u0020\ucf58\ud150\uce20\u0020\ud0c0\uc774\ubc0d\uacfc\u0020\ud3ec\ub9f7\uc744\u0020\uc81c\uc548\ud569\ub2c8\ub2e4\u002e",
  },
  {
    tag: "Automation",
    title: "\ud06c\ub9ac\uc5d0\uc774\ud2f0\ube0c\u0020\uc624\ud1a0\uba54\uc774\uc158",
    description:
      "\ube0c\ub79c\ub4dc\u0020\ub9de\ucda4\u0020\uc2a4\ud06c\ub9bd\ud2b8\u002c\u0020\uc378\ub124\uc77c\u0020\ud0a4\uc6cc\ub4dc\u002c\u0020\uc20f\ud3fc\u0020\uae30\ud68d\uc548\uc744\u0020\uc790\ub3d9\u0020\uc0dd\uc131\ud558\uc5ec\u0020\uc81c\uc791\u0020\ub9ac\uc18c\uc2a4\ub97c\u0020\uc904\uc785\ub2c8\ub2e4\u002e",
  },
  {
    tag: "Growth",
    title: "\uc131\uacfc\u0020\uae30\ubc18\u0020\uc131\uc7a5\u0020\uad00\ub9ac",
    description:
      "\ucea0\ud398\uc778\u0020\ub9ac\ud3ec\ud2b8\uc640\u0020\ub300\uc2dc\ubcf4\ub4dc\ub85c\u0020\uad6c\ub3c5\uc790\u002c\u0020\uc870\ud68c\uc218\u002c\u0020\ucc38\uc5ec\uc728\u0020\ubcc0\ud654\ub97c\u0020\ucd94\uc801\ud558\uba70\u0020\uc131\uc7a5\u0020\uc804\ub7b5\uc744\u0020\uace0\ub3c4\ud654\ud569\ub2c8\ub2e4\u002e",
  },
];

export const SolutionSection = () => {
  return (
    <section
      id="solutions"
      className="bg-slate-950/60 text-white border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            {"\u0053\u0055\u004c\u0041\u0042\u0020\uc194\ub8e8\uc158\uc73c\ub85c\u0020\ube60\ub974\uac8c\u0020\uac80\uc99d\ud558\uc138\uc694"}
          </h2>
          <p className="mt-4 text-slate-300">
            {"\ub9c8\ucf00\ud305\u0020\ud37c\ub110\uc758\u0020\ud0d0\uc0c9\ubd80\ud130\u0020\uc2e4\ud589\uae4c\uc9c0\u002c\u0020\uc804\ubb38\uac00\u0020\ud300\uacfc\u0020\u0041\u0049\u0020\uae30\uc220\uc774\u0020\ud568\uaed8\u0020\uc6c0\uc9c1\uc785\ub2c8\ub2e4\u002e\u0020\uc720\uc800\u0020\ubc18\uc751\uc744\u0020\ud1a0\ub300\ub85c\u0020\ube60\ub974\uac8c\u0020\uac00\uc124\uc744\u0020\uac80\uc99d\ud558\uace0\u0020\ub2e4\uc74c\u0020\uc561\uc158\uc744\u0020\uc81c\uc2dc\ud569\ub2c8\ub2e4\u002e"}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {SOLUTIONS.map((solution) => (
            <article
              key={solution.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-sky-500/60 hover:bg-sky-500/10 hover:shadow-lg"
            >
              <span className="inline-flex items-center rounded-full border border-sky-400/50 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-200">
                {solution.tag}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{solution.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                {solution.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
