import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { selectUserIds } from "./slice";
import { URL } from "../../../shared/constants/url";

export const getUsers = createFetchThunk(
  "users/getUsers",
  () => `${URL}users`,
  (restaurantId, getState) => {
    const allUserIds = selectUserIds(getState());
    return !allUserIds.some((id) => id.startsWith(restaurantId));
  }
);
