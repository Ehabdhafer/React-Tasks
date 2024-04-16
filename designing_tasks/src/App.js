import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EasyBank from "./tasks/easybank";
import SunnySide from "./tasks/sunnyside";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/easybank" element={<EasyBank />} />
          <Route exact path="/sunnyside" element={<SunnySide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
