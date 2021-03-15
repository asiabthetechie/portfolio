import React from 'react';
import "./ContactMeForm.css";

const ContactMeForm = () => {
    /*Functions to handle the Contact Form Text Inputs*/

    /*Functions to handle invalid Contact Form Inputs*/
    
    /*Function to handle submission of the Contanct Form*/

    return (
        <div className="contact-form-container">
            {/*Contact Me Form*/}
            <form>
                {/*Contact Info*/}
                <fieldset>
                    <legend>Contact Info</legend>
                    <div className="contact-info">
                        {/*First Name*/}
                        <div className="first-name contact-input">
                            <label htmlFor="firstName">
                                <label className="input-header">
                                First Name<em>*</em></label>
                                <input type="text" 
                                        id="firstName" 
                                        name="firstName"
                                        required="required"
                                        />
                            </label>
                        </div>
                        
                        {/*Last Name*/}
                        <div className="last-name contact-input">
                            <label htmlFor="lname">
                                <label className="input-header">
                                Last Name<em>*</em></label>
                                <input type="text" 
                                        id="lname" 
                                        name="lastname" 
                                        required="required"/>
                            </label>
                        </div>    

                        {/*Email*/}
                        <div className="email-container contact-input">
                            <label htmlFor="email">
                                <label className="email-header input-header">
                                Email<em>*</em></label>
                                <i>Enter a email for response.</i><br/>
                                <input type="text" 
                                        id="email" 
                                        required="required"/>
                            </label>
                        </div>

                        {/*Company Name*/}
                        <div className="company-name contact-input">
                            <label htmlFor="cname">
                                <label className="company-header input-header">
                                Company Name</label>
                                <i>Enter your company name here.</i><br/>
                                <input type="text" 
                                    id="cname" 
                                    name="companyname" />
                            </label>
                        </div>
                    </div>
                </fieldset>

                {/*Job Info*/}
                <fieldset>
                    <legend>Job Info</legend>
                    <div className="job-info">
                        {/*Primary Job Task*/}
                        <div className="job-task job-info-input">
                            <label htmlFor="jtask">
                                <label className="input-header">
                                Primary Job Task<em>*</em></label>
                                <i>Enter the primary job task.</i> <br/>
                                <input type="text"
                                        id="jtask" 
                                        required="required"/>
                            </label>
                        </div>

                        {/*Service*/}
                        <div className="service-container job-info-input">
                            <label htmlFor="service">
                                <label className="input-header">
                                Specific Service<em>*</em></label>
                                <i>What's being built or maintained? One required, two max.</i><br/>
                                <div className="service-options">
                                    <label className="checkbox"
                                            htmlFor="website">
                                        <input type="checkbox" 
                                                id="website" 
                                                name="service" 
                                                defaultValue="website"/>
                                        <label className="checkbox-text"
                                                htmlFor="website">
                                                Website
                                        </label>
                                    </label>

                                    <label className="checkbox"
                                            htmlFor="webapp">
                                        <input type="checkbox" 
                                                id="webapp" 
                                                name="service" 
                                                defaultValue="web-app"/>
                                        <label className="checkbox-text"
                                                htmlFor="webapp">
                                                Web App
                                        </label>
                                    </label>

                                    <label className="checkbox"
                                            htmlFor="mobileapp">
                                        <input type="checkbox" 
                                                id="mobileapp" 
                                                name="service" 
                                                defaultValue="mobile-app"/>
                                        <label className="checkbox-text"
                                                htmlFor="mobileapp">
                                                Mobile App
                                        </label>
                                    </label>

                                    <label className="checkbox"
                                            htmlFor="videogame">
                                        <input type="checkbox" 
                                                id="videogame" 
                                                name="service" 
                                                defaultValue="video-game"/>
                                        <label className="checkbox-text"
                                                htmlFor="videogame">
                                                Video Game
                                        </label>
                                    </label>

                                    <label className="checkbox"
                                            htmlFor="videocontent">
                                        <input type="checkbox" 
                                                id="videocontent" 
                                                name="service" 
                                                defaultValue="video-content"/>
                                        <label className="checkbox-text"
                                                htmlFor="videocontent">
                                                Video Content
                                        </label>
                                    </label>

                                    <label className="checkbox"
                                            htmlFor="project">
                                        <input type="checkbox" 
                                                id="project" 
                                                name="service" 
                                                defaultValue="project-guideline"/>
                                        <label className="checkbox-text"
                                                htmlFor="project">
                                                Project Guidelines
                                        </label>
                                    </label>
                                </div>
                            </label>
                        </div>

                        {/*Job Role*/}
                        <div className="job-role job-info-input">
                            <label htmlFor="jobrole">
                                <label className="input-header">
                                Job Roles<em>*</em></label>
                                <i>Select the job role you believe best fits the primary task.</i><br/>
                                <div className="job-roles">
                                    <label className="radio-button"
                                            htmlFor="jobrole1">
                                        <input type="radio" 
                                                id="jobrole1" 
                                                name="jobrole" 
                                                defaultValue="consultant"/>
                                        <label className="radio-button-text"
                                                htmlFor="jobrole1">
                                                Consultant
                                        </label>
                                    </label>
                                    
                                    <label className="radio-button"
                                            htmlFor="jobrole2">
                                        <input type="radio" 
                                                id="jobrole2" 
                                                name="jobrole" 
                                                defaultValue="designer"/>
                                        <label className="radio-button-text"
                                                htmlFor="jobrole2">
                                                Designer
                                        </label>
                                    </label>

                                    <label className="radio-button"
                                            htmlFor="jobrole3">
                                        <input type="radio" 
                                                id="jobrole3" 
                                                name="jobrole" 
                                                defaultValue="developer"/>
                                        <label className="radio-button-text"
                                                htmlFor="jobrole3">
                                                Developer
                                        </label>
                                    </label>
                                    
                                    <label className="radio-button"
                                            htmlFor="jobrole4">
                                        <input type="radio" 
                                                id="jobrole4" 
                                                name="jobrole" 
                                                defaultValue="editor"/>
                                        <label className="radio-button-text"
                                                htmlFor="jobrole4">
                                                Editor
                                        </label>
                                    </label>
                                </div>
                            </label>
                        </div>
                        
                        
                        {/*Project Description*/}
                        <div className="project-description job-info-input">
                            <label htmlFor="pdesc">
                                <label className="input-header">
                                Project Description</label>
                                <i>Give a brief description of the job/project. 
                                Max 500 characters.</i><br/>
                                <textarea 
                                    id="pdesc" 
                                    name="pdesc"
                                    maxlength="500"
                                    spellCheck="default"
                                    placeholder="No need to get too detailed, even one sentence is fine."/>
                            </label>
                        </div>
                    </div>        
                </fieldset>
                {/*Submit Button*/}
                <div className="submit-button">
                    <input type="submit" 
                            value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default ContactMeForm
