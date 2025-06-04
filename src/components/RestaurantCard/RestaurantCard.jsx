import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import { RestaurantMenu } from "../RestaurantMenu/RestaurantMenu";
import { RestaurantReviews } from "../RestaurantReviews/RestaurantReviews";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ restaurantId }) => {
  const restaurant = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );

  if (!restaurant) return null;

  return (
    <div className={styles.card}>
      <h2>{restaurant.name}</h2>
      <RestaurantMenu menuIds={restaurant.menu} />
      {Boolean(restaurant.reviews.length) && (
        <RestaurantReviews reviewIds={restaurant.reviews} />
      )}
      <ReviewForm />
    </div>
  );
};
