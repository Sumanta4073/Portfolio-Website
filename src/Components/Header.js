import React from 'react'
import {Link} from 'react-scroll'
import Typed from 'react-typed'

const Header = () => {
    return (
        <div className="header-wraper" id='home'>
            <div className="main-info">
                <h1>Web Development</h1>
                <Typed className='typed-text' strings={[':Web Design...',':Web Development...', ':Web Application Development...', ':Static Website Development...']} typeSpeed={60} backSpeed={60} loop />
                <Link smooth={true} duration={1500} to="contact" className='btn-main-offer'> Contact Me</Link>
            </div>
        </div>
    )
}

export default Header
