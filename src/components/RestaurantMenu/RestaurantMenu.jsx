import { Dish } from "../Dish/Dish";
import { getDishesByRestaurantId } from "../../services/get-dishes-by-restaurant-id";
import { notFound } from "next/navigation";
import styles from "./RestaurantMenu.module.css";

export const RestaurantMenu = async ({ restaurantId }) => {
  const { error, data } = await getDishesByRestaurantId(restaurantId);

  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  return (
    <>
      <h3>Меню</h3>
      <ul className={styles.menuList}>
        {data.map((dish) => (
          <li key={dish.id} className={styles.menuItem}>
            <Dish id={dish.id} nameAsLink />
          </li>
        ))}
      </ul>
    </>
  );
};
