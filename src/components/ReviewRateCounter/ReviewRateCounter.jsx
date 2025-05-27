import { Counter } from "../Counter/Counter";
import styles from "./ReviewRateCounter.module.css";

export const ReviewRateCounter = ({ rating, onChange }) => {
  const increment = () => {
    if (rating < 5) onChange(rating + 1);
  };

  const decrement = () => {
    if (rating > 1) onChange(rating - 1);
  };

  return (
    <div className={styles.rateWrapper}>
      <Counter count={rating} onIncrement={increment} onDecrement={decrement} />
    </div>
  );
};
