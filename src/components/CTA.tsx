const scrollToContact = () => {
  const node = document.getElementById("contact");
  if (node) {
    node.scrollIntoView({ behavior: "smooth" });
  }
};

export function CTA() {
  return (
    <section id="cta" className="section-padding relative overflow-hidden bg-dark text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.35),_transparent_55%)]" />
      <div className="relative section-container flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">지금 바로 상담을 시작해 보세요.</h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
            목표와 상황을 공유해 주시면 24시간 이내에 전문 컨설턴트가 맞춤 제안을 드립니다.
          </p>
        </div>
        <button
          type="button"
          aria-label="문의 폼으로 이동"
          onClick={scrollToContact}
          className="cursor-pointer rounded-full bg-cta-gradient px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform hover:scale-[1.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          문의 남기기
        </button>
      </div>
    </section>
  );
}
