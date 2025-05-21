import { DishCounter } from "./DishCounter";

export const RestaurantMenu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      {menu.map((dish) => (
        <ul key={dish.id}>
          <li>{dish.name}</li>
          <DishCounter />
        </ul>
      ))}
    </>
  );
};
