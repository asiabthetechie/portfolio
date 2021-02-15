import React from 'react'
import './Nav.css'

const Nav = () => {

    // Logo
    const mobileLogo = "/portfolio-app/src/assets/logo-and-icons/portfolio-logo-icon64px.png"

    return (
        <nav className="nav-bar">
        {/*Navigation Bar*/}
            {/*Logo for Mobile Nav*/}
            <img className="mobile-logo" src={mobileLogo} />

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
