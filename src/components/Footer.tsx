import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-white">SULAB</h3>
          <p className="text-sm text-slate-400">
            {"\u0041\u0049\u0020\ub9c8\ucf00\ud305\u0020\uc804\ub7b5\u0020\uc5f0\uad6c\uc18c\u002e\u0020\ub370\uc774\ud130\uc640\u0020\ud06c\ub9ac\uc5d0\uc774\ud2f0\ube0c\ub85c\u0020\ube0c\ub79c\ub4dc\uc758\u0020\uc9c0\uc18d\u0020\uac00\ub2a5\ud55c\u0020\uc131\uc7a5\uc744\u0020\uc124\uacc4\ud569\ub2c8\ub2e4\u002e"}
          </p>
          <div className="text-xs text-slate-500">
            {"\u00a9"} {new Date().getFullYear()} SULAB. All rights reserved.
          </div>
        </div>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link
            href="/search"
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-xl px-5 py-2 transition"
          >
            {"\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\u0020\uac80\uc0c9"}
          </Link>
          <a
            href="mailto:hello@sulab.ai"
            className="rounded-xl border border-sky-400/40 px-5 py-2 font-semibold text-sky-200 hover:border-sky-400 hover:text-white transition"
          >
            {"\ud504\ub85c\uc81d\ud2b8\u0020\ubb38\uc758"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
