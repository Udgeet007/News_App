/* eslint-disable react/prop-types */
import { useState } from "react";
import UserContext from "./UserContext";


const UserState = (props) => {
  let UserDetails = JSON.parse(localStorage.getItem("NewsLogin"));
  console.log(UserDetails);
  const [user,setUser] = useState({
    login:UserDetails ? UserDetails.login : false,
    email: UserDetails? UserDetails.email : "",
  });
  console.log(user);

  function loginUser(ans){
    localStorage.setItem('NewsLogin', JSON.stringify({login:true, email:ans.email}));
    setUser({login:true,email:ans.email});
  }
  

  function logout(){
    localStorage.removeItem('NewsLogin');
    setUser({login:false,email:''});
  }

  return (
  <UserContext.Provider value={{user,setUser,loginUser, logout}}>
    {props.children}
  </UserContext.Provider>    
  )
}

export default UserState
