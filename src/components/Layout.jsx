import { Header } from "../widgets/Header";
import { Footer } from "../widgets/Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
