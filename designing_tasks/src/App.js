import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EasyBank from "./tasks/easybank";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/easybank" element={<EasyBank />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
