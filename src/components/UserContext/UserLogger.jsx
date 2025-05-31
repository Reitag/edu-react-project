import { useUserContext } from "../../hooks/useUserContext";

export const UserLogger = () => {
  const ctx = useUserContext();
  if (!ctx) return null;

  const { user, login, logout } = ctx;

  const userIn = (
    <>
      {user && <span>Hello {user.name}</span>}
      <button onClick={logout}>LogOut</button>
    </>
  );

  const userOut = <button onClick={login}>LogIn</button>;

  return user ? userIn : userOut;
};
