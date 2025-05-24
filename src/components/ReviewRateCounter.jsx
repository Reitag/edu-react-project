import { Counter } from "./Counter";

export const ReviewRateCounter = ({ rating, onChange }) => {
  const increment = () => {
    if (rating < 5) onChange(rating + 1);
  };

  const decrement = () => {
    if (rating > 1) onChange(rating - 1);
  };

  return (
    <Counter count={rating} onIncrement={increment} onDecrement={decrement} />
  );
};
