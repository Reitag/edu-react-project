import { Header } from "../widgets/Header/Header";
import { Footer } from "../widgets/Footer/Footer";
import { ProgressBar } from "./ProgressBar/ProgressBar";

export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <Header />
      {children}
      <Footer />
    </>
  );
};
