import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {
  return (
    <div className={styles.layoutBackground}>
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};
