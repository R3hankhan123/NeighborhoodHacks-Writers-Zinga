import './App.css';
import Background from './components/Background/Background';
import Navbar from './components/Navbar/Navbar';
import Body from './components/Body/Body';
import { Routes, Route, Link } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';

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

</Routes>

    </div>
  );
}

export default App;
