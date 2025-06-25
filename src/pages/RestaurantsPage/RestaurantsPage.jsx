"use client";

import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { RequestStatus } from "../../components/RequestStatus/RequestStatus";
import { getRestaurants } from "../../redux/entities/restaurants/get-restaurants";
import { useRequest } from "../../hooks/useRequest";

export const RestaurantsPage = ({ children }) => {
  const requestRestaurants = useRequest(getRestaurants);

  return (
    <RequestStatus statuses={requestRestaurants}>
      <RestaurantTabs />
      {children}
    </RequestStatus>
  );
};
