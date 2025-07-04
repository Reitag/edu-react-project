import { RestaurantReviewsContainer } from "../../../../components/RestaurantReviews/RestaurantReviewsContainer";
import { UsersContext } from "../../../../components/UsersContext/UsersContext";
import { getUsers } from "../../../../services/get-users";
import { getReviewsByRestaurantId } from "../../../../services/get-reviews-by-restaurant-id";
import { notFound } from "next/navigation";

const Page = async ({ params }) => {
  const { restaurantId } = await params;

  const [users, reviews] = await Promise.all([
    getUsers(),
    getReviewsByRestaurantId(restaurantId),
  ]);

  const { error, data } = reviews;
  if (error) {
    throw new Error(error);
  }

  if (!data) {
    return notFound();
  }

  return (
    <UsersContext users={users}>
      <RestaurantReviewsContainer restaurantId={restaurantId} reviews={data} />
    </UsersContext>
  );
};

export default Page;
