import React, { useState } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

import ResumePage from "./pages/Resume";
import ContactPage from "./pages/Contact";
import AboutPage from "./pages/About";

import "./css/_app.css";
import "./css/components/_body.css";

const App = () => {
  const [isOpen, toggleSidebar] = useState(false);

  return (
    <div className="App">
      <div className="main">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <Profile />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "90%",
          }}
        >
          <AboutPage />
          <ResumePage />
          <ContactPage />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
