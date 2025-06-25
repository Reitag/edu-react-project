import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../redux/entities/restaurants/slice";

export const useCurrentRestaurant = () => {
  const params = useParams();
  return useSelector((state) =>
    selectRestaurantById(state, params.restaurantId)
  );
};
