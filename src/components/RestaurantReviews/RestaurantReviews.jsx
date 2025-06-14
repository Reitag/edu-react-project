import { useCurrentRestaurant } from "../../hooks/useCurrentRestaurant";
import { Review } from "./Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from "./RestaurantReviews.module.css";

export const RestaurantReviews = () => {
  const restaurant = useCurrentRestaurant();
  if (!restaurant) return null;

  const { reviews } = restaurant;

  return (
    <>
      <h3>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((id) => (
          <li key={id} className={styles.reviewsItem}>
            <Review id={id} nameAsLink />
          </li>
        ))}
      </ul>
      <ReviewForm />
    </>
  );
};
