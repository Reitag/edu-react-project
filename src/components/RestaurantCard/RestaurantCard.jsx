import { Outlet } from "react-router";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { NavLinkWrapper } from "./../NavLinkWrapper/NavLinkWrapper";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = () => {
  return (
    <>
      <RestaurantInfo />
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
