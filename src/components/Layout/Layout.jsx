import { Outlet } from "react-router";
import { Header } from "../../widgets/Header/Header";
import { Footer } from "../../widgets/Footer/Footer";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { Cart } from "../Cart/Cart";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layoutBackground}>
      <ProgressBar />
      <Header />
      <div className={styles.container}>
        <Outlet />
      </div>
      <Cart />
      <Footer />
    </div>
  );
};
