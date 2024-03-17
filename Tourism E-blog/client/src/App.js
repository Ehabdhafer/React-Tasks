import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/login";
import Signup from "./components/signup";
import { AuthProvider } from "./hooks/Authcontext";
import Home from "./components/home";
import BlogDetails from "./components/blogdetails";
import AddBlog from "./components/addblog";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/:blogId" element={<BlogDetails />} />
            <Route exact path="/addblog" element={<AddBlog />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
