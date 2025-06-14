import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { NavLinkWrapper } from "./../NavLinkWrapper/NavLinkWrapper";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTab = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  return (
    <NavLinkWrapper to={restaurant.id} styles={styles}>
      {restaurant.name}
    </NavLinkWrapper>
  );
};
