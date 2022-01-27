import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Pages/Blog/Blog";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Blog/>} />
      </Routes>
    </div>
  );
}

export default App;
