import { RestaurantMenu } from "../components/RestaurantMenu/RestaurantMenu";
import { Suspense } from "react";

export const RestaurantMenuLayout = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback={<div>loading menu...</div>}>
      <RestaurantMenu restaurantId={restaurantId} />;
    </Suspense>
  );
};
