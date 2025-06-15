import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { URL } from "../../../shared/constants/url";

export const getDish = createFetchThunk(
  "dishes/getDish",
  (id) => `${URL}dish/${id}`
);

export const getDishes = createFetchThunk(
  "dishes/getDishes",
  (restaurantId) => `${URL}dishes?restaurantId=${restaurantId}`
);
