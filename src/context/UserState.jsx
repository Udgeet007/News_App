/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./UserContext";


const UserState = (props) => {
  let UserDetails = JSON.parse(localStorage.getItem("AirNews"));
  const [user,setUser] = useState({
    login:UserDetails ? UserDetails.login : false,
    email: UserDetails? UserDetails.email : "",
  });

  console.log(user);

  return (
  <UserContext.Provider>
    {props.children}
  </UserContext.Provider>    
  )
}

export default UserState
