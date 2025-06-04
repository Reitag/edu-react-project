import { Layout } from "./Layout/Layout";
import { RestaurantTabs } from "./RestaurantTabs/RestaurantTabs";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { UserContext } from "./UserContext/UserContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContext>
        <UserContext>
          <Layout>
            <RestaurantTabs />
          </Layout>
        </UserContext>
      </ThemeContext>
    </Provider>
  );
};
