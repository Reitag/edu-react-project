"use client";

import { Dish } from "../../components/Dish/Dish";
import { useRequest } from "../../hooks/useRequest";
import { getDish } from "../../redux/entities/dishes/get-dishes";
import { RequestStatus } from "../../components/RequestStatus/RequestStatus";

export const DishPage = ({ dishId }) => {
  const requestDish = useRequest(getDish, dishId);

  return (
    <RequestStatus statuses={requestDish}>
      <Dish id={dishId} />
    </RequestStatus>
  );
};
