import React from "react";
import ReactDOM from "react-dom/client";
// import the css
import "./index.css";
import "./App.css";
import "./components/ActivityForm/ActivityForm.css";
import "./components/Activitylist/ActivityList.css";
import "./components/Fetchweather/FetchWeather.css";
// import the needed components
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
