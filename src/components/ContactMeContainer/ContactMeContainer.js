import React from 'react';
import "./ContactMeContainer.css";
import cursorPic from "../../../src/assets/misc/cursor-svg.svg";
import ContactMeForm from "../ContactMeForm/ContactMeForm";

const ContactMeContainer = () => {
    return (
        <div className="contact-me-container">
            <h1 className="contact-me-header">Contact Me</h1>
            <span className="contact-me-container-text">To contact me directly 
            for assistance with your next project please fill out the contact form below.
            </span>
            <ContactMeForm />
            <img className="decor-image cursor-image"
                src={cursorPic}
            />
        </div>
    )
}

export default ContactMeContainer
