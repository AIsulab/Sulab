import { FormEvent } from "react";
import { AlertCircle, KeyRound, Loader2, Search } from "lucide-react";
import { useYouTubeAnalytics } from "../contexts/YouTubeAnalyticsContext";

export function HeroSection() {
  const {
    apiKeyInput,
    setApiKeyInput,
    searchTerm,
    setSearchTerm,
    handleSaveApiKey,
    handleSearch,
    isLoading,
    error,
    setError,
  } = useYouTubeAnalytics();

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#14213D] via-[#1a2a4d] to-[#14213D] pt-16">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00ADB5" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <circle cx="20%" cy="30%" r="3" fill="#00ADB5" opacity="0.6">
            <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="80%" cy="40%" r="4" fill="#00ADB5" opacity="0.6">
            <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
          </circle>
          <circle cx="50%" cy="70%" r="2" fill="#00ADB5" opacity="0.6">
            <animate attributeName="r" values="2;4;2" dur="2.5s" repeatCount="indefinite" />
          </circle>
          <line x1="20%" y1="30%" x2="50%" y2="70%" stroke="#00ADB5" strokeWidth="1" opacity="0.3" />
          <line x1="80%" y1="40%" x2="50%" y2="70%" stroke="#00ADB5" strokeWidth="1" opacity="0.3" />
        </svg>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <h1 className="text-white" style={{ fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2 }}>
            AI로 만드는 마케팅의 미래
          </h1>
          <p className="text-[#E9ECEF] max-w-3xl mx-auto" style={{ fontSize: "1.25rem", lineHeight: 1.6 }}>
            술랩의 AI·자동화 기술로 카페와 소상공인의 유튜브 마케팅을 지원합니다.
            실시간 조회 분석과 경쟁력 있는 콘텐츠 전략을 한 번에 확인해 보세요.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-[#00ADB5] text-white rounded-lg hover:bg-[#009198] transition-all hover:shadow-lg hover:shadow-[#00ADB5]/30"
              style={{ fontSize: "1.125rem", fontWeight: 600 }}
            >
              무료 상담 신청하기
            </button>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-left">
          <div className="bg-white/90 backdrop-blur-sm border border-white/40 rounded-3xl shadow-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:gap-3 mb-6">
              <span className="text-sm font-semibold text-[#00ADB5] uppercase tracking-wide">
                YouTube Insights
              </span>
              <h2 className="text-[#14213D]" style={{ fontSize: "1.875rem", fontWeight: 700 }}>
                지금 바로 유튜브 채널을 분석해 보세요
              </h2>
              <p className="text-[#4A5568]" style={{ lineHeight: 1.6 }}>
                API 키를 저장하고 검색어를 입력하면 최신 영상의 길이, 태그, 조회수와
                구독자 대비 조회수 비율을 한 번에 확인할 수 있습니다.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#14213D] mb-2">
                    유튜브 API 키
                  </label>
                  <KeyRound className="w-5 h-5 text-[#8D99AE] absolute left-3 top-[3.1rem]" />
                  <input
                    type="text"
                    value={apiKeyInput}
                    onChange={(event) => {
                      setApiKeyInput(event.target.value);
                      if (error) {
                        setError(null);
                      }
                    }}
                    placeholder="예: AIza..."
                    className="w-full border border-[#E9ECEF] rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  />
                  <p className="mt-2 text-xs text-[#64748B]">
                    기본 API 키가 미리 입력되어 있습니다. 필요하다면 본인의 키로 교체하세요.
                  </p>
                </div>
                <div className="flex items-end gap-3">
                  <button
                    type="button"
                    onClick={handleSaveApiKey}
                    className="w-full sm:w-auto px-5 py-3 bg-[#14213D] text-white rounded-xl font-semibold hover:bg-[#1A2A4D] transition-colors"
                  >
                    키 저장
                  </button>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[2fr_1fr]">
                <div className="relative">
                  <label className="block text-sm font-semibold text-[#14213D] mb-2">
                    검색어
                  </label>
                  <Search className="w-5 h-5 text-[#8D99AE] absolute left-3 top-[3.1rem]" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                      if (error) {
                        setError(null);
                      }
                    }}
                    placeholder="예: 숏폼 마케팅, 카페 브이로그"
                    className="w-full border border-[#E9ECEF] rounded-xl py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#00ADB5]"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#00ADB5] text-white rounded-xl font-semibold hover:bg-[#00929A] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        검색 중...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4" />
                        유튜브 검색 실행
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {error && (
              <div className="mt-4 flex items-center gap-3 px-4 py-3 border border-[#FF6B6B]/60 bg-[#FFF5F5] text-[#C53030] rounded-xl">
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
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00ADB5]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
              500+
            </div>
            <p className="text-[#E9ECEF] mt-2">프로젝트 데이터</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00ADB5]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
              AI
            </div>
            <p className="text-[#E9ECEF] mt-2">자동화 기술</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-[#00ADB5]" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
              24/7
            </div>
            <p className="text-[#E9ECEF] mt-2">상시 지원</p>
          </div>
        </div>
      </div>
    </section>
  );
}
