import React from 'react';
import "./SocialMediaButtons.css";

const SocialMediaButtons = () => {

    // Social Media Links
    const twitter = "https://twitter.com/AsiaBtheTechie";
    const linkedin = "https://www.linkedin.com/in/asiabthetechie/";
    const instagram = "https://www.instagram.com/asia.b.the.techie/";
    const reddit = "https://www.reddit.com/user/AsiaBtheTechie";
    const github = "https://github.com/asiabthetechie";

    // Social Media Images
    const twitterPic = "/portfolio-app/src/assets/logo-and-icons/twitter-icon64px.png";
    const linkedinPic = "/portfolio-app/src/assets/logo-and-icons/linkedin-icon64px.png";
    const instagramPic = "/portfolio-app/src/assets/logo-and-icons/instagram-icon64px.png";
    const githubPic = "/portfolio-app/src/assets/logo-and-icons/github-icon64px.png";
    const redditPic = "/portfolio-app/src/assets/logo-and-icons/reddit-icon64px.png";

    return (
        <div className="socialMediaButtonContainer">
            {/*Button to link to Twitter*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(twitter);}}> 
                <img className="socialMediaButtonImage twitterIcon"
                src={twitterPic}/>
                Twitter
            </button>
            
            {/*Button to link to LinkedIn*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(linkedin);}}> 
                <img className="socialMediaButtonImage linkedinIcon"
                src={linkedinPic}/>    
                LinkedIn
            </button>

            {/*Button to link to Instagram*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(instagram);}}> 
                <img className="socialMediaButtonImage instagramIcon"
                src={instagramPic}/> 
                Instagram
            </button>

            {/*Button to link to GitHub*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(github);}}> 
                <img className="socialMediaButtonImage githubIcon"
                src={githubPic}/> 
                GitHub
            </button>

            {/*Button to link to Reddit*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(reddit);}}> 
                <img className="socialMediaButtonImage redditIcon"
                src={redditPic}/>     
                Reddit
            </button>
        </div>
    )
}

export default SocialMediaButtons
