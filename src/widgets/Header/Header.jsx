import { ThemeContainer } from "../../components/ThemeContext/ThemeContainer";
import { UserContainer } from "../../components/UserContext/UserContainer";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <ThemeContainer />
      <UserContainer />
    </header>
  );
};
