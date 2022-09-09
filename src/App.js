import "./App.scss";

import { Routes, Route } from "react-router-dom";
import Main from "./Main";

function App() {
  return (
    <div className="all_wrap">
      <header>
        <h3>Yi-Gi-Oh!</h3>
        <ul>
          <li>Main</li>
          <li>Intro</li>
          <li>Menu</li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
