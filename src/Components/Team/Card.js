import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <div className = "wrapper" style= {{backgroundColor: props.color}}>
            <h6 className = "name">{props.name}</h6>
            <p className = "positions">{props.positions}</p>
            <img className = "image" src={props.imgurl}></img>
            <p className = "info">Year: {props.grade}</p>
            <p className = "info">Years Playing: {props.years}</p>
            <p className = "info">Major: {props.major}</p>
        </div>
    )
}

export default Card
