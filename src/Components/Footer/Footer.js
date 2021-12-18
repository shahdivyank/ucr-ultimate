import React from 'react'
import "./Footer.css"
import Separator from '../Header/Separator'

function Footer() {
    return (
        <div className="footer">
            <Separator height="10" />
            <p>Follow us on Instagram
                <a href="https://instagram.com/ucrultimate" target="_blank" rel="noreferrer"> @ucrultimate </a>
                and Facebook <a href="https://www.facebook.com/groups/UCRultimate/" target="_blank" rel="noreferrer">@Ultimate Frisbee Riverside</a>
                !
            </p>

            <p>Copyright &copy; 2021 All Rights Reserved</p>
        </div>

    )
}

export default Footer