import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../DishCounter/DishCounter";

export const Dish = ({ id, nameAsLink = false }) => {
  const dish = useSelector((state) => selectDishById(state, id));

  if (!dish) return null;

  return (
    <>
      {nameAsLink ? (
        <NavLink to={`/dish/${id}`}>{dish.name}</NavLink>
      ) : (
        dish.name
      )}
      <DishCounter dishId={id} />
    </>
  );
};
