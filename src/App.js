import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import "./css/_app.css";

function App() {
  const [isOpen, toggleSidebar] = useState(false);
  console.log(isOpen);
  return (
    <div className="App">
      <Router>
        <Menu isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Body isOpen={isOpen} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
