import { LinkWrapper } from "./../LinkWrapper/LinkWrapper";
import styles from "./RestaurantTabs.module.css";

export const RestaurantTab = ({ restaurant }) => {
  if (!restaurant) return null;

  const { id } = restaurant;

  return (
    <>
      <LinkWrapper to={`/restaurants/${id}`} styles={styles}>
        {restaurant.name}
      </LinkWrapper>
    </>
  );
};
