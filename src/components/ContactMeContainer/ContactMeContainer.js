import React from 'react';
import "./ContactMeContainer.css";
import ContactMeForm from "../ContactMeForm/ContactMeForm";

const ContactMeContainer = () => {
    return (
        <div className="contactMeContainer">
            <h1 className="contactMeHeader">Contact Me</h1>
            <span>If you want to contact me directly for assistance with your next project please fill out the contact form below.</span>
            <ContactMeForm />
        </div>
    )
}

export default ContactMeContainer
