import { useState } from "react";
import { Context } from "../../hooks/useUserContext";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: "User" });
  const logout = () => setUser(null);

  return <Context value={{ user, login, logout }}>{children}</Context>;
};
