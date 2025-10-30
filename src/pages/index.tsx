import Head from "next/head";
const HomePage = () => {
  return (
    <>
      <Head>
        <title>SULAB | 홈페이지 준비 중</title>
        <meta
          name="description"
          content="새로운 SULAB 홈페이지를 준비하고 있습니다."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
          <span className="rounded-full border border-slate-300 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
            SULAB 홈페이지
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            새로운 웹사이트를 준비 중입니다.
          </h1>
          <p className="mt-6 text-base text-slate-600 sm:text-lg">
            더 나은 경험을 제공하기 위해 메인 페이지를 새롭게 제작하고 있습니다.
            곧 새로워진 SULAB을 만나보세요.
          </p>
          <div className="mt-10 w-full rounded-3xl border border-slate-200 bg-white px-6 py-10 shadow-sm">
            <p className="text-sm text-slate-500">
              리뉴얼 작업이 완료되기 전까지 궁금한 점은{" "}
              <a href="mailto:hello@sulab.ai" className="font-semibold text-sky-600 hover:text-sky-700">
                hello@sulab.ai
              </a>
              로 문의해 주세요.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default HomePage;
