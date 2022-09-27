import './App.css';

import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Explore from './components/Explore/Explore';
import AboutUs from './components/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      {/*WriterZinga
      Color palette:
      Sky:#CAEBF2
      Carbon:#A9A9A9
      Watermelon:#FF3B3F
      Neutral:#EFEFEF
      */}

<Router>
<Navbar />


<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
<Route path='/explore' element={<Explore/>}></Route>
<Route path='/about' element={<AboutUs/>}></Route>
</Routes>
</Router>


    </div>
  );
}

export default App;
