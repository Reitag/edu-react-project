"use client";

import { useDishCounter } from "../../hooks/useDishCounter";
import { Counter } from "../Counter/Counter";
import { useUserContext } from "../../hooks/useUserContext";
import cn from "classnames";
import styles from "./DishCounter.module.css";

export const DishCounter = ({ dishId }) => {
  const { value, onIncrement, onDecrement } = useDishCounter(dishId);

  const { user } = useUserContext();
  if (!user) return null;

  return (
    <div
      className={cn(styles.dishCounter, {
        [styles.empty]: value === 0,
        [styles.filled]: value > 0,
      })}
    >
      <Counter
        value={value}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};
