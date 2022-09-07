import React from 'react'
import first from '../../first.jpg'
import second from '../../second.jpg'
import third from '../../third.jpg'
import './body.css'
function Body() {
    return (
        <div>
           
            <div className="firstBox">
            <div className="firstHeading">Share your ideas with the world</div>
            <div className="firstContent">
We provide you a platform to unleash your creativity in writing.Our mission is to create the biggest platform for writers across the globe to express, collaborate and inspire others. Explore, Learn and have fun!</div>
            <div className="firstImage">
<img className='firstimg' src={second}></img>

            </div>
            </div>
            <div className="secondBox">
            <div className="secondHeading">Find all pieces of writings here</div>
            <div className="secondContent">
Crisp Essays? Lovely Poems? Letters? Stories that make you go WOW! We have got you covered. Our platform is a one stop solution for all your needs.</div>
            <div className="secondImage">
            <img className='firstimg' src={third}></img>
            </div>
            </div>
            <div className="thirdBox">
            <div className="thirdHeading">You write, You inspire</div>
            <div className="thirdContent">
“Write what should not be forgotten”
Isabelle Allende<br></br>
When you write you inspire millions. Our platform gives you the opportunity to make a global impact
 .Your words create an impact on the world around you. Let your words speak louder than your actions. Let them inspire!</div>
            <div className="thirdImage"></div>
            <img className='firstimg' src={first}></img>
            </div>


        </div>
    )
}

export default Body
