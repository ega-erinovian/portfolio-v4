import React from 'react'
import Navbar from '../components/navbar/Navbar';
import About from './about/About';
import Contact from './contact/Contact';
import Experience from './experience/Experience';
import Footer from './footer/Footer';
import Header from './header/Header';
import Skills from './skills/Skills';
import Work from './work/Work';

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
        <Footer />
    </>
  )
}

export default Home