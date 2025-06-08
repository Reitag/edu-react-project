import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";

export const useCurrentRestaurant = () => {
  const { restaurantId } = useParams();
  return useSelector((state) => selectRestaurantById(state, restaurantId));
};
