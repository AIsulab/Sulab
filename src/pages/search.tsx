'use client';

import Head from "next/head";
import { FormEvent, useMemo, useState } from "react";
import YouTubeCard, { YouTubeVideo } from "../components/YouTubeCard";

const SearchPage = () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY ?? "";
  const [query, setQuery] = useState("");
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const placeholder = useMemo(
    () => "예) 카페 창업 브이로그, 피부과 마케팅, SaaS 온보딩",
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setError("검색어를 입력해 주세요.");
      setVideos([]);
      return;
    }

    if (!apiKey) {
      setError("YouTube API 키가 설정되지 않았습니다. 관리자에게 문의해 주세요.");
      setVideos([]);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const searchParams = new URLSearchParams({
        key: apiKey,
        part: "snippet",
        type: "video",
        maxResults: "15",
        q: trimmedQuery,
      });

      const searchResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/search?${searchParams.toString()}`
      );

      if (!searchResponse.ok) {
        throw new Error("검색 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }

      const searchData = await searchResponse.json();
      const videoIds: string[] = Array.isArray(searchData.items)
        ? searchData.items
            .map((item: any) => item?.id?.videoId)
            .filter((value: unknown): value is string => typeof value === "string")
        : [];

      if (videoIds.length === 0) {
        setVideos([]);
        return;
      }

      const detailParams = new URLSearchParams({
        key: apiKey,
        part: "snippet,statistics",
        id: videoIds.join(","),
      });

      const detailResponse = await fetch(
        `https://www.googleapis.com/youtube/v3/videos?${detailParams.toString()}`
      );

      if (!detailResponse.ok) {
        throw new Error("영상 세부 정보를 불러오지 못했습니다.");
      }

      const detailData = await detailResponse.json();
      const nextVideos: YouTubeVideo[] = Array.isArray(detailData.items)
        ? detailData.items.map((item: any) => ({
            id: item.id,
            title: item.snippet?.title ?? "제목을 불러오지 못했습니다",
            channelTitle:
              item.snippet?.channelTitle ?? "채널 정보를 불러오지 못했습니다",
            viewCount: Number(item.statistics?.viewCount ?? 0),
            publishedAt: item.snippet?.publishedAt ?? new Date().toISOString(),
            thumbnailUrl:
              item.snippet?.thumbnails?.medium?.url ??
              item.snippet?.thumbnails?.high?.url ??
              item.snippet?.thumbnails?.default?.url ??
              "",
            url: `https://www.youtube.com/watch?v=${item.id}`,
          }))
        : [];

      setVideos(nextVideos);
    } catch (fetchError) {
      const message =
        fetchError instanceof Error
          ? fetchError.message
          : "알 수 없는 오류가 발생했습니다. 다시 시도해 주세요.";
      setError(message);
      setVideos([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>유튜브 인사이트 검색 | SULAB 코파일럿</title>
        <meta
          name="description"
          content="검색 키워드와 채널 성과를 즉시 분석하고, 경쟁 전략을 찾을 수 있는 코파일럿 검색 도구입니다."
        />
        <meta property="og:title" content="유튜브 인사이트 검색 | SULAB 코파일럿" />
        <meta
          property="og:description"
          content="시장 수요, 경쟁 채널, 콘텐츠 기회를 한 화면에서 확인하고 CSV로 내보내세요."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">
                Copilot Search
              </span>
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                실시간 유튜브 인사이트 탐색기
              </h1>
              <p className="text-sm text-slate-600 sm:text-base">
                키워드를 입력하면 트렌드 채널, 조회수, 업로드 패턴까지 분석해 드립니다. 결과는 바로 CSV로
                내보내거나 코파일럿 워크스페이스로 공유할 수 있습니다.
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-600"
            >
              메인 페이지로 돌아가기
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">검색어</span>
              <input
                type="text"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  if (error) {
                    setError(null);
                  }
                }}
                placeholder={placeholder}
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-100"
              />
            </label>
            <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={isLoading}
                className="inline-flex w-full items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-sky-600 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isLoading ? "검색 중..." : "검색 실행"}
              </button>
              <span className="text-xs text-slate-400">
                YouTube Data API v3를 기반으로 분석합니다.
              </span>
            </div>
          </form>

          {error && (
            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          {!error && isSubmitted && !isLoading && videos.length === 0 && (
            <div className="mt-10 rounded-xl border border-slate-200 bg-white px-6 py-12 text-center text-sm text-slate-500">
              검색 결과가 없습니다. 다른 키워드로 다시 시도해 보세요.
            </div>
          )}

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
              <YouTubeCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default SearchPage;
