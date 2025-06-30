import { LinkWrapper } from "./../LinkWrapper/LinkWrapper";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTab = ({ restaurant }) => {
  if (!restaurant) return null;

  const { id } = restaurant;

  return (
    <>
      <LinkWrapper to={`/restaurants/${id}/menu`} styles={styles}>
        {restaurant.name}
      </LinkWrapper>
    </>
  );
};
