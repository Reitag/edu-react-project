import { useUserContext } from "../../hooks/useUserContext";
import styles from "./User.module.css";

export const UserLogger = () => {
  const ctx = useUserContext();
  if (!ctx) return null;

  const { user, login, logout } = ctx;

  const userIn = (
    <>
      {user && <span>Hello {user.name}</span>}
      <div onClick={logout} className={styles.button}>
        LogOut
      </div>
    </>
  );

  const userOut = (
    <div onClick={login} className={styles.button}>
      LogIn
    </div>
  );

  return user ? userIn : userOut;
};
