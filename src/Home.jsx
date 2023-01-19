import React from 'react'
import { Navbar } from "./components";
import { Header, About, Work, Experience, Skills, Contact, Footer } from "./containers";
import Fade from 'react-reveal/Fade';

import MyImg from './assets/footer/protfolio_footer_img.webp'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header title={'I am Ega Erinovian'} description={'Full-Stack Developer'} />
        <Fade bottom>
          <About />
          <Work />
          <Experience />
          <Skills />
          <Contact />
        </Fade>
        <img src={MyImg} alt="My-Img" />
        <Footer />
    </>
  )
}

export default Home