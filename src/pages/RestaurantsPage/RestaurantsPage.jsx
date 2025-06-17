import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { RequestStatus } from "../../components/RequestStatus/RequestStatus";
import { Outlet } from "react-router";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../hooks/useRequest";

export const RestaurantsPage = () => {
  const requestRestaurants = useRequest(getRestaurants);

  return (
    <RequestStatus statuses={requestRestaurants}>
      <RestaurantTabs />
      <Outlet />
    </RequestStatus>
  );
};
