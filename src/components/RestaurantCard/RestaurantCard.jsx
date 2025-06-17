import { Outlet } from "react-router";
import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { RequestStatus } from "../RequestStatus/RequestStatus";
import { NavLinkWrapper } from "./../NavLinkWrapper/NavLinkWrapper";
import { useRequest } from "../../hooks/useRequest";
import { getDishByRestaurantId } from "../../redux/entities/dishes/get-dishes";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../redux/entities/users/get-users";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ restaurantId }) => {
  const requestDishes = useRequest(getDishByRestaurantId, restaurantId);
  const requestReviews = useRequest(getReviewsByRestaurantId, restaurantId);
  const requestUsers = useRequest(getUsers);

  return (
    <>
      <RequestStatus statuses={[requestDishes, requestReviews, requestUsers]}>
        <RestaurantInfo />
        <div className={styles.sections}>
          <NavLinkWrapper to="menu" end styles={styles}>
            Меню
          </NavLinkWrapper>
          <NavLinkWrapper to="reviews" styles={styles}>
            Отзывы
          </NavLinkWrapper>
        </div>
        <Outlet />
      </RequestStatus>
    </>
  );
};
