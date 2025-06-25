import { redirect } from "next/navigation";

const Page = ({ params }) => {
  redirect(`/restaurants/${params.restaurantId}/menu`);
};

export default Page;
