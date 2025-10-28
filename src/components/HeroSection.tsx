import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(2,132,199,0.35),_transparent_55%)]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-[radial-gradient(circle_at_center,_rgba(8,145,178,0.18),_transparent_60%)] blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium ring-1 ring-white/20 backdrop-blur">
          {"\u0041\u0049\u0020\ub9c8\ucf00\ud305\u0020\uc804\ubb38\u0020\uc5f0\uad6c\uc18c\u0020\u0053\u0055\u004c\u0041\u0042"}
        </span>
        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          {"\u0041\u0049\ub85c\u0020\ub9cc\ub4dc\ub294\u0020\ub9c8\ucf00\ud305\uc758\u0020\uubbf8\ub798"}
        </h1>
        <p className="mt-6 text-base text-sky-100 sm:text-lg md:text-xl">
          {"\ub370\uc774\ud130\u0020\uc778\uc0ac\uc774\ud2b8\ubd80\ud130\u0020\ucf58\ud150\uce20\u0020\uc804\ub7b5\uae4c\uc9c0\u002c\u0020\uc778\uacf5\uc9c0\ub2a5\uc73c\ub85c\u0020\ube0c\ub79c\ub4dc\uc758\u0020\uacbd\uc7c1\ub825\uc744\u0020\ud655\uc7a5\ud558\uc138\uc694\u002e\u0020\uc2e4\uc2dc\uac04\u0020\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\ub85c\u0020\ube60\ub974\uac8c\u0020\uc2dc\uc7a5\u0020\uae30\ud68c\ub97c\u0020\ud3ec\ucc29\ud560\u0020\uc218\u0020\uc788\uc2b5\ub2c8\ub2e4\u002e"}
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/search"
            className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl px-8 py-3 shadow-lg shadow-sky-500/30 transition"
          >
            {"\uac80\uc0c9\u0020\ud398\uc774\uc9c0\ub85c\u0020\uc774\ub3d9"}
          </Link>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-3 font-semibold text-slate-900 bg-white hover:bg-slate-100 transition"
          >
            {"\u0053\u0055\u004c\u0041\u0042\u0020\uc194\ub8e8\uc158\u0020\uc0b4\ud3b4\ubcf4\uae30"}
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
