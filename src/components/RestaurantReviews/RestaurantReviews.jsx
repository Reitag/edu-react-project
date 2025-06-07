import { Review } from "./Review";
import styles from "./RestaurantReviews.module.css";

export const RestaurantReviews = ({ reviewIds }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviewIds.map((id) => (
          <li key={id} className={styles.reviewsItem}>
            <Review id={id} />
          </li>
        ))}
      </ul>
    </>
  );
};
