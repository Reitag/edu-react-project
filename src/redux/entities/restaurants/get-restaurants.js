import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { selectRequestStatus } from "./slice";
import { REQUEST_STATUS } from "../../../shared/constants/requestStatus";
import { selectRestaurantIds } from "./slice";
import { URL } from "../../../shared/constants/url";

export const getRestaurants = createFetchThunk(
  "restaurants/getRestaurants",
  () => `${URL}restaurants`,
  (_, getState) => {
    const state = getState();
    const status = selectRequestStatus(state);
    const hasRestaurants = selectRestaurantIds(state).length > 0;

    return status !== REQUEST_STATUS.FULFILLED || !hasRestaurants;
  }
);
