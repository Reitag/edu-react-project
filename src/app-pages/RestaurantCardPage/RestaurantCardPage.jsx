import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { getRestaurantById } from "../../services/get-restaurant-by-id";
import { notFound } from "next/navigation";

export const RestaurantCardPage = async ({ restaurantId }) => {
  const { error, data } = await getRestaurantById(restaurantId);

  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  return <RestaurantCard restaurant={data} />;
};
