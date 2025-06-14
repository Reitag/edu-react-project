import { Outlet } from "react-router";
import { NavLinkWrapper } from "./../NavLinkWrapper/NavLinkWrapper";
import { useCurrentRestaurant } from "../../hooks/useCurrentRestaurant";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = () => {
  const restaurant = useCurrentRestaurant();
  if (!restaurant) return null;

  const { name } = restaurant;

  return (
    <>
      <h1>{name}</h1>
      <div className={styles.sections}>
        <NavLinkWrapper to="menu" end styles={styles}>
          Меню
        </NavLinkWrapper>
        <NavLinkWrapper to="reviews" styles={styles}>
          Отзывы
        </NavLinkWrapper>
      </div>
      <Outlet />
    </>
  );
};
