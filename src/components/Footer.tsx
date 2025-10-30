const FOOTER_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#solutions" },
  { label: "Case studies", href: "#portfolio" },
  { label: "Consultation", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-900 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <a href="#overview" className="flex items-center gap-3 text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-lg font-bold text-white">
              S
            </span>
            <span className="text-lg font-semibold">SULAB Copilot</span>
          </a>
          <p className="text-sm text-slate-300">
            SULAB builds AI-powered marketing systems that connect analytics, creative, and automation.
            We help teams capture search demand and scale growth responsibly.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-sky-200">Navigate</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-sky-200">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li>Email: hello@sulab.ai</li>
            <li>Phone: +82 2-123-4567</li>
            <li>Address: 125 Wangsimni-ro, Seongdong-gu, Seoul</li>
            <li>Office hours: Mon–Fri, 10:00–18:00 KST</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SULAB. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#contact" className="transition hover:text-slate-300">
              Privacy Policy
            </a>
            <a href="#contact" className="transition hover:text-slate-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
