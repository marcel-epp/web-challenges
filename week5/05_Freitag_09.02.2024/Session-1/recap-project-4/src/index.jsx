import React from "react";
import ReactDOM from "react-dom/client";
// import the css
import "./index.css";
import "./App.css";
import "./components/activityform/activityform.css";
import "./components/activitylist/activitylist.css";
import "./components/fetchweather/fetchweather.css";
// import the needed components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
