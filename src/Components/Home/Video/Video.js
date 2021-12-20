import React from 'react'
import video from "./video.mov"
import "./Video.css"

function Video() {
    return (
        <div className='video-container'>
            {/* <video
                autoPlay
                loop
                muted
                playsinline
                poster="https://www.pe.com/wp-content/uploads/2019/01/RPE-L-RECREATION-0131-02TP.jpg?w=1280">
                <source src={video} type='video/mp4' />
            </video> */}
            <img className = "bg-photo" src= "https://www.pe.com/wp-content/uploads/2019/01/RPE-L-RECREATION-0131-02TP.jpg?w=1280"></img>
            <div className='cover'></div>
        </div>
    )
}

export default Video
