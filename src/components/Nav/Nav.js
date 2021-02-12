import React from 'react'

const Nav = () => {
    return (
        <div>
            {/*Navigation Bar*/}
            <nav>
                {/*Navigation Menu Links*/}
                <ul className="nav-menu">
                    <li className="about-page"><a href="#">About Me</a></li>
                    <li className="skills-page"><a href="#">Skill Set</a></li>
                    <li className="branding-page"><a href="#">Branding</a></li>
                    <li className="projects-page"><a href="#">Projects</a></li>
                    <li className="contact-page"><a href="#">Contact Me</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Nav
