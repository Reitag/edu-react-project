"use client";

import { useSelector } from "react-redux";
import { selectUserById } from "../../redux/entities/users/slice";

export const Review = ({ review }) => {
  const user = useSelector((state) => selectUserById(state, review.userId));
  if (!review) return null;

  return (
    <div>
      <p>
        <strong>{user?.name ?? "Anonymous"}:</strong> {review.text}
      </p>
      <p>
        <strong>Rating:</strong> {review.rating}
      </p>
    </div>
  );
};
