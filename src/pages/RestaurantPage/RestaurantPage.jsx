import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { Outlet } from "react-router";

export const RestaurantPage = () => {
  return (
    <>
      <RestaurantTabs />
      <Outlet />
    </>
  );
};
