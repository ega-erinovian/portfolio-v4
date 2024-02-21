import React from "react";
import "./about.css";

const About = ({ title, content1, content2 = "" }) => {
  return (
    <section className="about" id="about">
      <div className="container_padding">
        <div className="about_content">
          <h1>{title}</h1>
          <p>
            {content1} <br />
            <br /> {content2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
