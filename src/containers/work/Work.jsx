import React from 'react'
import './work.css';
import WorkItem from '../../components/work-item/WorkItem'
import { workDatas } from "../../work_data";
import Fade from 'react-reveal/Fade';

const Work = () => {

  return (
    <section id="work">
      <div className='container_padding'>
        <h1>Work</h1>
        <div className='work-item-container'>
          <div className='work-item-grid'>
          <Fade bottom>
            <WorkItem img={workDatas[1].img} title={workDatas[1].title} desc={workDatas[1].desc}/>
            <WorkItem img={workDatas[2].img} title={workDatas[2].title} desc={workDatas[2].desc}/>
            <WorkItem img={workDatas[3].img} title={workDatas[3].title} desc={workDatas[3].desc}/>  
          </Fade>
          </div>
        </div>
        <a href="/Works"><button>See More Work</button></a>
      </div>
    </section>
  )
}

export default Work