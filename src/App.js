import "./scss/App.scss";

import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TopCards from "./pages/TopCards";

function App() {
  return (
    <div className="all_wrap">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/top_cards" element={<TopCards />} />
      </Routes>
    </div>
  );
}

export default App;
