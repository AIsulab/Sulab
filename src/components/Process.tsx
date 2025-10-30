import { motion } from "framer-motion";
import { FiCode, FiPenTool, FiTarget, FiTrendingUp } from "react-icons/fi";

type ProcessStep = {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
};

const steps: ProcessStep[] = [
  {
    id: 1,
    title: "기획",
    description: "시장 분석과 사용자 리서치, KPI 설정을 기반으로 맞춤 전략을 설계합니다.",
    icon: <FiTarget className="h-6 w-6" />
  },
  {
    id: 2,
    title: "디자인",
    description: "Pretendard 타이포와 시각 언어를 활용해 브랜드를 생생하게 구현합니다.",
    icon: <FiPenTool className="h-6 w-6" />
  },
  {
    id: 3,
    title: "개발",
    description: "Next.js와 Headless 구조로 빠르고 확장 가능한 프런트엔드를 구현합니다.",
    icon: <FiCode className="h-6 w-6" />
  },
  {
    id: 4,
    title: "마케팅",
    description: "데이터 모니터링과 A/B 테스트를 반복하며 캠페인 성과를 고도화합니다.",
    icon: <FiTrendingUp className="h-6 w-6" />
  }
];

export function Process() {
  return (
    <section id="process" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="md:text-center">
          <h2 className="section-heading">전략부터 마케팅까지, 완성형 파이프라인</h2>
          <p className="section-subtitle md:mx-auto md:max-w-3xl">
            각 단계마다 전담 팀이 투입되어 프로젝트 완성도를 높이고, 단계별 산출물을 투명하게 공유합니다.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((step, index) => (
            <motion.article
              key={step.id}
              className="card relative flex h-full flex-col gap-4 rounded-3xl border-primary/10 bg-white p-8 text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                {step.icon}
              </span>
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">STEP {step.id}</span>
                <h3 className="mt-2 text-xl font-semibold text-dark">{step.title}</h3>
              </div>
              <p className="text-sm text-gray md:text-base">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
