import React from 'react'
import "./navbar.css"

const Navbar = () => {
  const unCheck = () => {
    
  }
  return (
    <div className="navbar">
        <div className='container_padding'>
          <div className='mobile'>
            <div className="menuToggle">
              <input type="checkbox" id='check-nav' />
              <span></span>
              <span></span>
              <span></span>
              <ul className="menu">
                <li><a href="#about" onClick={() => {document.getElementById("check-nav").checked = false}}>About</a></li>
                <li><a href="#work" onClick={() => {document.getElementById("check-nav").checked = false}}>Work</a></li>
                <li><a href="#exp" onClick={() => {document.getElementById("check-nav").checked = false}}>Experience</a></li>
                <li><a href="#skills" onClick={() => {document.getElementById("check-nav").checked = false}}>Skill</a></li>
                <li><a href="#contact" onClick={() => {document.getElementById("check-nav").checked = false}}>Contact</a></li>
              </ul>
            </div>
          </div>

            <nav className='desktop'>
              <a href="#header"><h1>E</h1></a>
              <ul>
                  <li><a href="#about">About</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="#exp">Experience</a></li>
                  <li><a href="#skills">Skill</a></li>
                  <li><a href="#contact">Contact</a></li>
              </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar