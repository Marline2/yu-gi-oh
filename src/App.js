import "./scss/App.scss";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TopCards from "./pages/TopCards";
import Test from "./pages/Test";

function App() {
  return (
    <div className="all_wrap">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/top_cards" element={<TopCards />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
}

export default App;
