// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Main from './components/main';
import ManageProduct from './components/plugins/store/ProductDashboard/ManageProduct';
import BrowseProduct from './components/plugins/store/BrowseProduct';
import AddProduct from './components/plugins/store/ProductDashboard/AddProduct';
import User from './components/user';
import UserProfile from './components/user/UserProfile';
import ManageStorePlugin from './components/user/ManageStorePlugin';
import ManageCartPlugin from './components/user/ManageCartPlugin';
import UserProvider from './context/UserProvider';
import BrowsePlugin from './components/main/BrowsePlugin';
import GeneratePlugin from './components/user/GeneratePlugin';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Toaster position='top-right' />
        <Routes>
          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path="main" element={<Main />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="footer" element={<Footer />} />
            <Route path="browse" element={<BrowsePlugin />} />
          </Route>

          <Route path="user" element={<User />}>
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="manageStorePlugin" element={<ManageStorePlugin />} />
            <Route path="manageCartPlugin" element={<ManageCartPlugin />} />
            <Route path="signup" element={<Signup />} />
            <Route path="footer" element={<Footer />} />
          <Route path="generateplugin/:index" element={<GeneratePlugin />} />
          </Route>

          <Route path="addproductplugin" element={<AddProduct />} />
          <Route path="manageproduct" element={<ManageProduct />} />
          <Route path="browseproduct" element={<BrowseProduct />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
