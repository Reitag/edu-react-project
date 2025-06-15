import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { URL } from "../../../shared/constants/url";

export const getReviews = createFetchThunk(
  "reviews/getReviews",
  (restaurantId) => `${URL}reviews?restaurantId=${restaurantId}`
);
