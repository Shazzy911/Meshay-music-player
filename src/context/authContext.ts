// "use client";
// import { createContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthContextProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(localStorage.getItem("user1")) || null
//   );

//   const login = () => {
//     //TO DO
//     setCurrentUser({
//       id: 1,
//       name: "Shahzaib",
//       profilePic:
//         "https://images.pexels.com/photos/1036629/pexels-photo-1036629.jpeg?auto=compress&cs=tinysrgb&w=1600",
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem("user1", JSON.stringify(currentUser));
//   }, [currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser, login }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
