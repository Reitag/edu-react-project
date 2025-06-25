"use client";

import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { RequestStatus } from "../RequestStatus/RequestStatus";
import { LinkWrapper } from "./../LinkWrapper/LinkWrapper";
import { useRequest } from "../../hooks/useRequest";
import { getDishByRestaurantId } from "../../redux/entities/dishes/get-dishes";
import { getReviewsByRestaurantId } from "../../redux/entities/reviews/get-reviews";
import { getUsers } from "../../redux/entities/users/get-users";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ restaurantId, children }) => {
  const requestDishes = useRequest(getDishByRestaurantId, restaurantId);
  const requestReviews = useRequest(getReviewsByRestaurantId, restaurantId);
  const requestUsers = useRequest(getUsers);

  return (
    <>
      <RequestStatus statuses={[requestDishes, requestReviews, requestUsers]}>
        <RestaurantInfo />
        <div className={styles.sections}>
          <LinkWrapper
            to={`/restaurants/${restaurantId}/menu`}
            end
            styles={styles}
          >
            Меню
          </LinkWrapper>
          <LinkWrapper
            to={`/restaurants/${restaurantId}/reviews`}
            styles={styles}
          >
            Отзывы
          </LinkWrapper>
        </div>
        {children}
      </RequestStatus>
    </>
  );
};
