export const Counter = ({ count, onIncrement, onDecrement }) => {
  return (
    <div>
      <span>{count} </span>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  );
};
