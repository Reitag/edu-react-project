import { DishPage } from "../../../pages/DishPage/DishPage";

const DishPageLayout = async ({ params }) => {
  const { dishId } = await params;
  return <DishPage dishId={dishId} />;
};

export default DishPageLayout;
