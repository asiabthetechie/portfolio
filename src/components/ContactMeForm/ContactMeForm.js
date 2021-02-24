import React from 'react';
import "./ContactMeForm.css";

const ContactMeForm = () => {
    return (
        <div className="contactFormContainer">
            {/*Contact Me Form*/}
            <form>
                {/*Contact Info*/}
                <fieldset>
                    <legend>Contact Info</legend>
                    <div className="contactInfo">
                        {/*First Name*/}
                        <div className="firstName">
                            <label htmlFor="fname">First Name <br/>
                                <input type="text" 
                                        id="fname" 
                                        name="firstname"/>
                            </label>
                        </div>
                        
                        {/*Last Name*/}
                        <div className="lastName">
                            <label htmlFor="lname">Last Name <br/>
                                <input type="text" 
                                        id="lname" 
                                        name="lastname"/>
                            </label>
                        </div>    

                        {/*Email*/}
                        <div className="emailContainer">
                            <label htmlFor="email">Email <br/>
                                <i>Enter a email for response.</i><br/>
                                <input type="text" 
                                        id="email" />
                            </label>
                        </div>

                        {/*Company Name*/}
                        <div className="companyName">
                            <label htmlFor="cname">Company <br/>
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
                    <div className="jobInfo">
                        {/*Primary Job Task*/}
                        <div className="job-task job-info">
                            <label htmlFor="jtask">Primary Job Task <br/>
                                <i>Enter the primary job task..</i> <br/>
                                <input type="text"
                                        id="jtask" />
                            </label>
                        </div>

                        {/*Service*/}
                        <div className="service job-info">
                            <label htmlFor="service">Specific Service <br/>
                                <i>Select the services you require. One required, three maximum.</i><br/>
                                <input type="checkbox" id="webdesign" name="service" value="web-design"/>
                                    <label htmlFor="webdesign">Web Design</label>

                                <input type="checkbox" id="webdevelopment" name="service" value="web-development"/>   
                                    <label htmlFor="webdevelopment">Web Development</label>

                                <input type="checkbox" id="maintenance" name="service" value="web-maintenance"/>
                                    <label htmlFor="maintenance">Web Maintenance</label>
                                
                                <br/>

                                <input type="checkbox" id="consulting" name="service" value="consultation"/>
                                    <label htmlFor="consultation">Consultation</label>

                                <input type="checkbox" id="gamedevelopment" name="service" value="game-development"/>   
                                    <label htmlFor="gamedevelopment">Game Development</label>

                                <input type="checkbox" id="videoediting" name="service" value="video-editing"/>   
                                    <label htmlFor="videoediting">Video Editing</label>
                            </label>
                        </div>

                        {/*Job Role*/}
                        <div className="job-role job-info">
                            <label htmlFor="jobrole">Job Roles <br/>
                                <i>Select the job role you believe best fits the primary task.</i><br/>
                                <input type="radio" id="jobrole1" name="jobrole" value="consultant"/>
                                    <label htmlFor="jobrole1">Consultant</label>
                                <input type="radio" id="jobrole2" name="jobrole" value="designer"/>
                                    <label htmlFor="jobrole2">Designer</label> 
                                <input type="radio" id="jobrole3" name="jobrole" value="developer"/>
                                    <label htmlFor="jobrole3">Developer</label>
                                <input type="radio" id="jobrole4" name="jobrole" value="editor"/>
                                    <label htmlFor="jobrole4">Editor</label>
                            </label>
                        </div>
                        
                        
                        {/*Project Description*/}
                        <div className="job-info">
                            <label htmlFor="pdesc">Project Description</label><br/>
                                <i>Give a brief description of the job/project. No more than 500 characters please.</i><br/>
                                <textarea id="pdesc" name="pdesc">
                                    No need to get detailed, one sentence is fine.
                                </textarea>
                        </div>
                    </div>        
                </fieldset>

                {/*Submit Button*/}
                <div className="submitButton">
                    <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
    )
}

export default ContactMeForm
