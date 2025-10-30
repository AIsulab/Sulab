import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      aria-label="테마 전환"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-sm transition hover:bg-primary/10"
    >
      {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
    </button>
  );
}
