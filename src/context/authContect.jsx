import { createContext, useContext, useState } from 'react';

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [authDetails, setAuthDetails] = useState(null);

  return (
    <authContext.Provider value={{ authDetails, setAuthDetails }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(authContext); // Correctly use useContext
};
