import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import Cities from "./components/cities";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App" class="mx-20">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/cities" element={<Cities />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
