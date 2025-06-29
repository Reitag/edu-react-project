import { Layout } from "../components/Layout/Layout";
import { ThemeContext } from "../components/ThemeContext/ThemeContext";
import { UserContext } from "../components/UserContext/UserContext";
import { Providers } from "../components/Providers/Providers";

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
