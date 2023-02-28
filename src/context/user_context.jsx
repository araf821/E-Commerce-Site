import { createContext, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>;
};

// Custom hook
export const useUserContext = () => {
  return useContext(UserContext);
};
