import React from 'react'
import websiteBackground from '../../websiteBackground.png'
import './Background.css'
function Background() {
    return (
        <div>
            <img className='bg' src={websiteBackground}></img>
        </div>
    )
}

export default Background
