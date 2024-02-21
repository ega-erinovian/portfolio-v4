import React from "react";
import { Header } from "../../containers";
import { FaArrowLeft } from "react-icons/fa";

const HeaderComp = ({ greetings, link, color }) => {
  return (
    <>
      <a href={link} className="arrow-left-link">
        <FaArrowLeft className="arrow-left" />
      </a>
      <Header greetings={greetings} color={color} />
    </>
  );
};

export default HeaderComp;
