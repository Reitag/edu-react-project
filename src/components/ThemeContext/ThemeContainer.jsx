import { ThemeSwitcher } from "./ThemeSwitcher";
import styles from "./Theme.module.css";

export const ThemeContainer = () => {
  return (
    <div className={styles.themeContainer}>
      <ThemeSwitcher />
    </div>
  );
};
