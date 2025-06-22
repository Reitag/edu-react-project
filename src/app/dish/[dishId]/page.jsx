"use client";

import { useParams } from "next/navigation";
import { DishPage } from "../../../pages/DishPage/DishPage";

const DishPageLayout = () => {
  const params = useParams();
  return <DishPage dishId={params.dishId} />;
};

export default DishPageLayout;
