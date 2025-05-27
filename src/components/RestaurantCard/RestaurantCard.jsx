import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ name, menu, reviews }) => {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <RestaurantMenu menu={menu} />
      {Boolean(reviews.length) && <RestaurantReviews reviews={reviews} />}
      <ReviewForm />
    </div>
  );
};
