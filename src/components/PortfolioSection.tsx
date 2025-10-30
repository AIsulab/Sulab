import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

export function PortfolioSection() {
  const projects = [
    {
      title: "커머스 웹사이트 구축",
      category: "Website",
      description: "반응형 이커머스 플랫폼 제작 및 결제 시스템 통합",
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzdG9yZXxlbnwxfHx8fDE3NjE3OTg1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#1C6DF2",
    },
    {
      title: "브랜드 아이덴티티 디자인",
      category: "Design",
      description: "로고, 명함, 브랜드 가이드라인 전체 제작",
      image: "https://images.unsplash.com/photo-1644725701777-0740945ebe7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGRlc2lnbiUyMGNyZWF0aXZlfGVufDF8fHx8MTc2MTc2OTE2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00BFA5",
    },
    {
      title: "포트폴리오 웹사이트",
      category: "Website",
      description: "모던하고 세련된 개인 포트폴리오 사이트 제작",
      image: "https://images.unsplash.com/photo-1760071744047-5542cbfda184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0Zm9saW8lMjBwcm9qZWN0JTIwc2hvd2Nhc2V8ZW58MXx8fHwxNzYxODUzNjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#1C6DF2",
    },
    {
      title: "디지털 마케팅 캠페인",
      category: "Marketing",
      description: "Meta/Google 광고 통합 운영 및 ROI 300% 달성",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nfGVufDF8fHx8MTc2MTgxNzc4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00BFA5",
    },
    {
      title: "기업 웹사이트 리뉴얼",
      category: "Website",
      description: "WordPress 기반 기업 홈페이지 전면 개편",
      image: "https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdlYnNpdGUlMjB0ZW1wbGF0ZXxlbnwxfHx8fDE3NjE4NTM2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#1C6DF2",
    },
    {
      title: "SNS 콘텐츠 디자인",
      category: "Design",
      description: "일관된 브랜딩의 SNS 피드 및 스토리 콘텐츠",
      image: "https://images.unsplash.com/photo-1678690832311-bb6e361989ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNzYxODQzNjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      color: "#00BFA5",
    },
  ];

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F9FBFD] rounded-full shadow-sm mb-4">
            <span className="text-[#1C6DF2]" style={{ fontWeight: 600 }}>포트폴리오</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            SULAB이 완성한 프로젝트들
          </h2>
          <p className="text-[#0A2540] opacity-70 max-w-2xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            다양한 산업군에서 진행한 성공적인 프로젝트 사례를 확인하세요.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* View Icon */}
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <ExternalLink size={20} className="text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div
                  className="inline-block px-3 py-1 rounded-full mb-3"
                  style={{ backgroundColor: project.color }}
                >
                  <span style={{ fontSize: "0.875rem", fontWeight: 600 }}>{project.category}</span>
                </div>
                <h3 className="mb-2" style={{ fontSize: "1.25rem", fontWeight: 700 }}>
                  {project.title}
                </h3>
                <p className="text-white/90" style={{ fontSize: "0.9375rem", lineHeight: 1.6 }}>
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#1C6DF2] text-white rounded-full hover:bg-[#1557c7] transition-all hover:scale-105 hover:shadow-lg inline-flex items-center gap-2" style={{ fontWeight: 600 }}>
            <span>전체 포트폴리오 보기</span>
            <ExternalLink size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
