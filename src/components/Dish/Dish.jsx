import { useSelector } from "react-redux";
import { NavLink } from "react-router";
import { selectDishById } from "../../redux/entities/dishes/slice";
import { DishCounter } from "../DishCounter/DishCounter";
import styles from "./Dish.module.css";

export const Dish = ({ id, nameAsLink = false }) => {
  const dish = useSelector((state) => selectDishById(state, id));
  if (!dish) return null;

  const { ingredients, name, price } = dish;

  return (
    <div className={styles.dish}>
      <h2>
        {nameAsLink ? <NavLink to={`/dish/${id}`}>{name}</NavLink> : name}
      </h2>
      <p>
        <strong>Price:</strong> ${price}
      </p>
      <p>
        <strong>Ingredients:</strong>
      </p>
      <ul>
        {ingredients?.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <DishCounter dishId={id} />
    </div>
  );
};
