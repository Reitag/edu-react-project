import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../DishCounter/DishCounter";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = ({ menuIds }) => {
  const selectDishes = createSelector(
    (state) => state,
    (state) => menuIds.map((id) => selectDishById(state, id))
  );
  const dishes = useSelector(selectDishes);

  return (
    <>
      <h3>Меню</h3>
      <ul className={styles.menuList}>
        {dishes.map((dish) =>
          dish ? (
            <li key={dish.id} className={styles.menuItem}>
              {dish.name}
              <DishCounter />
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};
