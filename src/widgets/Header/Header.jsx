import { ThemeSwitcher } from "../../components/ThemeContext/ThemeSwitcher";
import { UserLogger } from "../../components/UserContext/UserLogger";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeSwitcher />
      <UserLogger />
    </header>
  );
};
