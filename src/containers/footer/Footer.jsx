import React from 'react'
import MyImg from '../../assets/footer/my-img.jpg'
import './footer.css';

const Footer = () => {
  return (
    <section id='footer'>
        <img src={MyImg} alt="My-Img" />
        <div className="footer_content">
            <div className="container_padding">
                <h1>E</h1>
                <h2>I'am Ega Erinovian Full-Stack Web Developer</h2>
            </div>
            <p>&#169; 2022 Ega Erinovian</p>
        </div>
    </section>
  )
}

export default Footer