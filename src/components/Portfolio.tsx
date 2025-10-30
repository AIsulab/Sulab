import Image from "next/image";
import { useMemo, useState } from "react";

import { portfolioData } from "@/data/portfolio";

export function Portfolio() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = useMemo(
    () => portfolioData.find((project) => project.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <section id="portfolio" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="md:text-center">
          <h2 className="section-heading">성과로 입증된 SULAB의 대표 프로젝트</h2>
          <p className="section-subtitle md:mx-auto md:max-w-3xl">
            프로젝트마다 다른 산업과 목표를 성공으로 이끈 경험이 있습니다. 클릭해 상세 이야기를 확인하세요.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {portfolioData.map((item) => (
            <button
              key={item.id}
              type="button"
              aria-label={`${item.title} 상세 보기`}
              onClick={() => setSelectedId(item.id)}
              className="group relative h-72 overflow-hidden rounded-3xl shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-dark/0 transition-colors duration-300 group-hover:bg-dark/65" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left text-white transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.category}
                </span>
                <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedProject ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4 py-10"
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-white p-8 shadow-2xl">
            <button
              type="button"
              aria-label="포트폴리오 상세 닫기"
              onClick={() => setSelectedId(null)}
              className="cursor-pointer absolute right-5 top-5 text-gray transition hover:text-dark"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <span className="text-sm font-semibold uppercase tracking-wide text-primary">{selectedProject.category}</span>
            <h3 className="mt-2 text-2xl font-semibold text-dark">{selectedProject.title}</h3>
            <p className="mt-4 text-base text-gray">{selectedProject.description}</p>

            <ul className="mt-6 space-y-2">
              {selectedProject.metrics.map((metric) => (
                <li key={metric} className="flex items-start gap-2 text-sm text-dark">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 flex-none rounded-full bg-primary" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex justify-end">
              <button
                type="button"
                aria-label="다른 포트폴리오 보기"
                onClick={() => setSelectedId(null)}
                className="btn-secondary cursor-pointer"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
