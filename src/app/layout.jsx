import { Layout } from "../components/Layout/Layout";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";
import { UserContext } from "../components/UserContext/UserContext";
import { Providers } from "../components/Providers/Providers";
import "../styles/globals.css";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata = {
  title: "Next js app",
  description: "restaurants app",
};

const RootLayout = ({ children }) => {
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
