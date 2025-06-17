import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./get-reviews.js";
import { REQUEST_STATUS } from "../../../shared/constants/requestStatus.js";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
  name: "reviewsSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(
      getReviewsByRestaurantId.fulfilled,
      (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      }
    );
  },
});

const selectReviewsSlice = (state) => state[reviewsSlice.name];

export const { selectIds: selectReviewIds, selectById: selectReviewById } =
  entityAdapter.getSelectors(selectReviewsSlice);

export const { selectRequestStatus } = reviewsSlice.selectors;
