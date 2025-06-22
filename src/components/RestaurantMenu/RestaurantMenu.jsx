"use client";

import { useCurrentRestaurant } from "../../hooks/useCurrentRestaurant";
import { Dish } from "../Dish/Dish";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = () => {
  const restaurant = useCurrentRestaurant();
  if (!restaurant) return null;

  const { menu } = restaurant;

  return (
    <>
      <h3>Меню</h3>
      <ul className={styles.menuList}>
        {menu.map((id) => (
          <li key={id} className={styles.menuItem}>
            <Dish id={id} nameAsLink />
          </li>
        ))}
      </ul>
    </>
  );
};
