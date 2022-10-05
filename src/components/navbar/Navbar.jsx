import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className='container_padding'>
            <div className="menuToggle">
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className="menu">
                <li><a href="#">About</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">Experience</a></li>
                <li><a href="#">Skill</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <nav className='desktop'>
              <h1>E</h1>
              <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#experience">Experience</a></li>
                  <li><a href="#skill">Skill</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar