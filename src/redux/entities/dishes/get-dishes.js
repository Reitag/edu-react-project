import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { selectDishIds } from "./slice";
import { URL } from "../../../shared/constants/url";

export const getDish = createFetchThunk(
  "dishes/getDish",
  (id) => `${URL}dish/${id}`
);

export const getDishByRestaurantId = createFetchThunk(
  "dishes/getDishes",
  (restaurantId) => `${URL}dishes?restaurantId=${restaurantId}`,
  (restaurantId, getState) => {
    const allDishsIds = selectDishIds(getState());
    return !allDishsIds.some((id) => id.startsWith(restaurantId));
  }
);
