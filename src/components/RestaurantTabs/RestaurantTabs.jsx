import { useState } from "react";
import { useSelector } from "react-redux";
import { selectRestaurantIds } from "../../redux/entities/restaurants/slice";
import { RestaurantTab } from "./RestaurantTab";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTabs = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeId, setActiveId] = useState(restaurantIds[0]);

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {restaurantIds.map((id) => (
          <RestaurantTab
            key={id}
            id={id}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
      {activeId && <RestaurantCard restaurantId={activeId} />}
    </div>
  );
};
