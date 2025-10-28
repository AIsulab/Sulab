'use client';

import Link from "next/link";
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
    () =>
      "\uc608\u0029\u0020\uce74\ud398\u0020\ucc3d\uc5c5\u0020\ube0c\uc774\ub85c\uadf8\u002c\u0020\ud53c\ubd80\uacfc\u0020\ub9c8\ucf00\ud305\u002c\u0020\u0053\u0061\u0061\u0053\u0020\uc628\ubcf4\ub529",
    []
  );

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);

    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setError("\uac80\uc0c9\uc5b4\ub97c\u0020\uc785\ub825\ud574\uc8fc\uc138\uc694\u002e");
      setVideos([]);
      return;
    }

    if (!apiKey) {
      setError(
        "\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0041\u0050\u0049\u0020\ud0a4\uac00\u0020\uc124\uc815\ub418\uc9c0\u0020\uc54a\uc558\uc2b5\ub2c8\ub2e4\u002e\u0020\uad00\ub9ac\uc790\uc5d0\uac8c\u0020\ubb38\uc758\ud574\uc8fc\uc138\uc694\u002e"
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
          "\uac80\uc0c9\u0020\uc694\uccad\uc5d0\u0020\uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4\u002e\u0020\uc7a0\uc2dc\u0020\ud6c4\u0020\ub2e4\uc2dc\u0020\uc2dc\ub3c4\ud574\uc8fc\uc138\uc694\u002e"
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
        throw new Error("\uc601\uc0c1\u0020\uc0c1\uc138\u0020\uc815\ubcf4\ub97c\u0020\ubd88\ub7ec\uc624\uc9c0\u0020\ubabb\ud588\uc2b5\ub2c8\ub2e4\u002e");
      }

      const detailData = await detailResponse.json();
      const nextVideos: YouTubeVideo[] = Array.isArray(detailData.items)
        ? detailData.items.map((item: any) => ({
            id: item.id,
            title:
              item.snippet?.title ??
              "\uc81c\ubaa9\uc744\u0020\ubd88\ub7ec\uc624\uc9c0\u0020\ubabb\ud588\uc2b5\ub2c8\ub2e4",
            channelTitle:
              item.snippet?.channelTitle ??
              "\ucc44\ub110\u0020\uc815\ubcf4\ub97c\u0020\ubd88\ub7ec\uc624\uc9c0\u0020\ubabb\ud588\uc2b5\ub2c8\ub2e4",
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
          : "\uc54c\u0020\uc218\u0020\uc5c6\ub294\u0020\uc624\ub958\uac00\u0020\ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4\u002e";
      setError(message);
      setVideos([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>
          {"\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\u0020\uac80\uc0c9\u0020\u007c\u0020\u0053\u0055\u004c\u0041\u0042"}
        </title>
        <meta
          name="description"
          content="\u0053\u0055\u004c\u0041\u0042\uc758\u0020\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\u0020\uac80\uc0c9\uc73c\ub85c\u0020\uc2dc\uc7a5\u0020\ud750\ub984\uc744\u0020\ube60\ub974\uac8c\u0020\ud30c\uc545\ud558\uc138\uc694\u002e\u0020\uc870\ud68c\uc218\u002c\u0020\ucc44\ub110\u002c\u0020\uac8c\uc2dc\uc77c\uc744\u0020\ud55c\ub208\uc5d0\u0020\ube44\uad50\ud560\u0020\uc218\u0020\uc788\uc2b5\ub2c8\ub2e4\u002e"
        />
        <meta
          property="og:title"
          content="\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\u0020\uac80\uc0c9\u0020\u007c\u0020\u0053\u0055\u004c\u0041\u0042"
        />
        <meta
          property="og:description"
          content="\uc2e4\uc2dc\uac04\u0020\uc720\ud29c\ube0c\u0020\ub370\uc774\ud130\ub97c\u0020\ubc14\ud0d5\uc73c\ub85c\u0020\uacbd\uc7c1\u0020\ucf58\ud150\uce20\ub97c\u0020\ubd84\uc11d\ud558\uace0\u0020\uc804\ub7b5\uc744\u0020\uc218\ub9bd\ud558\uc138\uc694\u002e"
        />
        <meta property="og:image" content="/og-image.png" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {"\uc720\ud29c\ube0c\u0020\uc778\uc0ac\uc774\ud2b8\u0020\uac80\uc0c9"}
              </h1>
              <p className="text-sm text-slate-500 sm:text-base">
                {"\ud0a4\uc6cc\ub4dc\u0020\uae30\ubc18\uc73c\ub85c\u0020\uc2e4\uc2dc\uac04\u0020\ucf58\ud150\uce20\u0020\ud2b8\ub80c\ub4dc\ub97c\u0020\ud655\uc778\ud558\uace0\u002c\u0020\ucc44\ub110\u0020\uc804\ub7b5\uc744\u0020\ube60\ub974\uac8c\u0020\uc218\ub9bd\ud558\uc138\uc694\u002e"}
              </p>
            </div>
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 hover:border-sky-400 hover:text-sky-600 transition"
            >
              {"\uba54\uc778\uc73c\ub85c\u0020\ub3cc\uc544\uac00\uae30"}
            </Link>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">
                {"\uac80\uc0c9\uc5b4"}
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
                {isLoading ? "\uac80\uc0c9\u0020\uc911\u002e\u002e\u002e" : "\uac80\uc0c9\u0020\uc2e4\ud589"}
              </button>
              <span className="text-xs text-slate-400">
                {"\u0041\u0050\u0049\u0020\ud638\ucd9c\uc740\u0020\u0047\u006f\u006f\u0067\u006c\u0065\u0020\u0059\u006f\u0075\u0054\u0075\u0062\u0065\u0020\u0044\u0061\u0074\u0061\u0020\u0041\u0050\u0049\u0020\u0076\u0033\ub97c\u0020\uc0ac\uc6a9\ud569\ub2c8\ub2e4\u002e"}
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
              {"\uc544\uc9c1\u0020\uacb0\uacfc\uac00\u0020\uc5c6\uc2b5\ub2c8\ub2e4\u002e\u0020\ub2e4\ub978\u0020\ud0a4\uc6cc\ub4dc\ub85c\u0020\ub2e4\uc2dc\u0020\uac80\uc0c9\ud574\ubcf4\uc138\uc694\u002e"}
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
