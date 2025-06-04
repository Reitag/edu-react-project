import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../DishCounter/DishCounter";

export const Dish = ({ id }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) return null;

  return (
    <>
      {dish.name}
      <DishCounter />
    </>
  );
};
