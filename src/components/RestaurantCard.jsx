import { RestaurantMenu } from "./RestaurantMenu";
import { RestaurantReviews } from "./RestaurantReviews";
import { ReviewForm } from "./ReviewForm";

export const RestaurantCard = ({ name, menu, reviews }) => {
  return (
    <>
      <h2>{name}</h2>
      <RestaurantMenu menu={menu} />
      {Boolean(reviews.length) && <RestaurantReviews reviews={reviews} />}
      <ReviewForm />
    </>
  );
};
