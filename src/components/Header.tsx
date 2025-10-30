import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = [

  { id: "services", label: "서비스" },

  { id: "ai-search", label: "AI 검색" },

  { id: "portfolio", label: "포트폴리오" },

  { id: "process", label: "프로세스" },

  { id: "contact", label: "문의" }

];



const scrollToSection = (sectionId: string) => {

  const node = document.getElementById(sectionId);

  if (node) {

    node.scrollIntoView({ behavior: "smooth", block: "start" });

  }

};



export function Header() {

  return (

    <header className="sticky inset-x-0 top-0 z-30 bg-white/80 backdrop-blur shadow-sm dark:bg-dark/80">

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-dark dark:text-slate-100 lg:px-6">

        <button

          type="button"

          aria-label="Ȩ �������� �̵�"

          onClick={() => scrollToSection("hero")}

          className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-dark dark:text-white"

        >

          <Image

            src="/logo.svg"

            alt="SULAB 로고"

            width={32}

            height={32}

            priority

          />

          <span>SULAB</span>

        </button>

        <nav className="hidden items-center gap-6 text-sm font-medium text-gray dark:text-slate-300 md:flex">

          {sections.map((section) => (

            <button

              key={section.id}

              type="button"

              aria-label={`${section.label} 섹션으로 이동`}

              onClick={() => scrollToSection(section.id)}

              className="cursor-pointer transition hover:text-primary dark:hover:text-primary"

            >

              {section.label}

            </button>

          ))}

        </nav>

        <ThemeToggle />

      </div>

    </header>

  );

}

