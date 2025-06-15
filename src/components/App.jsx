import { Layout } from "./Layout/Layout";
import { HomePage } from "../pages/HomePage/HomePage";
import { RestaurantPage } from "../pages/RestaurantPage/RestaurantPage";
import { DishPage } from "../pages/DishPage/DishPage";
import { RestaurantCardPage } from "../pages/RestaurantCardPage/RestaurantCardPage";
import { RestaurantMenu } from "./RestaurantMenu/RestaurantMenu";
import { RestaurantReviews } from "./RestaurantReviews/RestaurantReviews";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { UserContext } from "./UserContext/UserContext";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { store } from "../redux/store";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContext>
        <UserContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="restaurants" element={<RestaurantPage />}>
                  <Route path=":restaurantId" element={<RestaurantCardPage />}>
                    <Route index element={<Navigate to="menu" replace />} />
                    <Route path="menu" element={<RestaurantMenu />} />
                    <Route path="reviews" element={<RestaurantReviews />} />
                  </Route>
                </Route>
                <Route path="dish/:dishId" element={<DishPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext>
      </ThemeContext>
    </Provider>
  );
};
