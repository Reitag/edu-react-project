import { RestaurantCardPage } from "../app-pages/RestaurantCardPage/RestaurantCardPage";
import { Suspense } from "react";

export const RestaurantCardPageLayout = async ({ children, params }) => {
  const { restaurantId } = await params;
  return (
    <Suspense fallback={<div>{console.log("loading...")}loading...</div>}>
      <RestaurantCardPage restaurantId={restaurantId}>
        {children}
      </RestaurantCardPage>
    </Suspense>
  );
};
