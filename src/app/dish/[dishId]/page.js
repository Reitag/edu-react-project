import { Dish } from "../../../components/Dish/Dish";

const DishPageLayout = async ({ params }) => {
  const { dishId } = await params;
  return <Dish id={dishId} />;
};

export default DishPageLayout;
