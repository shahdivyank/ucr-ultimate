import React from 'react'
import video from "./video.mov"
import "./Video.css"

function Video() {
    return (
        <div className='video-container'>
            <video autoPlay loop muted playsinline poster="https://www.pe.com/wp-content/uploads/2019/01/RPE-L-RECREATION-0131-01TP.jpg?w=620">
                <source src= {video} type='video/mp4'/>
            </video>
            <div className='cover'></div>
        </div>
    )
}

export default Video
