import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import TopNav from "./components/TopNav";

import "./css/_app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav></TopNav>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
