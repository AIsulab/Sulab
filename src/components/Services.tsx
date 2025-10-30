import { useCallback } from "react";

import { services } from "@/data/services";

const scrollToContact = () => {
  const node = document.getElementById("contact");
  if (node) {
    node.scrollIntoView({ behavior: "smooth" });
  }
};

export function Services() {
  const handleClick = useCallback(scrollToContact, []);

  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="md:text-center">
          <h2 className="section-heading">비즈니스 성장을 이끄는 핵심 서비스</h2>
          <p className="section-subtitle md:mx-auto md:max-w-3xl">
            전략 기획부터 실행과 고도화까지, SULAB이 가장 자신 있는 서비스를 선별해 제안합니다.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <button
              key={service.id}
              type="button"
              onClick={handleClick}
              aria-label={`${service.title} 상담 요청`}
              className="group cursor-pointer rounded-3xl border border-slate-100 bg-white p-8 text-left shadow-md transition-all duration-200 ease-out hover:scale-[1.05] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              <span className="text-sm font-semibold uppercase tracking-tight text-primary">SULAB SERVICE</span>
              <h3 className="mt-4 text-2xl font-semibold text-dark">{service.title}</h3>
              <p className="mt-3 text-sm text-gray md:text-base">{service.description}</p>
              <ul className="mt-6 space-y-2 text-sm text-gray">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm">
                    <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                상담 폼으로 이동하기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12l-3.75 3.75M21 12H3" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
