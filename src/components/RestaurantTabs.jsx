import { useState } from "react";
import { restaurants } from "../../materials/mock";
import { RestaurantCard } from "./RestaurantCard";

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
    <div>
      {restaurants.map(({ id, name }) => (
        <button key={id} onClick={() => handleTabs(id)}>
          {name}
        </button>
      ))}
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
