"use client";

import * as React from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextValue {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
}

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = React.useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">("light");

  const applyTheme = React.useCallback((nextTheme: Theme) => {
    const root = document.documentElement;
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = nextTheme === "dark" || (nextTheme === "system" && systemDark);

    root.classList.toggle("dark", isDark);
    setResolvedTheme(isDark ? "dark" : "light");
  }, []);

  React.useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme | null) || "system";
    setThemeState(saved);
    applyTheme(saved);

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemChange = () => {
      const current = (localStorage.getItem("theme") as Theme | null) || "system";
      if (current === "system") applyTheme("system");
    };

    mediaQuery.addEventListener("change", handleSystemChange);
    return () => mediaQuery.removeEventListener("change", handleSystemChange);
  }, [applyTheme]);

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      localStorage.setItem("theme", nextTheme);
      applyTheme(nextTheme);
    },
    [applyTheme]
  );

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within Providers");
  }
  return context;
}