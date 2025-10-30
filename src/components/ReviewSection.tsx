import { Star, Quote } from "lucide-react";

export function ReviewSection() {
  const reviews = [
    {
      name: "김민준",
      company: "테크스타트업 대표",
      rating: 5,
      content: "빠르고 꼼꼼하게 진행해주셔서 만족스러웠습니다. 특히 커뮤니케이션이 원활해서 프로젝트가 순조롭게 진행되었어요.",
      avatar: "KM",
      color: "#1C6DF2",
    },
    {
      name: "박서연",
      company: "뷰티 브랜드 마케터",
      rating: 5,
      content: "디자인 감각이 좋고 커뮤니케이션이 확실합니다. 요구사항을 정확히 파악하고 그 이상의 결과물을 만들어주셨어요.",
      avatar: "PS",
      color: "#00BFA5",
    },
    {
      name: "이준호",
      company: "커머스 사업자",
      rating: 5,
      content: "웹사이트 제작부터 마케팅까지 한 번에 해결할 수 있어서 정말 좋았습니다. ROI도 기대 이상으로 나왔습니다.",
      avatar: "LJ",
      color: "#1C6DF2",
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-[#F9FBFD] rounded-full shadow-sm mb-4">
            <span className="text-[#1C6DF2]" style={{ fontWeight: 600 }}>고객 후기</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            고객들의 생생한 후기
          </h2>
          <p className="text-[#0A2540] opacity-70 max-w-2xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            SULAB과 함께한 고객들의 진솔한 이야기를 들어보세요.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#F2F6FB] rounded-3xl p-8 hover:shadow-lg transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={48} className="text-[#0A2540]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#FFB800" className="text-[#FFB800]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-[#0A2540] mb-6 relative z-10" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
                "{review.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: review.color, fontWeight: 700 }}
                >
                  {review.avatar}
                </div>
                <div>
                  <div className="text-[#0A2540]" style={{ fontWeight: 700 }}>
                    {review.name}
                  </div>
                  <div className="text-[#0A2540] opacity-60" style={{ fontSize: "0.875rem" }}>
                    {review.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
