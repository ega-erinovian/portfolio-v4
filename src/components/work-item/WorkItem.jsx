import React from "react";
import "./workItem.css";
import { FaArrowRight } from "react-icons/fa";
import Tilt from "react-parallax-tilt";

const WorkItem = ({ img, title, desc, link }) => {
  return (
    <a href={"/Works/" + title}>
      <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} tiltReverse={true}>
        <div className="work-item">
          <img src={img} alt="work-img" />
          <div className="item-title">
            <h3>{title}</h3>
            <FaArrowRight className="arrow-icon" />
          </div>
        </div>
      </Tilt>
    </a>
  );
};

export default WorkItem;
