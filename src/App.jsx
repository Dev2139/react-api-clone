import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Api1 from "./components/Api1";
import Api2 from "./components/Api2";
import Api3 from "./components/Api3";
import Api4 from "./components/Api4";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<AboutUs />} />
          <Route path="/api1" element={<Api1 />} />
          <Route path="/api2" element={<Api2 />} />
          <Route path="/api3" element={<Api3 />} />
          <Route path="/api4" element={<Api4 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
