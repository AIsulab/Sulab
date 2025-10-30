const videos = [
  {
    title: "SULAB 코파일럿 실사용기 공개",
    description: "오프라인 매장을 운영하는 프랜차이즈 본사가 어떻게 AI로 캠페인을 설계하고 실행했는지 확인해보세요.",
    duration: "3분 28초",
    thumbnail:
      "https://images.unsplash.com/photo-1590608897129-79da98d159d9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "CES 2025 발표: AI 워크플로우의 미래",
    description: "SULAB 제품 총괄이 소개하는 차세대 업무 경험과 새로운 연동 시나리오를 만나보세요.",
    duration: "2분 45초",
    thumbnail:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  },
];

const VideoShowcaseSection = () => {
  return (
    <section className="bg-slate-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
              Copilot Stories
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              영상으로 보는 도입 효과
            </h2>
          </div>
          <a
            href="#resources"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-white/40 hover:text-white"
          >
            전체 영상 보기
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <article
              key={video.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 space-y-3 p-6">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-sky-200">
                  {video.duration}
                </span>
                <h3 className="text-xl font-semibold">{video.title}</h3>
                <p className="text-sm text-slate-200">{video.description}</p>
              </div>
              <span className="absolute left-6 top-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur transition group-hover:bg-sky-500/90">
                ▶
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcaseSection;
