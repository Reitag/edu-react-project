import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectItemAmountById,
} from "./../redux/entities/cart/slice";

const MAX_COUNT = 5;
const MIN_COUNT = 0;

export const useDishCounter = (dishId) => {
  const dispatch = useDispatch();

  const amount = useSelector((state) => selectItemAmountById(state, dishId));

  const onIncrement = useCallback(() => {
    dispatch(addToCart(dishId));
  }, [dispatch, dishId]);

  const onDecrement = useCallback(() => {
    dispatch(removeFromCart(dishId));
  }, [dispatch, dishId]);

  return {
    value: amount,
    onIncrement: amount < MAX_COUNT ? onIncrement : undefined,
    onDecrement: amount > MIN_COUNT ? onDecrement : undefined,
  };
};
