import { useEffect, useState } from "react";
import { Context } from "../../hooks/useThemeContext";
import { DEFAULT_THEME } from "../../themes/default";
import { ALTERNATIVE_THEME } from "../../themes/alternative";

const themes = {
  default: DEFAULT_THEME,
  alternative: ALTERNATIVE_THEME,
};

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    const root = document.documentElement;
    const selectedTheme = themes[theme];

    if (selectedTheme) {
      for (const key in selectedTheme) {
        root.style.setProperty(key, selectedTheme[key]);
      }
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "default" ? "alternative" : "default"));
  };

  return <Context value={{ theme, toggleTheme }}>{children}</Context>;
};
