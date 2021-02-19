import React from 'react'
import './Nav.css'
import iconLogo from '../../../src/assets/logo-and-icons/logo-icon-svg.svg';
import iconNameLogo from '../../../src/assets/logo-and-icons/logo-icon-and-name-svg.svg';

const Nav = () => {

    return (
        <nav className="nav-bar">
        {/*Navigation Bar*/}
            {/*Logo for Mobile Nav*/}
            <img src={iconLogo}
                className="icon-logo"
                alt="logo"/>
            {/*Logo for Tablet & Desktop Nav*/}
            <img src={iconNameLogo}
                className="icon-name-logo"
                alt="logo"/>

            {/*Navigation Menu Links*/}
            <ul className="nav-menu">
                <li className="about-page"><a href="#">About Me</a></li>
                <li className="skills-page"><a href="#">Skill Set</a></li>
                <li className="branding-page"><a href="#">Branding</a></li>
                <li className="projects-page"><a href="#">Projects</a></li>
                <li className="contact-page"><a href="#">Contact Me</a></li>
            </ul>
        </nav>
    )
}

export default Nav
