import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { LinkWrapper } from "./../LinkWrapper/LinkWrapper";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTab = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  return (
    <LinkWrapper to={`/restaurants/${restaurant.id}`} styles={styles}>
      {restaurant.name}
    </LinkWrapper>
  );
};
