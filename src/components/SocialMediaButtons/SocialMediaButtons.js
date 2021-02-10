import React from 'react';
import "./SocialMediaButtons.css";

const SocialMediaButtons = () => {

    // Social Media Links
    const twitter = "https://twitter.com/AsiaBtheTechie";
    const linkedin = "https://www.linkedin.com/in/asiabthetechie/";
    const instagram = "https://www.instagram.com/asia.b.the.techie/";
    const reddit = "https://www.reddit.com/user/AsiaBtheTechie";
    const github = "https://github.com/asiabthetechie";


    return (
        <div>
            {/*Button to link to Twitter*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(twitter);
                }}> Twitter
            </button>
            
            {/*Button to link to LinkedIn*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(linkedin);
                }}> LinkedIn
            </button>

            {/*Button to link to Instagram*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(instagram);
                }}> Instagram
            </button>

            {/*Button to link to GitHub*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(github);
                }}> GitHub
            </button>

            {/*Button to link to Reddit*/}
            <button
                className="socialMediaButton"
                onClick={() => {
                    window.open(reddit);
                }}> Reddit
            </button>
        </div>
    )
}

export default SocialMediaButtons
