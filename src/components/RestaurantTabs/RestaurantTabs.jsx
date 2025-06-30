import { RestaurantTab } from "./RestaurantTab";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTabs = ({ restaurants, children }) => {
  return (
    <>
      <div className={styles.tabList}>
        {restaurants.map((restaurant) => (
          <RestaurantTab key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
      <div>{children}</div>
    </>
  );
};
