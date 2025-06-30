import { Layout } from "../components/Layout/Layout";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";
import { UserContext } from "../components/UserContext/UserContext";
import { Providers } from "../components/Providers/Providers";
import "../styles/globals.css";

export const metadata = {
  title: "Next js app",
  description: "restaurants app",
};

export const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeContext>
            <UserContext>
              <Layout>{children}</Layout>
            </UserContext>
          </ThemeContext>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
