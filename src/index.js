import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Test from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Test />
  </BrowserRouter>,
  document.getElementById("appJs")
);
