import { useDishCounter } from "../hooks/useDishCounter";
import { Counter } from "./Counter";

export const DishCounter = () => {
  const [count, onIncrement, onDecrement] = useDishCounter();

  return (
    <Counter
      count={count}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  );
};
