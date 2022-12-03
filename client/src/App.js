import './App.css';
import './Appv2.css';
import {Routes,Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Contacts from './components/Contacts';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
// import About from './components/About';
import Errorpage from './components/Errorpage';
import Cars from './components/Cars.js';
import CarDetails from './components/carsDetails';
import Typeofcar from './components/Typeofcar';
import CarsBuy from './components/carsBuy';

function App() {
  return (
    <div className="main-body">
 <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/About" element={<About />} />  */}
        <Route path="/contact" element={<Contacts />} /> 
        <Route path="/Login" element={<Login />} /> 
        <Route path="/Signup" element={<Signup />} />
        <Route element={<Errorpage/>}/>
        <Route path="/Cars" element={<Cars/>}/>
        <Route path="/cars/:slug" element={<CarDetails />} />
        <Route path="/cars2/:slug" element={<CarsBuy/>}/>
        <Route path="/Typeofcar" element={<Typeofcar />} />
        </Routes>
    </div>
  );
}

export default App;
