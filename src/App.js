import './App.css';
import Navbar from './components/navbar/Navbar';
import About from './containers/about/About';
import Header from './containers/header/Header';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
    </>
  );
}

export default App;
