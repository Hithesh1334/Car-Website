import './App.css';
import './Appv2.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Errorpage from './components/Errorpage';


function App() {
  return (
    <div className="main-body">
 <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} /> 
        <Route path="/contact" element={<Contacts />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route element={<Errorpage/>}/>
        </Routes>
    </div>
  );
}

export default App;
