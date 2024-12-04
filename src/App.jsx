import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { useContext } from "react";
import UserContext from "./context/UserContext";

export default function App() {
  let ctx1 = useContext(UserContext);
  let loginValue = ctx1.user.login;
  console.log(loginValue);
  return (
    <>
      <BrowserRouter>
        <div className="mb-[70px]">
          <Navbar />
        </div>

        <Routes>
          <Route
            path="/"
            element={loginValue === true ? <Home /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<SignUp />} />
          <Route
            path="/login"
            element={loginValue === false ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
