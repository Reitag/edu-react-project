import { RestaurantMenu } from "./RestaurantMenu";
import { RestaurantReviews } from "./RestaurantReviews";

export const RestaurantCard = ({ name, menu, reviews }) => {
  return (
    <>
      <h2>{name}</h2>
      <RestaurantMenu menu={menu} />
      <RestaurantReviews reviews={reviews} />
    </>
  );
};
