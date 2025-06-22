import { useParams } from "next/navigation";
import { Dish } from "../../components/Dish/Dish";
import { useRequest } from "../../hooks/useRequest";
import { getDish } from "../../redux/entities/dishes/get-dishes";
import { RequestStatus } from "../../components/RequestStatus/RequestStatus";

export const DishPage = () => {
  const params = useParams();
  const requestDish = useRequest(getDish, params.dishId);

  return (
    <RequestStatus statuses={requestDish}>
      <Dish id={params.dishId} />
    </RequestStatus>
  );
};
