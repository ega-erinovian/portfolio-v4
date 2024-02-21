import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import { workDatas } from "../../work_data";

import "./workDetail.css";

import { HeaderComp } from "../../components";
import { Footer } from "../../containers";

export default class WorkDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      work: workDatas,
    };
  }

  render() {
    let { work } = this.state;

    // Get current URL to get the name of the agent
    let currentURL = window.location.href.split("/");

    // Get the index of selected agent
    let workIndex = work
      .map((work) => {
        return work.title;
      })
      .indexOf(decodeURI(currentURL[4]));

    return (
      <>
        <section className="work-detail">
          <HeaderComp
            greetings={work[workIndex].title}
            link={"/Works"}
            color={work[workIndex].color}
          />
          <div className="work-detail-content container_padding">
            <Fade bottom>
              <div className="work-desc">
                <p>{work[workIndex].description[0]}</p>
                <img
                  src={work[workIndex].mockup[0]}
                  alt={work[workIndex].title}
                />
              </div>
              <div className="work-desc">
                <img
                  src={work[workIndex].mockup[1]}
                  alt={work[workIndex].title}
                />
                <p>{work[workIndex].description[1]}</p>
              </div>
              <div className="work-img">
                <img
                  src={work[workIndex].mockup[2]}
                  alt={work[workIndex].title}
                />
              </div>
            </Fade>
          </div>
        </section>
        <Footer color={work[workIndex].color} />
      </>
    );
  }
}
