import React from "react";

export default function Project(props) {
  return (
    <div id="proj">
      <a href={props.projectLink} target="_blank" rel={props.projectName}>
        <img src={props.projectImage} alt={props.projectName} />
        <h3>{props.projectName}</h3>
      </a>
    </div>
  );
}
