import React from "react";
import ExpItem from "../../components/expItem/ExpItem";
import "./experience.css";

const Experience = ({ title, experiences }) => {
  return (
    <section id="exp">
      <div className="container_padding">
        <div className="exp_content">
          <h1>{title}</h1>
          <div className="exp-item_container">
            {experiences &&
              experiences.map((item) => (
                <ExpItem
                  key={item.id}
                  title={item.title}
                  location={item.location}
                  date={item.date}
                  jobType={item.type}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
