import React, { useState } from "react";
import { STORAGE_JWT } from "constants/index";
import jwt_decode from "jwt-decode";

export const UserContext = React.createContext({
  user: null,
  setUser: () => {},
});

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem(STORAGE_JWT) &&
      jwt_decode(localStorage.getItem(STORAGE_JWT))
  );

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
