import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import BarSearch from "./BarSearch.jsx"; // <-- correct file name here
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
