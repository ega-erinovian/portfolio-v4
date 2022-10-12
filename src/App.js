import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './containers/about/About';
import Contact from './containers/contact/Contact';
import Experience from './containers/experience/Experience';
import Header from './containers/header/Header';
import Skills from './containers/skills/Skills';
import Work from './containers/work/Work';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
