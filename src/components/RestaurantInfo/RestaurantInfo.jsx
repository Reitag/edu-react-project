import styles from "./RestaurantInfo.module.css";

export const RestaurantInfo = ({ restaurant }) => {
  if (!restaurant) return null;

  const { name, description, img } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      <img src={img} alt={name} className={styles.imgContainer} />
    </div>
  );
};
