import React from "react";
import ReactDOM from "react-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./bootswatch/bootstrap.min.css"
import "./index.scss";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

const appJsx = (
  <Router>
    <App />
  </Router>
);

ReactDOM.render(appJsx, document.getElementById("root"));
