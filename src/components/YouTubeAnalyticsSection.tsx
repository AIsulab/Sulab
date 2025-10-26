import {
  AlertCircle,
  Clock,
  Download,
  KeyRound,
  LayoutGrid,
  Search,
  Table,
  Youtube,
} from "lucide-react";
import {
  durationFilterOptions,
  formatDate,
  formatNumber,
  ratioLevels,
  timeFilterOptions,
  useYouTubeAnalytics,
  buildVideoUrl,
  type DurationFilter,
  type TimeFilter,
} from "../contexts/YouTubeAnalyticsContext";

const viewModeLabels = {
  cards: "카드 보기",
  table: "테이블 보기",
} as const;

function renderRatioBadge(ratioLevel: number | null) {
  if (!ratioLevel) {
    return (
      <span className="px-2 py-1 rounded-full bg-gray-200 text-gray-600 text-xs font-medium">
        데이터 없음
      </span>
    );
  }

  const colorByLevel: Record<number, string> = {
    1: "bg-red-100 text-red-600",
    2: "bg-orange-100 text-orange-600",
    3: "bg-blue-100 text-blue-600",
    4: "bg-emerald-100 text-emerald-600",
    5: "bg-green-200 text-green-700",
  };

  const config = ratioLevels.find((level) => level.level === ratioLevel);

  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-semibold ${
        colorByLevel[ratioLevel] ?? "bg-gray-200 text-gray-600"
      }`}
      title={config?.description}
    >
      {config?.label ?? `Lv.${ratioLevel}`}
    </span>
  );
}

export function YouTubeAnalyticsSection() {
  const {
    apiKey,
    apiKeyInput,
    setApiKeyInput,
    searchTerm,
    setSearchTerm,
    durationFilter,
    setDurationFilter,
    timeFilter,
    setTimeFilter,
    ratioFilter,
    setRatioFilter,
    viewMode,
    setViewMode,
    isLoading,
    error,
    setError,
    filteredVideos,
    lastUpdated,
    handleSaveApiKey,
    handleSearch,
    handleExportExcel,
  } = useYouTubeAnalytics();

  return (
    <section id="youtube-analytics" className="py-20 bg-[#F8FAFB]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
            <Youtube className="w-5 h-5 text-[#FF0000]" />
            <span className="text-[#14213D]" style={{ fontWeight: 600 }}>
              유튜브 조회 분석
            </span>
          </div>
          <h2
            className="text-[#14213D] mt-6 mb-4"
            style={{ fontSize: "2.5rem", fontWeight: 700 }}
          >
            검색어 기반 유튜브 채널·영상 심층 분석
          </h2>
          <p className="text-[#333333] max-w-3xl mx-auto leading-relaxed">
            유튜브 API를 활용해 영상 길이, 업로드 시점, 구독자 대비 조회수 비율 등
            핵심 지표를 한 번에 확인하고, 카드뷰와 테이블뷰를 자유롭게 전환한 뒤
            엑셀로 저장할 수 있습니다. 상단 히어로 배너에서도 즉시 검색할 수
            있습니다.
          </p>
        </div>

        <div className="bg-white border border-[#E0E7EF] rounded-3xl p-8 shadow-sm space-y-8">
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-[#14213D]">
                유튜브 API 키
              </label>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <KeyRound className="w-5 h-5 text-[#8D99AE] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={apiKeyInput}
                    onChange={(event) => setApiKeyInput(event.target.value)}
                    placeholder="Google Cloud Console에서 발급받은 API 키를 입력하세요"
                    className="w-full border border-[#E9ECEF] rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleSaveApiKey}
                  className="px-6 py-3 bg-[#00ADB5] text-white rounded-xl font-semibold hover:bg-[#00929A] transition-colors"
                >
                  키 저장
                </button>
              </div>
              {apiKey ? (
                <p className="text-xs text-[#00ADB5]">
                  저장된 API 키가 사용됩니다. 필요 시 새 키로 갱신하세요.
                </p>
              ) : (
                <p className="text-xs text-[#FF6B6B] flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  API 키를 저장해야 검색을 실행할 수 있습니다.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-semibold text-[#14213D]">
                검색어
              </label>
              <div className="relative">
                <Search className="w-5 h-5 text-[#8D99AE] absolute left-3 top-3" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="예: 숏폼 마케팅, 브이로그 촬영법, 구독자 성장 전략"
                  className="w-full border border-[#E9ECEF] rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                />
              </div>
              <button
                type="button"
                onClick={handleSearch}
                disabled={isLoading}
                className="w-full px-6 py-3 bg-[#14213D] text-white rounded-xl font-semibold hover:bg-[#1A2A4D] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "검색 중..." : "유튜브 검색 실행"}
              </button>
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
            <div className="bg-[#F1F5F9] rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                검색 결과
              </p>
              <p className="text-2xl font-bold text-[#14213D] mt-2">
                {filteredVideos.length}건
              </p>
              {lastUpdated && (
                <p className="text-xs text-[#64748B] mt-1">
                  {lastUpdated.toLocaleTimeString("ko-KR")} 기준
                </p>
              )}
            </div>
            <div className="bg-[#F1F5F9] rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                필터 · 길이
              </p>
              <select
                value={durationFilter}
                onChange={(event) =>
                  setDurationFilter(event.target.value as DurationFilter)
                }
                className="mt-3 w-full border border-[#E2E8F0] rounded-xl py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              >
                {durationFilterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-[#F1F5F9] rounded-2xl p-4">
              <p className="flex items-center gap-2 text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                <Clock className="w-4 h-4" />
                업로드 시점
              </p>
              <select
                value={timeFilter}
                onChange={(event) =>
                  setTimeFilter(event.target.value as TimeFilter)
                }
                className="mt-3 w-full border border-[#E2E8F0] rounded-xl py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              >
                {timeFilterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="bg-[#F1F5F9] rounded-2xl p-4">
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">
                구독자 대비 조회수 비율
              </p>
              <select
                value={ratioFilter}
                onChange={(event) => {
                  const value = event.target.value;
                  setRatioFilter(value === "all" ? "all" : Number(value));
                }}
                className="mt-3 w-full border border-[#E2E8F0] rounded-xl py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
              >
                <option value="all">전체 (등급 제한 없음)</option>
                {ratioLevels.map((level) => (
                  <option key={level.level} value={level.level}>
                    {level.label} · {level.description}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-2">
              {(["cards", "table"] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewMode(mode)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                    viewMode === mode
                      ? "bg-[#14213D] text-white border-[#14213D]"
                      : "bg-white text-[#14213D] border-[#E2E8F0]"
                  }`}
                >
                  {mode === "cards" ? (
                    <LayoutGrid className="w-4 h-4" />
                  ) : (
                    <Table className="w-4 h-4" />
                  )}
                  {viewModeLabels[mode]}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={handleExportExcel}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#00ADB5] text-white font-semibold hover:bg-[#00929A] transition-colors"
            >
              <Download className="w-4 h-4" />
              엑셀로 저장
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-3 px-4 py-3 border border-[#FF6B6B]/60 bg-[#FFF5F5] text-[#C53030] rounded-xl">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">{error}</p>
              <button
                type="button"
                onClick={() => setError(null)}
                className="text-xs font-semibold underline"
              >
                닫기
              </button>
            </div>
          )}

          {viewMode === "cards" ? (
            <div className="grid gap-6 md:grid-cols-2">
              {filteredVideos.map((video) => (
                <article
                  key={video.id}
                  className="border border-[#E2E8F0] rounded-2xl overflow-hidden hover:shadow-lg transition-shadow bg-white"
                >
                  {video.thumbnail ? (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-48 bg-[#F1F5F9] flex items-center justify-center text-[#94A3B8]">
                      썸네일 없음
                    </div>
                  )}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <a
                          href={buildVideoUrl(video.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg font-semibold text-[#14213D] leading-snug hover:underline"
                        >
                          {video.title}
                        </a>
                        <p className="text-sm text-[#64748B] mt-1">
                          {video.channelTitle}
                        </p>
                      </div>
                      {renderRatioBadge(video.ratioLevel)}
                    </div>

                    <p className="text-sm text-[#4A5568] line-clamp-3">
                      {video.description || "설명 정보가 없습니다."}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {video.tags.slice(0, 5).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full bg-[#EDF2F7] text-[#4A5568] text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                      {!video.tags.length && (
                        <span className="px-2 py-1 rounded-full bg-[#EDF2F7] text-[#4A5568] text-xs">
                          태그 정보 없음
                        </span>
                      )}
                    </div>

                    <dl className="grid grid-cols-2 gap-3 text-sm">
                      <div className="space-y-1">
                        <dt className="text-[#94A3B8]">영상 길이</dt>
                        <dd className="font-semibold text-[#14213D]">
                          {video.durationFormatted}{" "}
                          {video.isShortForm ? "(숏폼)" : "(롱폼)"}
                        </dd>
                      </div>
                      <div className="space-y-1">
                        <dt className="text-[#94A3B8]">업로드일</dt>
                        <dd className="font-semibold text-[#14213D]">
                          {formatDate(video.publishedAt)}
                        </dd>
                      </div>
                      <div className="space-y-1">
                        <dt className="text-[#94A3B8]">조회수</dt>
                        <dd className="font-semibold text-[#14213D]">
                          {formatNumber(video.viewCount)}
                        </dd>
                      </div>
                      <div className="space-y-1">
                        <dt className="text-[#94A3B8]">구독자 대비 조회수</dt>
                        <dd className="font-semibold text-[#14213D]">
                          {video.viewToSubscriberRatio
                            ? `${video.viewToSubscriberRatio.toFixed(2)}배`
                            : "데이터 없음"}
                        </dd>
                      </div>
                    </dl>
                  </div>
                </article>
              ))}
              {!filteredVideos.length && !isLoading && (
                <div className="col-span-full border border-dashed border-[#CBD5E1] rounded-2xl p-10 text-center text-[#64748B]">
                  조건에 맞는 검색 결과가 없습니다. 필터를 조정하거나 다른 검색어를
                  입력해보세요.
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto border border-[#E2E8F0] rounded-2xl">
              <table className="min-w-full divide-y divide-[#E2E8F0] text-sm">
                <thead className="bg-[#F8FAFC]">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-[#14213D]">
                      제목
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[#14213D]">
                      채널명
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[#14213D]">
                      업로드일
                    </th>
                    <th className="px-4 py-3 text-left font-semibold text-[#14213D]">
                      길이
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-[#14213D]">
                      조회수
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-[#14213D]">
                      구독자 수
                    </th>
                    <th className="px-4 py-3 text-right font-semibold text-[#14213D]">
                      조회/구독 비율
                    </th>
                    <th className="px-4 py-3 text-center font-semibold text-[#14213D]">
                      등급
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9] bg-white">
                  {filteredVideos.map((video) => (
                    <tr key={video.id} className="hover:bg-[#F8FAFC]">
                      <td className="px-4 py-3 max-w-[260px]">
                        <a
                          href={buildVideoUrl(video.id)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#14213D] font-semibold hover:underline"
                        >
                          {video.title}
                        </a>
                        <p className="text-xs text-[#64748B] mt-1 line-clamp-2">
                          {video.description || "설명 정보 없음"}
                        </p>
                      </td>
                      <td className="px-4 py-3 text-[#333333]">
                        {video.channelTitle}
                      </td>
                      <td className="px-4 py-3 text-[#333333]">
                        {formatDate(video.publishedAt)}
                      </td>
                      <td className="px-4 py-3 text-[#333333]">
                        {video.durationFormatted}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-[#14213D]">
                        {formatNumber(video.viewCount)}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-[#14213D]">
                        {video.subscriberCount
                          ? formatNumber(video.subscriberCount)
                          : "-"}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-[#14213D]">
                        {video.viewToSubscriberRatio
                          ? `${video.viewToSubscriberRatio.toFixed(2)}배`
                          : "-"}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {renderRatioBadge(video.ratioLevel)}
                      </td>
                    </tr>
                  ))}
                  {!filteredVideos.length && !isLoading && (
                    <tr>
                      <td
                        colSpan={8}
                        className="px-4 py-6 text-center text-[#64748B]"
                      >
                        조건에 맞는 검색 결과가 없습니다. 필터를 조정하거나 다른
                        검색어를 입력해보세요.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

