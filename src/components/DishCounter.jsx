import { useDishCounter } from "../hooks/useDishCounter";

export const DishCounter = () => {
  const [count, onIncrement, onDecrement] = useDishCounter();

  return (
    <div>
      <span>{count} </span>
      <button onClick={() => onDecrement()}>-</button>
      <button onClick={() => onIncrement()}>+</button>
    </div>
  );
};
