import { RestaurantInfo } from "../RestaurantInfo/RestaurantInfo";
import { LinkWrapper } from "./../LinkWrapper/LinkWrapper";
import styles from "./RestaurantCard.module.css";

export const RestaurantCard = ({ restaurant, children }) => {
  console.log(restaurant);

  const { id } = restaurant;

  return (
    <>
      <RestaurantInfo restaurant={restaurant} />
      <div className={styles.sections}>
        <LinkWrapper to={`/restaurants/${id}/menu`} end styles={styles}>
          Меню
        </LinkWrapper>
        <LinkWrapper to={`/restaurants/${id}/reviews`} styles={styles}>
          Отзывы
        </LinkWrapper>
        {children}
      </div>
    </>
  );
};
