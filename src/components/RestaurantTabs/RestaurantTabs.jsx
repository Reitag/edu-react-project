import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantById,
} from "../../redux/entities/restaurants/slice";

import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import cn from "classnames";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTabs = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const restaurantsMap = useSelector((state) => state.restaurantSlice.entities);

  const [activeId, setActiveId] = useState(restaurantIds[0]);

  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, activeId)
  );

  const handleTabs = (id) => {
    if (id !== activeId) {
      setActiveId(id);
    }
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {restaurantIds.map((id) => {
          const restaurant = restaurantsMap[id];
          if (!restaurant) return null;

          return (
            <button
              key={restaurant.id}
              className={cn(styles.tabButton, {
                [styles.tabButtonActive]: restaurant.id === activeId,
              })}
              onClick={() => handleTabs(restaurant.id)}
            >
              {restaurant.name}
            </button>
          );
        })}
      </div>
      {activeRestaurant && (
        <RestaurantCard restaurantId={activeRestaurant.id} />
      )}
    </div>
  );
};
