import { useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { selectReviewById } from "../../redux/entities/reviews/slice";
import styles from "./RestaurantReviews.module.css";

export const RestaurantReviews = ({ reviewIds }) => {
  const selectReviews = createSelector(
    (state) => state,
    (state) => reviewIds.map((id) => selectReviewById(state, id))
  );
  const reviews = useSelector(selectReviews);

  return (
    <>
      <h3>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((review) =>
          review ? (
            <li key={review.id} className={styles.reviewsItem}>
              {review.text}
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};
