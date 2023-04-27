// import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import Main from './components/main';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="main" element={<Main/>}>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<Signup/>}/>
        <Route path="footer" element={<Footer/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
