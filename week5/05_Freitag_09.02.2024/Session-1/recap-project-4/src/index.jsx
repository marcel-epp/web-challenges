import React from "react";
import ReactDOM from "react-dom/client";
// import the css
import "./index.css";
import "./components/activityform/activityform.css";
// import the needed components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
