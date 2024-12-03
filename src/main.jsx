import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SearchState from "./context/SearchState.jsx";

createRoot(document.getElementById("root")).render(
  <SearchState>
    <App />
  </SearchState>
);
