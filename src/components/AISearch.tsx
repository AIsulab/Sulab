import { FormEvent, useMemo, useState } from "react";

import { filterSearchResults, recommendedKeywords, type SearchResult } from "@/utils/aiSearch";

export function AISearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const visibleResults = useMemo(() => results.slice(0, 3), [results]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setHasSearched(true);

    window.setTimeout(() => {
      const filtered = filterSearchResults(query);
      setResults(filtered);
      setLoading(false);
    }, 600);
  };

  return (
    <section id="ai-search" className="section-padding bg-slate-50">
      <div className="section-container">
        <div className="rounded-3xl border border-primary/30 bg-white p-12 shadow-lg">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="section-heading">AI 검색으로 맞춤 솔루션을 찾아보세요</h2>
              <p className="section-subtitle md:max-w-2xl md:leading-relaxed">
                비즈니스 목표를 입력하면 SULAB의 데이터베이스를 기반으로 가장 적합한 솔루션 조합을
                즉시 추천합니다.
              </p>
            </div>
            <span className="mt-6 inline-flex h-12 items-center gap-2 rounded-full bg-primary/10 px-5 text-sm font-medium text-primary md:mt-0">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-semibold text-white">
                AI
              </span>
              실시간 전략 추천
            </span>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4 md:flex-row">
            <label htmlFor="ai-search-input" className="sr-only">
              검색어 입력
            </label>
            <input
              id="ai-search-input"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="예: B2B 홈페이지 전환율을 높이고 싶어요"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base text-dark shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              type="submit"
              aria-label="AI 솔루션 검색"
              className="btn-primary cursor-pointer w-full md:w-auto"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  분석 중...
                </span>
              ) : (
                "검색"
              )}
            </button>
          </form>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {loading ? (
              <div className="col-span-3 flex flex-col items-center justify-center rounded-2xl border border-dashed border-primary/40 bg-primary/5 py-10 text-center text-primary">
                <span className="h-10 w-10 animate-spin rounded-full border-4 border-primary/30 border-t-primary" />
                <p className="mt-4 text-sm font-medium md:text-base">AI가 최적의 조합을 계산하고 있습니다...</p>
              </div>
            ) : !hasSearched ? (
              <div className="col-span-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
                <p className="text-base font-medium text-dark">원하시는 목표나 서비스를 입력해 주세요.</p>
                <p className="mt-2 text-sm text-gray">예: 온라인 쇼핑몰 매출을 2배로 늘리고 싶어요</p>
              </div>
            ) : visibleResults.length > 0 ? (
              visibleResults.map((result) => (
                <article
                  key={result.id}
                  className="card h-full border-primary/10 shadow-md hover:shadow-lg"
                  aria-label={`${result.title} 추천 결과`}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                    #{result.keyword}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-dark">{result.title}</h3>
                  <p className="mt-2 text-sm text-gray md:text-base">{result.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {result.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))
            ) : (
              <div className="col-span-3 rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-10 text-center">
                <p className="text-base font-medium text-dark">검색 결과가 없습니다.</p>
                <p className="mt-2 text-sm text-gray">아래 추천 검색어로 다시 시도해 보세요.</p>
                <div className="mt-6 flex flex-wrap justify-center gap-3">
                  {recommendedKeywords.map((keyword) => (
                    <button
                      key={keyword}
                      type="button"
                      aria-label={`${keyword} 추천 검색`}
                      className="cursor-pointer rounded-full border border-primary/40 px-4 py-2 text-sm text-primary transition hover:bg-primary/10"
                      onClick={() => {
                        setQuery(keyword);
                        setHasSearched(true);
                        setLoading(true);
                        window.setTimeout(() => {
                          setResults(filterSearchResults(keyword));
                          setLoading(false);
                        }, 400);
                      }}
                    >
                      #{keyword}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
