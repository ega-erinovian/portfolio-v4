import React from 'react'

const ExpItem = ({title, location, date}) => {
  return (
    <div className="exp_item">
        <h2>{title}</h2>
        <p>{location}</p>
        <p>{date}</p>
    </div>
  )
}

export default ExpItem