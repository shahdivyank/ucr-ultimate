import React from 'react'
import Calender from './Calender'
import Separator from '../Header/Separator'

function Announcements() {
    return (
        <section id="announcements">
            <div>
                <Separator height="10" />
                <Calender />
            </div>
        </section>
    )
}

export default Announcements
