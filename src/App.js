import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Sidenav from "./components/Sidenav";

import ResumePage from "./pages/Resume";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";
import WelcomePage from "./pages/Welcome";

import "./css/_app.css";
import "./css/components/_body.css";

const App = () => {
  const [isOpen, toggleSidebar] = useState(false);

  return (
    <Router>
      <div className="App">
        <Navbar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <div className="main" onClick={() => toggleSidebar(false)}>
          <Sidenav isOpen={isOpen} toggleSidebar={toggleSidebar} />
          <Profile />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/resume" component={ResumePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
