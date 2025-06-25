import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";

export const RestaurantCardPage = async ({ children, params }) => {
  const { restaurantId } = await params;

  return (
    <RestaurantCard restaurantId={restaurantId}>{children}</RestaurantCard>
  );
};
