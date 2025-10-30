const partners = [
  "NAVER",
  "KAKAO",
  "CJ",
  "LOTTE",
  "HYBE",
  "LINE",
  "BAEMIN",
  "YANOLJA",
];

const PartnersSection = () => {
  return (
    <section id="experts" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
          Partners
        </span>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          위시켓과 함께 성장하는 고객사
        </h2>
        <div className="mt-8 grid grid-cols-2 gap-4 text-slate-500 sm:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-6 text-sm font-semibold"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
