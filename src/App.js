import "./scss/App.scss";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <div className="all_wrap">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
