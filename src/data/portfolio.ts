export type PortfolioItem = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  metrics: string[];
};

export const portfolioData: PortfolioItem[] = [
  {
    id: "sulab-enterprise",
    title: "SULAB Enterprise Platform",
    category: "B2B 웹사이트 리디자인",
    description:
      "기업 고객 중심의 정보 구조와 CTA 개선으로 리드 발생량을 대폭 향상시킨 프로젝트입니다.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    metrics: ["리드 전환율 38% 증가", "페이지 평균 체류 시간 1.8배 향상"]
  },
  {
    id: "global-branding",
    title: "Global Brand Launch",
    category: "브랜딩 & 퍼포먼스 캠페인",
    description:
      "브랜드 아이덴티티 구축부터 퍼포먼스 광고까지 원스톱으로 수행한 글로벌 캠페인입니다.",
    image:
      "https://images.unsplash.com/photo-1522198648246-9282662f3cd3?auto=format&fit=crop&w=1200&q=80",
    metrics: ["캠페인 도달수 220% 확장", "구매 전환율 2.3배 상승"]
  },
  {
    id: "ai-saas",
    title: "AI SaaS Dashboard",
    category: "서비스 제품 홈페이지",
    description:
      "복잡한 AI 분석 기능을 직관적으로 이해할 수 있도록 온보딩 여정 중심으로 설계했습니다.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    metrics: ["사용자 가입률 52% 증가", "데모 신청률 64% 향상"]
  }
];
