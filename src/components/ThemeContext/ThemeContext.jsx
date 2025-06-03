import { useEffect, useState } from "react";
import { Context } from "../../hooks/useThemeContext";
import "../../variables.css";
import "./Theme.module.css";

export const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("default");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "default" ? "alternative" : "default"));
  };

  return <Context value={{ theme, toggleTheme }}>{children}</Context>;
};
