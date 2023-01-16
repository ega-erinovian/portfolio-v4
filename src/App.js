import './App.css';
import Home from './containers/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from './containers/work_gallery/Gallery';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="Works" element={<Gallery />} exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
