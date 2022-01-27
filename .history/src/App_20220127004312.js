import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./Components/Navigation/NavigationBar";
import About from "./Components/Pages/About/About";
import Blog from "./Components/Pages/Blog/Blog";
import Contact from "./Components/Pages/Contact/Contact";
import Home from "./Components/Pages/Home/Home";
import Login from "./Components/Pages/Login/Login";
import Register from "./Components/Pages/Register/Register";
import Footer from "./Components/Shared/Footer";
import AuthProvider from "./Context/AuthProvider";
import AdminRoute from "./Components/Routes/AdminRoute";

function App() {
  return (
    
      <AuthProvider>
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={ <AdminRoute>  <Blog /> </AdminRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<Dashboard />} />
        </Routes>
        <Footer></Footer>
      </AuthProvider>
  
  );
}

export default App;
