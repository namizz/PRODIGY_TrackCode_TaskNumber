import React from "react";

export default function Experience(props) {
  return (
    <div className="Experience">
      <h3>{props.role}</h3>
      <div id="e-description">
        <img src={props.image} alt={props.role} />
        <p>{props.Description}</p>
      </div>
      <p>
        {props.startDate} - {props.endDate}
      </p>
    </div>
  );
}
