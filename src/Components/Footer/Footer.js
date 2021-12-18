import React from 'react'
import "./Footer.css"
import Separator from '../Header/Separator'

function Footer() {
    return (
        <div className="bottom">
            <div className="footer-cover">
                <Separator height="10" />
                <p className='text-font'>Follow us on Instagram
                    <a href="https://instagram.com/ucrultimate" target="_blank" rel="noreferrer"> @ucrultimate </a>
                    and Facebook <a href="https://www.facebook.com/groups/UCRultimate/" target="_blank" rel="noreferrer">@Ultimate Frisbee Riverside</a>
                    !
                </p>
                <p className='title-font'>Copyright &copy; 2021 All Rights Reserved</p>
            </div>
        </div>

    )
}

export default Footer