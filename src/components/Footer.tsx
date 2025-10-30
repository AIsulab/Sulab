export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-2 px-6 py-8 text-center text-xs text-slate-500">
        <p>SULAB © {new Date().getFullYear()}</p>
        <p>새로운 홈페이지가 오픈되면 더 많은 소식을 전해드릴게요.</p>
      </div>
    </footer>
  );
}

export default Footer;
