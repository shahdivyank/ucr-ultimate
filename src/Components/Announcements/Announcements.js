import React from 'react'
import Calender from './Calender'
import Separator from '../Header/Separator'
import "./Announcements.css"

function Announcements() {
    return (
        <section id="announcements">
            <div className='announcements-cover'>
                <Separator height="10" />
                <h4 className = "title-font">Announcements</h4>
                <p className="text-font">
                    Below we have our schedule for practices! We usually meet every Tuesday and
                    Thursday from 8 - 10 PM unless otherwise noted. Check out the requirements before
                    attending practices under the Join Us section!
                </p>
                <Calender />
            </div>
        </section>
    )
}

export default Announcements
