import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./get-restaurants.js";
import { REQUEST_STATUS } from "../../../shared/constants/requestStatus.js";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
  name: "restaurantSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(getRestaurants.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});

const selectRestaurantsSlice = (state) => state[restaurantsSlice.name];

export const {
  selectIds: selectRestaurantIds,
  selectById: selectRestaurantById,
} = entityAdapter.getSelectors(selectRestaurantsSlice);

export const { selectRequestStatus } = restaurantsSlice.selectors;
