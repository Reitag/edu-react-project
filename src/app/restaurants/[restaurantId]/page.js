import { redirect } from "next/navigation";

const Page = async ({ params }) => {
  const { restaurantId } = await params;
  redirect(`/restaurants/${restaurantId}/menu`);
};

export default Page;
