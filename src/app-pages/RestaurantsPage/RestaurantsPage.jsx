import { RestaurantTabs } from "../../components/RestaurantTabs/RestaurantTabs";
import { getRestaurants } from "../../services/get-restaurants";
import { notFound } from "next/navigation";

export const RestaurantsPage = async ({ children }) => {
  const { error, data } = await getRestaurants();

  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  return <RestaurantTabs restaurants={data}>{children}</RestaurantTabs>;
};
