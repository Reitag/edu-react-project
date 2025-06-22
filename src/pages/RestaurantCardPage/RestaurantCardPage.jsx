"use client";

import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { useParams } from "next/navigation";

export const RestaurantCardPage = ({ children }) => {
  const params = useParams();

  return (
    <RestaurantCard restaurantId={params.restaurantId}>
      {children}
    </RestaurantCard>
  );
};
