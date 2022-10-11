import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './containers/about/About';
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
    </>
  );
}

export default App;
