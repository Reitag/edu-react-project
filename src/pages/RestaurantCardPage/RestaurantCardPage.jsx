import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { useParams } from "react-router";

export const RestaurantCardPage = () => {
  const { restaurantId } = useParams();

  return <RestaurantCard restaurantId={restaurantId} />;
};
