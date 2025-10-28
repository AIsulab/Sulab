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
      setError("검색어를 입력해주세요.");
      setVideos([]);
      return;
    }

    if (!apiKey) {
      setError(
        "YouTube API 키가 설정되지 않았습니다. 관리자에게 문의해주세요."
      );
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
        throw new Error(
          "검색 요청에 실패했습니다. 잠시 후 다시 시도해주세요."
        );
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
        throw new Error("영상 상세 정보를 불러오지 못했습니다.");
      }

      const detailData = await detailResponse.json();
      const nextVideos: YouTubeVideo[] = Array.isArray(detailData.items)
        ? detailData.items.map((item: any) => ({
            id: item.id,
            title:
              item.snippet?.title ?? "제목을 불러오지 못했습니다",
            channelTitle:
              item.snippet?.channelTitle ??
              "채널 정보를 불러오지 못했습니다",
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
          : "알 수 없는 오류가 발생했습니다.";
      setError(message);
      setVideos([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>유튜브 인사이트 검색 | SULAB</title>
        <meta
          name="description"
          content="SULAB의 유튜브 인사이트 검색으로 시장 흐름을 빠르게 파악하세요. 조회수, 채널, 게시일을 한눈에 비교할 수 있습니다."
        />
        <meta property="og:title" content="유튜브 인사이트 검색 | SULAB" />
        <meta
          property="og:description"
          content="실시간 유튜브 데이터를 바탕으로 경쟁 콘텐츠를 분석하고 전략을 수립하세요."
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                유튜브 인사이트 검색
              </h1>
              <p className="text-sm text-slate-500 sm:text-base">
                키워드 기반으로 실시간 콘텐츠 트렌드를 확인하고, 채널 전략을 빠르게 수립하세요.
              </p>
            </div>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              메인으로 돌아가기
            </a>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">
                검색어
              </span>
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
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-200"
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
                API 호출은 Google YouTube Data API v3를 사용합니다.
              </span>
            </div>
          </form>

          {error && (
            <div className="mt-6 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
              {error}
            </div>
          )}

          {!error && isSubmitted && !isLoading && videos.length === 0 && (
            <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 px-6 py-12 text-center text-sm text-slate-500">
              아직 결과가 없습니다. 다른 키워드로 다시 검색해보세요.
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
