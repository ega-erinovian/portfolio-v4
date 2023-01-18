import React, { Component } from "react";

import { workDatas } from "../../work_data";

import "./workDetail.css";
import HeaderComp from "../../components/headerComp/HeaderComp";

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
      let workIndex = work.map((work) => {return work.title;}).indexOf(decodeURI(currentURL[4]));

      return (
        <>
            <section className="work-detail">
              <HeaderComp title={work[workIndex].title} link={'/Works'} color={work[workIndex].color} />
              <div className="work-detail-content container_padding">
                <div className="work-desc">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure et ea, labore obcaecati voluptates maiores adipisci aut ipsam modi eaque aliquid a aperiam itaque, minima corrupti saepe dignissimos accusamus at facilis eveniet error! Explicabo porro amet sit animi voluptate.</p>
                  <img src={work[workIndex].mockup[0]} alt={work[workIndex].title} />
                </div>
                <div className="work-desc">
                  <img src={work[workIndex].mockup[1]} alt={work[workIndex].title} />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro iure et ea, labore obcaecati voluptates maiores adipisci aut ipsam modi eaque aliquid a aperiam itaque, minima corrupti saepe dignissimos accusamus at facilis eveniet error! Explicabo porro amet sit animi voluptate.</p>
                </div>
                <div className="work-img">
                  <img src={work[workIndex].mockup[2]} alt={work[workIndex].title} />
                </div>
              </div>
            </section> 
        </>
      );
    }
  }