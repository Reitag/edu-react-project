import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { selectReviewIds } from "./slice";
import { URL } from "../../../shared/constants/url";

export const getReviewsByRestaurantId = createFetchThunk(
  "reviews/getReviews",
  (restaurantId) => `${URL}reviews?restaurantId=${restaurantId}`,
  (restaurantId, getState) => {
    const allReviewIds = selectReviewIds(getState());
    return !allReviewIds.some((id) => id.startsWith(restaurantId));
  }
);
