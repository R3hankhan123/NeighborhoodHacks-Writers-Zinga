import './App.css';
import React,{useEffect} from 'react';
import Navbar from './components/Navbar/Navbar';

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Explore from './components/Explore/Explore';
import AboutUs from './components/AboutUs/AboutUs';
import {useSelector,useDispatch} from 'react-redux'
import User from './components/User/User';
import { loadUser } from './Actions/userActions';
import NPP from './components/NewPostPage/NPP';
import OtherProfile from './components/OtherProfile/OtherProfile';
import TimeLine from './components/TimeLine/TimeLine';
import UpdatePass from './components/UpdatePassword/UpdatePass';
import PostPage from './components/PostPage/PostPage';

function App() {

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  const { isAuthenticated } = useSelector((state) => state.user);

const {user}=useSelector(state=>state.user)


  return (
    <div className="App">
      {/*WriterZinga
      Color palette:
      Bright Red: #DE354C
      Deep Red: #932432
      Pure Purple: #3C1874
      Purple Tinged Grey: #283747
      Cloud: #F3F3F3
      */}

<Router>
<Navbar />


<Routes>
<Route path='/' element={<Home/>}></Route>
<Route path='/account' element={isAuthenticated?<User/>:<Login/>}></Route>
<Route path='/login' element={isAuthenticated?<User/>:<Login/>}></Route>
<Route path='/register' element={isAuthenticated?<User/>:<Register/>}></Route>
<Route path='/explore' element={<Explore/>}></Route>
<Route path='/about' element={<AboutUs/>}></Route>
<Route path='/newPost' element={<NPP/>}></Route>
<Route path='/user/:id' element={isAuthenticated?<OtherProfile/>:<Login/>}></Route>
<Route path='/timeline' element={isAuthenticated?<TimeLine/>:<Login/>}></Route>
<Route path='/post/get/:id' element={isAuthenticated?<PostPage/>:<Login/>}></Route>
<Route path='/updatePassword' element={isAuthenticated? <UpdatePass/>:<Login/>}></Route>
</Routes>
</Router>


    </div>
  );
}

export default App;
