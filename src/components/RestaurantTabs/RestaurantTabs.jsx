import { useState } from "react";
import { useSelector } from "react-redux";
import {
  selectRestaurantIds,
  selectRestaurantById,
} from "../../redux/entities/restaurants/slice";
import { Tab } from "../Tab/Tab";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTabs = () => {
  const restaurantIds = useSelector(selectRestaurantIds);
  const [activeId, setActiveId] = useState(restaurantIds[0]);

  const activeRestaurant = useSelector((state) =>
    selectRestaurantById(state, activeId)
  );

  return (
    <div className={styles.tabs}>
      <div className={styles.tabList}>
        {restaurantIds.map((id) => (
          <Tab key={id} id={id} activeId={activeId} setActiveId={setActiveId} />
        ))}
      </div>
      {activeRestaurant && (
        <RestaurantCard restaurantId={activeRestaurant.id} />
      )}
    </div>
  );
};
