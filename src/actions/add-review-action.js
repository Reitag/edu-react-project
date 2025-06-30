"use server";

import { revalidatePath } from "next/cache";
import { URL } from "../shared/constants/url";

export const addReviewAction = async ({ restaurantId, review, pathname }) => {
  const result = await fetch(`${URL}review/${restaurantId}`, {
    method: "POST",
    body: JSON.stringify(review),
    headers: { "Content-Type": "application/json" },
  });

  revalidatePath(pathname);

  return result.json();
};
