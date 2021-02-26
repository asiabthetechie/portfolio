import React from 'react';
import "./ContactMeForm.css";

const ContactMeForm = () => {
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
                            <label htmlFor="fname">
                                <label className="input-header">
                                First Name<em>*</em></label>
                                <input type="text" 
                                        id="fname" 
                                        name="firstname"
                                        required="required"/>
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
                                Company Name<em>*</em></label>
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
                                <i>What's being built or maintained? One required, three max.</i><br/>
                                <div className="service-options">
                                    <label htmlFor="website">
                                    <input type="checkbox" 
                                            id="website" 
                                            name="service" 
                                            defaultValue="website"/>
                                            Website
                                    </label>

                                    <label htmlFor="webapp">
                                    <input type="checkbox" 
                                            id="webapp" 
                                            name="service" 
                                            defaultValue="web-app"/>
                                            Web App
                                    </label>

                                    <label htmlFor="mobileapp">
                                    <input type="checkbox" 
                                            id="mobileapp" 
                                            name="service" 
                                            defaultValue="mobile-app"/>
                                            Mobile App
                                    </label>

                                    <label htmlFor="videogame">
                                    <input type="checkbox" 
                                            id="videogame" 
                                            name="service" 
                                            defaultValue="video-game"/>
                                            Video Game
                                    </label>

                                    <label htmlFor="videocontent">
                                    <input type="checkbox" 
                                            id="videocontent" 
                                            name="service" 
                                            defaultValue="video-content"/>
                                            Video Content
                                    </label>

                                    <label htmlFor="project">
                                    <input type="checkbox" 
                                            id="project" 
                                            name="service" 
                                            defaultValue="project-guideline"/>
                                            Project Guideline
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
                                    <label htmlFor="jobrole1">
                                    <input type="radio" 
                                            id="jobrole1" 
                                            name="jobrole" 
                                            defaultValue="consultant"/>
                                    Consultant</label>
                                    
                                    <label htmlFor="jobrole2">
                                    <input type="radio" 
                                            id="jobrole2" 
                                            name="jobrole" 
                                            defaultValue="designer"/>
                                    Designer</label>

                                    <label htmlFor="jobrole3">
                                    <input type="radio" 
                                            id="jobrole3" 
                                            name="jobrole" 
                                            defaultValue="developer"/>
                                    Developer</label>
                                    
                                    <label htmlFor="jobrole4">
                                    <input type="radio" 
                                            id="jobrole4" 
                                            name="jobrole" 
                                            defaultValue="editor"/>
                                    Editor</label>
                                </div>
                            </label>
                        </div>
                        
                        
                        {/*Project Description*/}
                        <div className="project-description job-info-input">
                            <label htmlFor="pdesc">
                                <label className="input-header">
                                Project Description<em>*</em></label>
                                <i>Give a brief description of the job/project. 
                                Max 500 characters.</i><br/>
                                <textarea 
                                    id="pdesc" 
                                    name="pdesc"
                                    maxLength="500"
                                    defaultValue="No need to get too detailed, even one sentence is fine."/>
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
