import React from 'react'
import video from "./video.mp4"
import "./Video.css"

function Video() {
    return (
        <div className='video-container'>
            <video autoPlay loop muted>
                <source src= {video} type='video/mp4'/>
            </video>
            <div className='cover'></div>
        </div>
    )
}

export default Video
