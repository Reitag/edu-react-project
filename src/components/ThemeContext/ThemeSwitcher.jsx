import { useThemeContext } from "../../hooks/useThemeContext";

export const ThemeSwitcher = () => {
  const ctx = useThemeContext();
  if (!ctx) return null;

  const { theme, toggleTheme } = ctx;
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === "default" ? "Alternative" : "Default"} Theme
    </button>
  );
};
