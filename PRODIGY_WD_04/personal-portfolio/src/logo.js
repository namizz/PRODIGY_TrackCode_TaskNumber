import React from "react";

export default function Logos(props) {
  return (
    <div id="logo">
      <img src={props.src} alt={props.alt} />
      <p>{props.alt}</p>
    </div>
  );
}
