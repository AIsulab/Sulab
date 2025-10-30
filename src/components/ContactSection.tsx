import { useState } from "react";
import { Mail, Phone, MessageCircle, Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert("문의가 성공적으로 접수되었습니다!");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#E6F5FC]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full shadow-sm mb-4">
            <span className="text-[#1C6DF2]" style={{ fontWeight: 600 }}>문의하기</span>
          </div>
          <h2 className="text-[#0A2540] mb-4" style={{ fontSize: "2.5rem", fontWeight: 700 }}>
            프로젝트를 시작해볼까요?
          </h2>
          <p className="text-[#0A2540] opacity-70 max-w-2xl mx-auto" style={{ fontSize: "1.125rem", lineHeight: 1.7 }}>
            궁금한 점이 있으시면 언제든지 연락주세요. 24시간 내 답변드립니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#1C6DF2]/10 rounded-xl flex items-center justify-center mb-4">
                <Mail size={24} className="text-[#1C6DF2]" />
              </div>
              <h3 className="text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>이메일</h3>
              <p className="text-[#0A2540] opacity-70">sulabstore@naver.com</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#00BFA5]/10 rounded-xl flex items-center justify-center mb-4">
                <Phone size={24} className="text-[#00BFA5]" />
              </div>
              <h3 className="text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>위치</h3>
              <p className="text-[#0A2540] opacity-70">전북특별자치도 전주시</p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-md">
              <div className="w-12 h-12 bg-[#1C6DF2]/10 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle size={24} className="text-[#1C6DF2]" />
              </div>
              <h3 className="text-[#0A2540] mb-2" style={{ fontWeight: 700 }}>카카오톡 상담</h3>
              <a
                href="https://open.kakao.com/o/siMggc8f"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1C6DF2] hover:text-[#1557c7] transition-colors inline-block"
                style={{ fontWeight: 600 }}
              >
                오픈채팅 바로가기 →
              </a>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0A2540] mb-2" style={{ fontWeight: 600 }}>
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1C6DF2] transition-colors"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A2540] mb-2" style={{ fontWeight: 600 }}>
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1C6DF2] transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#0A2540] mb-2" style={{ fontWeight: 600 }}>
                      연락처
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1C6DF2] transition-colors"
                      placeholder="010-0000-0000"
                    />
                  </div>
                  <div>
                    <label className="block text-[#0A2540] mb-2" style={{ fontWeight: 600 }}>
                      프로젝트 종류 *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1C6DF2] transition-colors bg-white"
                    >
                      <option value="">선택해주세요</option>
                      <option value="website">웹사이트 제작</option>
                      <option value="design">브랜드 디자인</option>
                      <option value="marketing">마케팅 운영</option>
                      <option value="all">통합 서비스</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[#0A2540] mb-2" style={{ fontWeight: 600 }}>
                    프로젝트 설명 *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-[#1C6DF2] transition-colors resize-none"
                    placeholder="프로젝트에 대해 자세히 설명해주세요."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1C6DF2] text-white rounded-full hover:bg-[#1557c7] transition-all hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                  style={{ fontWeight: 600 }}
                >
                  <span>문의 남기기</span>
                  <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
