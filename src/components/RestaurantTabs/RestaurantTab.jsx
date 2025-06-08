import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { NavLink } from "react-router";
import cn from "classnames";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTab = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  return (
    <NavLink
      to={restaurant.id}
      className={({ isActive }) =>
        cn(styles.tabButton, {
          [styles.tabButtonActive]: isActive,
        })
      }
    >
      {restaurant.name}
    </NavLink>
  );
};
