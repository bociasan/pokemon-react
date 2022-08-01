import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/IntroPage/introPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/battleground" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
