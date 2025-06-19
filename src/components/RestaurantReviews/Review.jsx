export const Review = ({ user, review }) => {
  if (!user || !review) return null;

  return (
    <div>
      <p>
        <strong>{user.name ?? "Anonymous"}:</strong> {review.text}
      </p>
      <p>
        <strong>Rating:</strong> {review.rating}
      </p>
    </div>
  );
};
