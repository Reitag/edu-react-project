import { Layout } from "./Layout/Layout";
import { RestaurantTabs } from "./RestaurantTabs/RestaurantTabs";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { UserContext } from "./UserContext/UserContext";

export const App = () => {
  return (
    <ThemeContext>
      <UserContext>
        <Layout>
          <RestaurantTabs />
        </Layout>
      </UserContext>
    </ThemeContext>
  );
};
