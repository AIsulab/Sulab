import Image from "next/image";
import { ThemeToggle } from "@/components/ThemeToggle";

const sections = [

  { id: "services", label: "?쒕퉬?? },

  { id: "ai-search", label: "AI 寃?? },

  { id: "portfolio", label: "?ы듃?대━?? },

  { id: "process", label: "?꾨줈?몄뒪" },

  { id: "contact", label: "臾몄쓽" }

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

          aria-label="홈 占쏙옙占쏙옙占쏙옙占쏙옙 占싱듸옙"

          onClick={() => scrollToSection("hero")}

          className="flex cursor-pointer items-center gap-2 text-lg font-semibold text-dark dark:text-white"

        >

          <Image

            src="/logo.svg"

            alt="SULAB 濡쒓퀬"

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

              aria-label={`${section.label} ?뱀뀡?쇰줈 ?대룞`}

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

