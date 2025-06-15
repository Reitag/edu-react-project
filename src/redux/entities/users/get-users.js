import { createFetchThunk } from "../../utils/CreateFetchThunk";
import { URL } from "../../../shared/constants/url";

export const getUsers = createFetchThunk("users/getUsers", () => `${URL}users`);
