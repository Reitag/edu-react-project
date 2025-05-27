import { DishCounter } from "../DishCounter/DishCounter";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul className={styles.menuList}>
        {menu.map((dish) => (
          <li key={dish.id} className={styles.menuItem}>
            {dish.name}
            <DishCounter />
          </li>
        ))}
      </ul>
    </>
  );
};
