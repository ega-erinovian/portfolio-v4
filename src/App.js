import './App.css';
import Home from './Home';
import Footer from "./containers/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Gallery, WorkDetail } from "./containers";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="Works" element={<Gallery />} exact />
          <Route path="Works/:name" element={<WorkDetail />} exact />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
