import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [userRole, setUserRole] = useState(
    localStorage.getItem("userRole") || null,
  );

  console.log("user role in userprovider", userRole);

  const updatedUserRole = (role) => {
    setUserRole(role);
    // Store teh userRole in local stroage
    localStorage.setItem("userRole", role);
    console.log("User Role updated", role);
  };

  const logout = () => {
    // Clear the user role from the storage
    localStorage.removeItem("userRole");
    //  Set the userRole to empty
    setUserRole({});
    console.log("User logged out", userRole);
  };

  return (
    <UserContext.Provider value={{ userRole, updatedUserRole, logout }}>
      {children}
    </UserContext.Provider>
  );
};
