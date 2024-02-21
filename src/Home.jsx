import React from "react";
import { Navbar } from "./components";
import {
  Header,
  About,
  Work,
  Experience,
  Skills,
  Contact,
  Footer,
} from "./containers";
import Fade from "react-reveal/Fade";
import AllData from "./data";

import MyImg from "./assets/footer/portfolio_footer.webp";

const Home = () => {
  const headerData = AllData[0];
  const aboutData = AllData[1];
  const expData = AllData[2];
  return (
    <>
      <Navbar />
      <Header greetings={headerData.greetings} title={headerData.title} />
      <Fade bottom>
        <About title={aboutData.title} content1={aboutData.content1} />
        <Work />
        <Experience title={expData.title} experiences={expData.experiences} />
        <Skills />
        <Contact />
      </Fade>
      <img src={MyImg} alt="My-Img" className="footer-img" />
      <Footer />
    </>
  );
};

export default Home;
