import React from 'react'
import video from "./video.mov"
import "./Video.css"

function Video() {
    return (
        <div className='video-container'>
            <video autoPlay loop muted playsinline>
                <source src= {video} type='video/mp4'/>
            </video>
            <div className='cover'></div>
        </div>
    )
}

export default Video
