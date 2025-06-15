import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./get-users.js";
import { REQUEST_STATUS } from "../../../shared/constants/requestStatus.js";

const entityAdapter = createEntityAdapter();

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: entityAdapter.getInitialState({
    requestStatus: REQUEST_STATUS.IDLE,
  }),
  selectors: {
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, { payload }) => {
      entityAdapter.setAll(state, payload);
    });
  },
});

const selectUsersSlice = (state) => state[usersSlice.name];

export const { selectIds: selectUserIds, selectById: selectUserById } =
  entityAdapter.getSelectors(selectUsersSlice);

export const { selectRequestStatus } = usersSlice.selectors;
