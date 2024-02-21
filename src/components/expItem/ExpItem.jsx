import React from "react";
import "./expItem.css";

const ExpItem = ({ title, location, date, jobType }) => {
  return (
    <div className="exp_item">
      <div className="title-type-wrapper">
        <h2>{title}</h2>
        <p>{jobType}</p>
      </div>
      <p>
        At <b>{location}</b>
      </p>
      <p>{date}</p>
    </div>
  );
};

export default ExpItem;
