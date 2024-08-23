import React, { useState } from "react";
import UserContext from "./UserContext";
const UserContextProvider = ({children}) => {
    const [user,setUser] = useState(null)
    const [name,setName] = useState("Kalma")
  return <UserContext.Provider value={{user,setUser,name,setName}}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
