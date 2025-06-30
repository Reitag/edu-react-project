import { URL } from "../shared/constants/url";

export const getDishById = async (dishId) => {
  const response = await fetch(`${URL}dish/${dishId}`, {
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
