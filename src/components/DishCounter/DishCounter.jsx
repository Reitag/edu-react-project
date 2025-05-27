import { useDishCounter } from "../../hooks/useDishCounter";
import { Counter } from "../Counter/Counter";
import cn from "classnames";
import styles from "./DishCounter.module.css";

export const DishCounter = () => {
  const [count, onIncrement, onDecrement] = useDishCounter();

  return (
    <div
      className={cn(styles.dishCounter, {
        [styles.empty]: count === 0,
        [styles.filled]: count > 0,
      })}
    >
      <Counter
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </div>
  );
};
