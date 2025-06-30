"use client";

import { useCallback, useOptimistic } from "react";
import { usePathname } from "next/navigation";
import { useUserContext } from "../../hooks/useUserContext";
import { addReviewAction } from "../../actions/add-review-action";
import { RestaurantReviews } from "./RestaurantReviews";
import { startTransition } from "react";

export const RestaurantReviewsContainer = ({ restaurantId, reviews }) => {
  const pathname = usePathname();
  const { user } = useUserContext();

  const [optimisticReviews, addOptimisticReview] = useOptimistic(
    reviews,
    (current, optimistic) => [...current, { ...optimistic, id: "optimistic" }]
  );

  const handleAddReview = useCallback(
    async (state, formData) => {
      if (formData === null) {
        return {
          review: "",
          rating: 5,
        };
      }

      const { review, rating } = state;

      const newReview = {
        userId: user?.id ?? "Anonymous",
        text: review,
        rating,
      };

      startTransition(() => {
        addOptimisticReview(newReview);
      });

      await addReviewAction({ restaurantId, pathname, review: newReview });

      return {
        review: "",
        rating: 5,
      };
    },
    [restaurantId, pathname, addOptimisticReview, user]
  );

  return (
    <RestaurantReviews
      reviews={optimisticReviews}
      onSubmitForm={handleAddReview}
    />
  );
};
