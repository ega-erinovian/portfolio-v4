import React from 'react'
import './workItem.css'
import { FaArrowRight } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

const WorkItem = ({img, title, desc}) => {
  return (
    <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7}>
      <div className="work-item">
          <img src={img} alt='work-img'/>
          <div className="item-title">
              <a>{title}</a>
              <FaArrowRight className='arrow-icon'/>
          </div>
          <p>{desc}</p>
      </div>
    </Tilt>
  )
}

export default WorkItem