import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Skills from "./SkillsWork";
import Contact from "./Contact";
import "./index.css";

const Web = function () {
  return (
    <div id="main">
      <Home />
      <Skills />
      <Contact />
    </div>
  );
};
ReactDOM.render(<Web />, document.getElementById("root"));
