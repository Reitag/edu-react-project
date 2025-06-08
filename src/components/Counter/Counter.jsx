import styles from "./Counter.module.css";

export const Counter = ({ value, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter}>
      <span className={styles.count}>{value}</span>
      <button className={styles.button} onClick={onDecrement}>
        -
      </button>
      <button className={styles.button} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
