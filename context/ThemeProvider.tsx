"use client";

import { createContext, useContext, useEffect, useState } from "react";

type TypeTheme = "light" | "dark";

const ThemeContext = createContext({
  theme: "light", // or 'dark'
  toggleTheme: () => {}, // a function to toggle the theme
});

/**
 * Provides the theme context to the entire application.
 *
 * @param {{children: React.ReactNode}} props The component props, including the children to render.
 * @returns {JSX.Element} A ThemeProvider component that wraps the children in the theme context.
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<TypeTheme>("light");

  useEffect(() => {
    const storedTheme = getThemeFromLocalStorage();
    setTheme(storedTheme);
    document.documentElement.classList.toggle("dark", storedTheme === "dark");
  }, []);

  const getThemeFromLocalStorage = (): TypeTheme => {
    const theme = localStorage.getItem("theme");
    return theme === "light" || theme === "dark" ? theme : "light";
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easy access
export const useTheme = () => useContext(ThemeContext);