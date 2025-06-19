import { useSelector } from "react-redux";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import { selectUserById } from "../../redux/entities/users/slice";

export const Review = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));
  const user = useSelector((state) =>
    review ? selectUserById(state, review.userId) : null
  );

  if (!review) return null;

  return (
    <div>
      <p>
        <strong>{user?.name ?? "Anonymous"}:</strong> {review.text}
      </p>
      <p>
        <strong>Raiting: </strong>
        {review.rating}
      </p>
    </div>
  );
};
