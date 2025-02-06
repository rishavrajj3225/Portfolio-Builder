import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

// Using service worker only in production
if (process.env.NODE_ENV === "production") {
  const registerServiceWorker = require("./registerServiceWorker").default;
  registerServiceWorker();
} else {
  console.log("Service Worker not registered in development mode");
}

ReactDOM.render(<App />, document.getElementById("root"));
