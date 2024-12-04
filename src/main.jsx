import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SearchState from "./context/SearchState.jsx";
import UserState from "./context/UserState.jsx";

createRoot(document.getElementById("root")).render(
  <UserState>
     <SearchState>
    <App />
  </SearchState>
  </UserState>
 
);
