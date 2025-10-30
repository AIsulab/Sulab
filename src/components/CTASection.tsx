'use client';

const CTASection = () => {
  return (
    <section id="start" className="bg-sky-900 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold">지금 바로 프로젝트 상담을 시작해 보세요</h2>
          <p className="text-sm text-slate-200">
            프로젝트 등록부터 매칭, 계약, 결제 관리까지 SULAB 매니저가 함께합니다.
          </p>
        </div>
        <div className="rounded-3xl bg-white/10 px-6 py-6 shadow-lg shadow-sky-900/30 backdrop-blur">
          <form className="flex flex-col gap-3">
            <input
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200/40"
              placeholder="회사명 또는 담당자명"
            />
            <input
              className="rounded-xl border border-white/30 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:border-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-200/40"
              placeholder="이메일 또는 연락처"
            />
            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              상담 요청하기
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
