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
import PrivateRoute from "./Components/Routes/PrivateRoute";
import AddBlogPost from "./Components/Dashboard/AddBlogPost";
import AdminDashboard from "./Components/Dashboard/AdminDashboard";
import MakeAdmin from "./Components/Dashboard/MakeAdmin";

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
          <Route path="/contact" element= {<PrivateRoute><Contact /></PrivateRoute> } />
          <Route path="/AddBlogPost" element= {<PrivateRoute><AddBlogPost /></PrivateRoute> } />
          <Route path="/about" element={<About />} />
        
        <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/dashboard" element={<PrivateRoute><AdminDashboard/> </PrivateRoute>}></Route>
              <Route
                path={"/dashboard/adminDashboard"}
                element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                }
              ></Route>
              <Route path={"/dashboard/makeAdmin"} element={<AdminRoute><MakeAdmin /></AdminRoute>}/>
              <Route path="/dashboard/addBlogPost" element={<PrivateRoute><AddBlogPost/> </PrivateRoute>}/>
            </Route>

        </Routes>
        <Footer></Footer>
      </AuthProvider>
  
  );
}

export default App;
