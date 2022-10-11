import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './containers/about/About';
import Header from './containers/header/Header';
import Work from './containers/work/Work';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
    </>
  );
}

export default App;
