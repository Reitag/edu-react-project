import { useState } from "react";
import { restaurants } from "../../../materials/mock";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import cn from "classnames";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTabs = () => {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeId
  );

  const handleTabs = (id) => {
    if (id !== activeId) {
      setActiveId(id);
    }
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {restaurants.map(({ id, name }) => (
          <button
            key={id}
            className={cn(styles.tabButton, {
              [styles.tabButtonActive]: id === activeId,
            })}
            onClick={() => handleTabs(id)}
          >
            {name}
          </button>
        ))}
      </div>
      {activeRestaurant && (
        <RestaurantCard
          name={activeRestaurant.name}
          menu={activeRestaurant.menu}
          reviews={activeRestaurant.reviews}
        />
      )}
    </div>
  );
};
