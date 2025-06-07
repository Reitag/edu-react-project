import { Dish } from "../Dish/Dish";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = ({ menuIds }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul className={styles.menuList}>
        {menuIds.map((id) => (
          <li key={id} className={styles.menuItem}>
            <Dish id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
