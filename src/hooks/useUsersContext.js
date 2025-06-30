import { createContext, useContext } from "react";

export const Context = createContext(null);

export const useUsersContext = () => {
  const contextValue = useContext(Context);

  if (!contextValue) {
    throw new Error("Error, no Provider!");
  }

  return contextValue;
};
