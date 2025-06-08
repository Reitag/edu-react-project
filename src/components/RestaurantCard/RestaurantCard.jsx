import { NavLink, Outlet } from "react-router";
import { useCurrentRestaurant } from "../../hooks/useCurrentRestaurant";
import cn from "classnames";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = () => {
  const restaurant = useCurrentRestaurant();
  if (!restaurant) return null;

  const { name } = restaurant;

  return (
    <>
      <h1>{name}</h1>
      <div className={styles.sections}>
        <NavLink
          to="menu"
          end
          className={({ isActive }) =>
            cn(styles.tabButton, {
              [styles.tabButtonActive]: isActive,
            })
          }
        >
          Меню
        </NavLink>

        <NavLink
          to="reviews"
          className={({ isActive }) =>
            cn(styles.tabButton, {
              [styles.tabButtonActive]: isActive,
            })
          }
        >
          Отзывы
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
