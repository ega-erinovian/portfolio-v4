import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const WorkItem = ({img, title, desc}) => {
  return (
    <div className="work-item">
        <img src={img} alt='work-img'/>
        <div className="item-title">
            <a>{title}</a>
            <FaArrowRight className='arrow-icon'/>
        </div>
        <p>{desc}</p>
    </div>
  )
}

export default WorkItem