import './App.css';

import Navbar from './components/Navbar/Navbar';

import {BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';

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

<Navbar />


<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/login' element={<Login/>}></Route>
<Route path='/register' element={<Register/>}></Route>
</Routes>


    </div>
  );
}

export default App;
