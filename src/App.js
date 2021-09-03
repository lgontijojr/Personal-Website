import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

import "./css/_app.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu></Menu>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
