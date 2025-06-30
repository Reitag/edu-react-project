"use client";

import { useUsersContext } from "../../hooks/useUsersContext";
import { notFound } from "next/navigation";

export const Review = ({ review }) => {
  const users = useUsersContext();

  const { error, data } = users;

  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  const user = data.find((u) => u.id === review.userId);

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
