import { BrowserRouter as Router } from "react-router-dom";

import TopNav from "./components/TopNav";

function App() {
  return (
    <div className="App">
      <Router>
        <TopNav></TopNav>
      </Router>
    </div>
  );
}

export default App;
