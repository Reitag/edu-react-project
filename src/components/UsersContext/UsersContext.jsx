"use client";

import { Context } from "../../hooks/useUsersContext";

export const UsersContext = ({ users, children }) => {
  return <Context value={users}>{children}</Context>;
};
