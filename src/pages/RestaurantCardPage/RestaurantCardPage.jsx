import { getDishes } from "../../redux/entities/dishes/get-dishes";
import { getReviews } from "../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../redux/entities/users/get-users";
import { selectDishIds } from "../../redux/entities/dishes/slice";
import { selectReviewIds } from "../../redux/entities/reviews/slice";
import { selectUserIds } from "../../redux/entities/users/slice";
import { RequestStatus } from "../../components/RequestStatus/RequestStatus";
import { RestaurantCard } from "../../components/RestaurantCard/RestaurantCard";
import { useParams } from "react-router";
import { useRequest } from "../../hooks/useRequest";
import { useSelector } from "react-redux";

export const RestaurantCardPage = () => {
  const { restaurantId } = useParams();

  const dishes = useSelector((state) => selectDishIds(state));
  const reviews = useSelector((state) => selectReviewIds(state));
  const users = useSelector((state) => selectUserIds(state));

  const requestDishes = useRequest(
    getDishes,
    restaurantId,
    dishes.some((id) => id.startsWith(restaurantId))
  );

  const requestReviews = useRequest(
    getReviews,
    restaurantId,
    reviews.some((id) => id.startsWith(restaurantId))
  );

  const requestUsers = useRequest(
    getUsers,
    undefined,
    users.some((id) => id.startsWith(restaurantId))
  );

  return (
    <RequestStatus statuses={[requestDishes, requestReviews, requestUsers]}>
      <RestaurantCard />
    </RequestStatus>
  );
};
