import React from 'react'
import "./Card.css"

function Card(props) {
    return (
        <div className="wrapper" style={{ backgroundImage: "url(" + props.imgurl + ")" }}>
            <div className="spacer"></div>
            <div className="container">
                <div className="information-wrapper" style={{ backgroundColor: props.color }}></div>
                <div className="information-content">
                    <h6 className="name">{props.name}</h6>
                    <p className="positions">{props.positions}</p>
                    <p className="info">Year: {props.grade}</p>
                    {/* <p className="info">Years Playing: {props.years}</p> */}
                    <p className="info">Major: {props.major}</p>
                </div>
            </div>
        </div>
    )
}

export default Card