import React from "react";
import "./header.css";

const Header = ({ greetings, title, color }) => {
  return (
    <section className="header" id="header" style={{ backgroundColor: color }}>
      <div className="container_padding">
        <h1>{greetings}</h1>
        {title ? <p>{title}</p> : <p></p>}
      </div>
    </section>
  );
};

export default Header;
