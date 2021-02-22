import React from 'react';
import "./ContactMeForm.css";

const ContactMeForm = () => {
    return (
        <div>
            <h1>Contact Me</h1>
            <span>Fill out the form below to contact me directly for your next project.</span>

            {/*Start of the Form*/}
            <form action="" className="contactForm">
                {/*Name*/}
                <fieldset>
                <legend>Name</legend>
                <label for="fname">First Name:</label>
                <input type="text" 
                        id="fname" 
                        name="firstname" 
                        placeholder="First Name..."/>
                <label for="lname">Last Name:</label>
                <input type="text" 
                        id="lname" 
                        name="lastname" 
                        placeholder="Last Name..."/>
                </fieldset>

                {/*Contact Info*/}
                <fieldset>
                <legend>Contact Info</legend>
                <label for="email">Email:</label>
                <input type="text" 
                        id="email" 
                        placeholder="Email..."/>
                <label for="cname">Company</label>
                <input type="text" 
                        id="cname" 
                        name="companyname" 
                        placeholder="Please include your company name..."/>
                </fieldset>

                {/*Project Info*/}
                <fieldset>
                <legend>Project Info</legend>
                <label for="ptitle">Project Title:</label>
                <input type="text"
                        id="ptitle"
                        placeholder="Enter your working project title..."/>
                <label for="pjobrole">Desired Job Role:</label>
                <select id="pjobrole" name="pjobrole">
                    <option value="website-dev">Website Devleoper</option>
                    <option value="web-app-dev">Web App Developer</option>
                    <option value="mobile-app-dev">Mobile App Developer</option>
                    <option value="video-game-dev">Video Game Developer</option>
                    <option value="video-editor">Video Editor</option>
                </select>
                <textarea name="pdesc">
                    Please tell me about your project and the development services the project requires. 
                </textarea>
                </fieldset>

                {/*Submit Button*/}
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default ContactMeForm
