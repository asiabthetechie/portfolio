import React from 'react';
import ContactMeContainer from "../components/ContactMeContainer/ContactMeContainer";
import SocialMediaContainer from '../components/SocialMediaContainer/SocialMediaContainer';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contact-page">
            <ContactMeContainer />
            <SocialMediaContainer />
        </div>
    )
}

export default Contacts
