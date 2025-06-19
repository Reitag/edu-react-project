import { useCurrentRestaurant } from "../../hooks/useCurrentRestaurant";
import { Review } from "./Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { useGetReviewsByRestaurantIdQuery } from "../../redux/api";
import { useAddReviewMutation } from "../../redux/api";
import { useUserContext } from "../../hooks/useUserContext";
import styles from "./RestaurantReviews.module.css";

export const RestaurantReviews = () => {
  const restaurant = useCurrentRestaurant();
  const ctx = useUserContext();
  const [addReviewMutation] = useAddReviewMutation();
  const { data: reviews = [], isLoading } = useGetReviewsByRestaurantIdQuery(
    restaurant?.id,
    { skip: !restaurant?.id }
  );

  if (!restaurant || !ctx) return null;

  const { user } = ctx;

  const handleAddReview = (review) => {
    addReviewMutation({
      restaurantId: restaurant?.id,
      review: {
        userId: user.id,
        text: review.review,
        rating: review.rating,
      },
    });
  };

  if (isLoading) return <p>Loading reviews...</p>;

  return (
    <>
      <h3>Отзывы</h3>
      <ul className={styles.reviewsList}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.reviewsItem}>
            <Review id={review.id} nameAsLink />
          </li>
        ))}
      </ul>
      <ReviewForm onSubmitForm={handleAddReview} />
    </>
  );
};
