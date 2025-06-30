import { RestaurantMenu } from "../../../../components/RestaurantMenu/RestaurantMenu";
import { Suspense } from "react";

const Page = async ({ params }) => {
  const { restaurantId } = await params;

  return (
    <Suspense fallback={<div>loading menu...</div>}>
      <RestaurantMenu restaurantId={restaurantId} />
    </Suspense>
  );
};

export default Page;
