export type Service = {
  id: string;
  title: string;
  description: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    id: "web-design",
    title: "홈페이지 제작",
    description: "전략적인 UX 설계와 반응형 UI로 비즈니스 목표에 맞춘 웹사이트를 제작합니다.",
    benefits: ["브랜드 맞춤형 디자인", "SEO 기반 정보 구조화", "모든 기기 최적화"]
  },
  {
    id: "branding",
    title: "브랜딩 디자인",
    description: "CI·BI부터 온·오프라인 크리에이티브까지 브랜드 일관성을 완성합니다.",
    benefits: ["브랜드 아이덴티티 수립", "콘텐츠 키비주얼 제작", "운영 가이드 제공"]
  },
  {
    id: "marketing",
    title: "광고",
    description: "퍼포먼스 마케팅과 콘텐츠 전략을 결합해 실질적인 전환을 이끌어냅니다.",
    benefits: ["광고 채널 믹스 설계", "캠페인 크리에이티브", "성과 분석 및 최적화"]
  },
  {
    id: "conversion",
    title: "전환 최적화",
    description: "데이터 기반 인사이트로 유입 경로부터 전환까지 전 주기를 개선합니다.",
    benefits: ["핵심 지표 모니터링", "사용자 여정 분석", "A/B 테스트 자동화"]
  }
];
