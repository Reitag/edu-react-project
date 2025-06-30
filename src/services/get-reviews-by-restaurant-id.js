import { URL } from "../shared/constants/url";

export const getReviewsByRestaurantId = async (restaurantId) => {
  const response = await fetch(`${URL}reviews?restaurantId=${restaurantId}`, {
    cache: "force-cache",
    next: {},
  });

  if (!response.ok) {
    return { error: response.status, data: null };
  }

  if (response.status === 404) {
    return { error: null, data: null };
  }

  const result = await response.json();

  return { error: null, data: result };
};
