import React from 'react'
import { Routes, Route, Link } from "react-router-dom";

import './Navbar.css'
function Navbar() {
    return (
        <div>
           <div className="nav">
            <div className="home"><Link className='link' to="/" style={{ textDecoration: 'none' }} >Home</Link></div>
            <div className="explore">Explore</div>
            <div className="about-us">About Us</div>
            <div className="login"><Link className='link' to="/login" style={{ textDecoration: 'none' }}>Login</Link></div>
           </div>
        </div>
    )
}

export default Navbar
 {/*WriterZinga
      Color palette:
      Sky:#CAEBF2
      Carbon:#A9A9A9
      Watermelon:#FF3B3F
      Neutral:#EFEFEF
      */}