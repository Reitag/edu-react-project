import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { RequestStatus } from "../../components/RequestStatus/RequestStatus";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";
import { useRequest } from "../../hooks/useRequest";

export const RestaurantPage = () => {
  const restaurants = useSelector((state) => selectRestaurantIds(state));
  const requestRestaurants = useRequest(
    getRestaurants,
    undefined,
    restaurants.length > 0
  );

  return (
    <RequestStatus statuses={requestRestaurants}>
      <RestaurantTabs />
      <Outlet />
    </RequestStatus>
  );
};
