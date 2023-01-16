import React from 'react'
import './header.css'

const Header = ({title, description}) => {
  return (
    <section className="header" id='header'>
        <div className="container_padding">
            <h1>{title}</h1>
            {description ? <p>{description}</p> : <p></p>}
            
        </div>
    </section>
  )
}

export default Header