import React from 'react'
import { Navbar } from "./components";
import { Header, About, Work, Experience, Skills, Contact } from "./containers";

import MyImg from './assets/footer/protfolio_footer_img.webp'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header title={'I am Ega Erinovian'} description={'Full-Stack Developer'} />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
        <img src={MyImg} alt="My-Img" />
    </>
  )
}

export default Home