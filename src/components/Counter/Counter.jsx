import styles from "./Counter.module.css";

export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.counter}>
      <span className={styles.count}>{count}</span>
      <button className={styles.button} onClick={onDecrement}>
        -
      </button>
      <button className={styles.button} onClick={onIncrement}>
        +
      </button>
    </div>
  );
};
