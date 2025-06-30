import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Review } from "./Review";

export const RestaurantReviews = ({ reviews, onSubmitForm }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <Review review={review} />
          </li>
        ))}
      </ul>
      <ReviewForm onSubmitForm={onSubmitForm} />
    </>
  );
};
