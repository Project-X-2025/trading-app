"use client";
import { useTheme } from "@/context/ThemeProvider";

// Client-side interactivity is required for this button

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="px-2 py-1 rounded border font-mono text-[10px] transition-colors whitespace-nowrap border-[#fff] text-[#fff] hover:bg-[#fff]/5 dark:border-[#00ff00] dark:text-[#00ff00] dark:hover:bg-[#00ff00]/5 sm:px-3 sm:py-1.5 sm:text-xs"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
};

export default ThemeToggleButton;
