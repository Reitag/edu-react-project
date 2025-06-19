import { useState } from "react";
import { Context } from "../../hooks/useUserContext";

export const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = () =>
    setUser({ id: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54", name: "User" });
  const logout = () => setUser(null);

  return <Context value={{ user, login, logout }}>{children}</Context>;
};
