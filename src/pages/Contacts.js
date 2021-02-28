import React from 'react';
import ContactMeContainer from "../components/ContactMeContainer/ContactMeContainer";
import SocialMediaContainer from '../components/SocialMediaContainer/SocialMediaContainer';
import shootingStarsPic from "../../src/assets/misc/shooting-stars-svg.svg";
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contact-page">
            <ContactMeContainer />
            <img className="decor-image shooting-stars-image"
                src={shootingStarsPic}
            />
            <SocialMediaContainer />
        </div>
    )
}

export default Contacts
