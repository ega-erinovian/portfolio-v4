import React from 'react'

const ExpItem = ({title, location, date}) => {
  return (
    <div className="exp_item">
        <h2>{title}</h2>
        <p>At <b>{location}</b></p>
        <p>{date}</p>
    </div>
  )
}

export default ExpItem