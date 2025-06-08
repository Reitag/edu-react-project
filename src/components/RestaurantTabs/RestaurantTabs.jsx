import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";
import { RestaurantTab } from "./RestaurantTab";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTabs = () => {
  const restaurantIds = useSelector(selectRestaurantIds);

  return (
    <>
      <div className={styles.tabList}>
        {restaurantIds.map((restaurantId) => (
          <RestaurantTab key={restaurantId} restaurantId={restaurantId} />
        ))}
      </div>
    </>
  );
};
