import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const API_KEY = "AIzaSyCtUbyy00Q3FWVrYm_h2N3YKMdexhGglgE";


let styles = {
    calendar: {
        borderWidth: "0",
        background: "white",
        margin: "0",
        borderRadius: "15px",
        padding: "10px",
        color: "#003066"
    },

    day: {
        fontSize: "1em"
    },

    today: {
        color: "#003066",
        border: "2px solid #003066",
        fontSize: "1.25em"
    },

    eventText: {
        color: "#003066"
    },

    eventCircle: {
        color: "#F1AB00"
    },
    
    multiEvent: {
        background: "#003066",
        color: "rgb(255, 255, 255)"
    },

}

let calendars = [
    { calendarId: "j2jqo1bjt7bb0drb8r4bkqpca4@group.calendar.google.com" }
];

function Calender() {

    return (
        <div className="calender"
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
            <div style={{ width: "90%" }}>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
            </div>
        </div>
    )
}

export default Calender