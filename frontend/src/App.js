// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/main/Footer";
import Home from "./components/main/Home";
import Login from "./components/main/Login";
import Signup from "./components/main/Signup";
import Main from "./components/main";
import ManageProduct from "./components/plugins/store/ManageProduct";
import BrowseProduct from "./components/plugins/store/BrowseProduct";
import AddProduct from "./components/plugins/store/AddProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/main/home" />} />
        <Route path="main" element={<Main />}>
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />

          <Route path="signup" element={<Signup />} />

          <Route path="footer" element={<Footer />} />
        </Route>

        <Route path="addproductplugin" element={<AddProduct />} />
        <Route path="manageproduct" element={<ManageProduct />} />
        <Route path="browseproduct" element={<BrowseProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
