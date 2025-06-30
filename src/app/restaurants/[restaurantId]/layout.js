import { RestaurantCardPage } from "../../../app-pages/RestaurantCardPage/RestaurantCardPage";
import { getRestaurantById } from "../../../services/get-restaurant-by-id";
import { Suspense } from "react";

export const generateStaticParams = async () => {
  return [
    { restaurantId: "bb8afbec-2fec-491f-93e9-7f13950dd80b" },
    { restaurantId: "d9241927-09e1-44f3-8986-a76346869037" },
  ];
};

export const generateMetadata = async ({ params }) => {
  const { restaurantId } = await params;

  const { data } = await getRestaurantById(restaurantId);

  if (data) {
    return {
      title: data.name,
    };
  }
};

export const dynamic = "force-dynamic";

export const dynamicParams = true;

const Layout = async ({ children, params }) => {
  const { restaurantId } = await params;
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RestaurantCardPage restaurantId={restaurantId}>
        {children}
      </RestaurantCardPage>
    </Suspense>
  );
};

export default Layout;
