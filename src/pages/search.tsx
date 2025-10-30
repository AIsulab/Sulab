'use client';

import Head from "next/head";

const SearchPage = () => {
  return (
    <>
      <Head>
        <title>검색 도구 준비 중 | SULAB</title>
        <meta
          name="description"
          content="검색 기능은 리뉴얼과 함께 새롭게 제공될 예정입니다."
        />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="mx-auto flex max-w-4xl flex-col items-center px-6 py-32 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            검색 기능 준비 중입니다
          </h1>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            코파일럿 리뉴얼과 함께 더 정교한 검색 분석 기능을 제공할 예정입니다.
            완성되는 대로 안내드릴게요.
          </p>
        </div>
      </main>
    </>
  );
};

export default SearchPage;
