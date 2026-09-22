import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

export const useTheme = () => {
  // A stable server/client initial value prevents hydration mismatches on
  // pre-rendered pages. The saved preference is applied immediately after mount.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("47accountants_theme") as Theme | null;
    if (savedTheme === "light") setTheme("light");
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("47accountants_theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
};
