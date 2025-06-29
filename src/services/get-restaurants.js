import { URL } from "../shared/constants/url";

export const getRestaurants = async () => {
  const response = await fetch(`${URL}restaurants`, {
    cache: "no-store",
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
