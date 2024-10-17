// import React from 'react'
// import UserContext from './userContext';
// import { useState } from 'react';

// export default function UserContextProvider({children}) {
//     const [userEmail, setUserEmail] = useState(null);
//   return (
//     <UserContext.Provider value={{userEmail,setUserEmail}}>
//         {children}
//     </UserContext.Provider>
//   )
// }

import React from "react";
// import UserContext from './userContext';
import { useState, createContext, useContext } from "react";

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null);
  return (
    <UserContext.Provider value={{ userEmail, setUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
