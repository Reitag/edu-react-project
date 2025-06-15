import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { URL } from "../../../shared/constants/url";

export const getRestaurants = createFetchThunk(
  "restaurants/getRestaurants",
  () => `${URL}restaurants`
);
