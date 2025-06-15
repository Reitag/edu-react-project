import { createAsyncThunk } from "@reduxjs/toolkit";

export const createFetchThunk = (entityName, endpointBuilder) =>
  createAsyncThunk(entityName, async (params, { rejectWithValue }) => {
    try {
      const url = endpointBuilder(params);
      const response = await fetch(url);
      const result = await response.json();

      const isEmptyArray = Array.isArray(result) && result.length === 0;
      const isEmptyObject =
        !Array.isArray(result) &&
        (result == null || Object.keys(result).length === 0);

      if (isEmptyArray || isEmptyObject) {
        return rejectWithValue("Not found");
      }

      return result;
    } catch (error) {
      return rejectWithValue(error.message || "Unknown error");
    }
  });
