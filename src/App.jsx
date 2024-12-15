import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Monitor from "./pages/Monitor";
// import About from "./pages/About";

import Header from "./components/Header";
import Fields from "./pages/Fields";
import Predictions from "./pages/Predictions";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/monitor" element={<Monitor />} />
        <Route path="/fields" element={<Fields />} />
        <Route path="/predictions" element={<Predictions />} />
      </Routes>
    </Router>
  );
}

export default App;
