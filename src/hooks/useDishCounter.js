import { useState } from "react";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useDishCounter = () => {
  const [count, setCount] = useState(0);

  const onIncrement = () => {
    setCount((prevCount) =>
      prevCount < MAX_COUNT ? prevCount + 1 : prevCount
    );
  };

  const onDecrement = () => {
    setCount((prevCount) =>
      prevCount > MIN_COUNT ? prevCount - 1 : prevCount
    );
  };

  return [count, onIncrement, onDecrement];
};
