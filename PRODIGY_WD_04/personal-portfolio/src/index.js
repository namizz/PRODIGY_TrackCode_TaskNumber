import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import "./index.css";

const Web = function () {
  return (
    <div id="main">
      <Home />
    </div>
  );
};
ReactDOM.render(<Web />, document.getElementById("root"));
