"use client";

import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/entities/cart/slice";

export const Cart = () => {
  const items = useSelector(selectCartItems);

  if (!items || items.length === 0) return <p>Cart is empty</p>;

  return (
    <ul>
      {items.map(({ id, amount }) => (
        <li key={id}>
          {id} - {amount}
        </li>
      ))}
    </ul>
  );
};
