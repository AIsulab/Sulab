export type SearchResult = {
  id: string;
  keyword: string;
  title: string;
  description: string;
  tags: string[];
};

export const mockSearchResults: SearchResult[] = [
  {
    id: "homepage-renewal",
    keyword: "홈페이지",
    title: "반응형 홈페이지 리뉴얼",
    description: "B2B 고객을 위한 UX 최적화와 퍼포먼스 강화형 제작 패키지입니다.",
    tags: ["UX/UI", "퍼포먼스", "SEO"]
  },
  {
    id: "brand-design",
    keyword: "디자인",
    title: "브랜드 아이덴티티 패키지",
    description: "로고, 컬러 시스템, 가이드라인까지 일관된 브랜딩을 제공합니다.",
    tags: ["브랜딩", "콘텐츠", "가이드"]
  },
  {
    id: "ad-strategy",
    keyword: "광고",
    title: "멀티채널 퍼포먼스 광고",
    description: "검색, SNS, 디스플레이를 통합한 실시간 전환 개선 전략입니다.",
    tags: ["전환", "데이터", "운영"]
  },
  {
    id: "conversion-optimization",
    keyword: "전환",
    title: "전환율 개선 컨설팅",
    description: "사용자 여정 분석 기반으로 랜딩 페이지를 리디자인합니다.",
    tags: ["A/B 테스트", "퍼널 분석", "데이터"]
  },
  {
    id: "ai-consulting",
    keyword: "AI",
    title: "AI 비즈니스 컨설팅",
    description: "AI 기반 업무 자동화와 고객 데이터 분석 로드맵을 제안합니다.",
    tags: ["AI", "전략", "자동화"]
  }
];

export const filterSearchResults = (term: string): SearchResult[] => {
  if (!term) {
    return [];
  }

  const normalized = term.trim().toLowerCase();

  return mockSearchResults.filter((result) => {
    const haystack = [result.keyword, result.title, result.description, ...result.tags]
      .join(" ")
      .toLowerCase();

    return haystack.includes(normalized);
  });
};

export const recommendedKeywords = ["홈페이지", "디자인", "광고"];
