import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDish, getDishes } from "./get-dishes.js";
import { REQUEST_STATUS } from "../../../shared/constants/requestStatus.js";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
  name: "dishesSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDish.fulfilled, (state, { payload }) => {
        entityAdapter.setOne(state, payload);
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        entityAdapter.setAll(state, payload);
      });
  },
});

const selectDishesSlice = (state) => state[dishesSlice.name];

export const { selectIds: selectDishIds, selectById: selectDishById } =
  entityAdapter.getSelectors(selectDishesSlice);

export const { selectRequestStatus } = dishesSlice.selectors;
