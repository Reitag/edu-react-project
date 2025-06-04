import { UserLogger } from "./UserLogger";
import styles from "./User.module.css";

export const UserContainer = () => {
  return (
    <div className={styles.userContainer}>
      <UserLogger />
    </div>
  );
};
