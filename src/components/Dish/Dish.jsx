import Link from "next/link";
import { getDishById } from "../../services/get-dish-by-id";
import { DishCounter } from "../DishCounter/DishCounter";
import { notFound } from "next/navigation";
import styles from "./Dish.module.css";

export const Dish = async ({ id, nameAsLink = false }) => {
  const { error, data } = await getDishById(id);

  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  const { name, price, ingredients } = data;

  return (
    <div className={styles.dish}>
      <h2>{nameAsLink ? <Link href={`/dish/${id}`}>{name}</Link> : name}</h2>
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
