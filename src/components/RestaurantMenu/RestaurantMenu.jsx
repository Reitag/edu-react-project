import { Dish } from "../Dish/Dish";
import { getRestaurantById } from "../../services/get-restaurant-by-id";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = async ({ restaurantId }) => {
  const restaurant = await getRestaurantById(restaurantId);
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
