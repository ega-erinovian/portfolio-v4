import React from 'react'
import { FaArrowRight } from 'react-icons/fa';

const WorkItem = ({img}) => {
  return (
    <div className="work-item">
        <img src={img} alt='work-img'/>
        <div className="item-title">
            <a>Online Museum App</a>
            <FaArrowRight className='arrow-icon'/>
        </div>
        <p>Meet Digital Museum Concept.</p>
    </div>
  )
}

export default WorkItem