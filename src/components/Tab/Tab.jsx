import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/slice";
import cn from "classnames";
import styles from "./Tab.module.css";

export const Tab = ({ id, activeId, setActiveId }) => {
  const restaurant = useSelector((state) => selectRestaurantById(state, id));

  if (!restaurant) return null;

  const handleTabs = (id) => {
    if (id !== activeId) {
      setActiveId(id);
    }
  };

  return (
    <button
      key={id}
      className={cn(styles.tabButton, {
        [styles.tabButtonActive]: id === activeId,
      })}
      onClick={() => handleTabs(id)}
    >
      {restaurant.name}
    </button>
  );
};
