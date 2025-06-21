import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { URL } from "../../shared/constants/url.js";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["Reviews"],
  endpoints: (builder) => ({
    getReviewsByRestaurantId: builder.query({
      query: (restaurantId) => `reviews?restaurantId=${restaurantId}`,
      providesTags: (result, error, restaurantId) => [
        { type: "Reviews", id: restaurantId },
      ],
    }),
    addReview: builder.mutation({
      query: ({ restaurantId, review }) => {
        return {
          url: `review/${restaurantId}`,
          method: "POST",
          body: review,
        };
      },
      invalidatesTags: (result, error, { restaurantId }) => [
        { type: "Reviews", id: restaurantId },
      ],
    }),
  }),
});

export const { useGetReviewsByRestaurantIdQuery, useAddReviewMutation } = api;
