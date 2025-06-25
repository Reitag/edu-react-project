"use client";

import { useThemeContext } from "../../hooks/useThemeContext";
import styles from "./Theme.module.css";

export const ThemeSwitcher = () => {
  const ctx = useThemeContext();
  if (!ctx) return null;

  const { theme, toggleTheme } = ctx;
  return (
    <div onClick={toggleTheme} className={styles.button}>
      Switch to {theme === "default" ? "Alternative" : "Default"} Theme
    </div>
  );
};
