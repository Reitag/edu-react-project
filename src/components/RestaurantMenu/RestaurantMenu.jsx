import { Dish } from "../Dish/Dish";
import { getRestaurantById } from "../../services/get-restaurant-by-id";
import { notFound } from "next/navigation";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = async ({ restaurantId }) => {
  const { error, data } = await getRestaurantById(restaurantId);

  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  const { menu } = data;

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
