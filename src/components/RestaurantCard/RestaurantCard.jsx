import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ restaurantId }) => {
  const restaurant = useSelector(
    (state) => selectRestaurantById(state, restaurantId) || {}
  );

  if (!restaurant) return null;

  const { name, menu, reviews } = restaurant;

  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <RestaurantMenu menuIds={menu} />
      {Boolean(reviews.length) && <RestaurantReviews reviewIds={reviews} />}
      <ReviewForm />
    </div>
  );
};
