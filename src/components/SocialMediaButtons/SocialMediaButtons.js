import React from 'react';
import "./SocialMediaButtons.css";
import twitterPic from '../../../src/assets/logo-and-icons/twitter-icon-svg.svg';
import linkedinPic from '../../../src/assets/logo-and-icons/linkedin-icon-svg.svg';
import instagramPic from '../../../src/assets/logo-and-icons/instagram-icon-svg.svg';
import githubPic from '../../../src/assets/logo-and-icons/github-icon-svg.svg';
import redditPic from '../../../src/assets/logo-and-icons/reddit-icon-svg.svg';

const SocialMediaButtons = () => {

    // Social Media Links
    const twitter = "https://twitter.com/AsiaBtheTechie";
    const linkedin = "https://www.linkedin.com/in/asiabthetechie/";
    const instagram = "https://www.instagram.com/asia.b.the.techie/";
    const reddit = "https://www.reddit.com/user/AsiaBtheTechie";
    const github = "https://github.com/asiabthetechie";

    return (
        <div className="social-media-button-container">
            {/*Button to link to Twitter*/}
            <button
                className="social-media-button"
                onClick={() => {
                    window.open(twitter);}}> 
                <img className="social-media-button-image  twitterIcon"
                src={twitterPic}/>
                Twitter
            </button>
            
            {/*Button to link to LinkedIn*/}
            <button
                className="social-media-button"
                onClick={() => {
                    window.open(linkedin);}}> 
                <img className="social-media-button-image linkedinIcon"
                src={linkedinPic}/>    
                LinkedIn
            </button>

            {/*Button to link to Instagram*/}
            <button
                className="social-media-button"
                onClick={() => {
                    window.open(instagram);}}> 
                <img className="social-media-button-image instagramIcon"
                src={instagramPic}/> 
                Instagram
            </button>

            {/*Button to link to GitHub*/}
            <button
                className="social-media-button"
                onClick={() => {
                    window.open(github);}}> 
                <img className="social-media-button-image githubIcon"
                src={githubPic}/> 
                GitHub
            </button>

            {/*Button to link to Reddit*/}
            <button
                className="social-media-button"
                onClick={() => {
                    window.open(reddit);}}> 
                <img className="social-media-button-image redditIcon"
                src={redditPic}/>     
                Reddit
            </button>
        </div>
    )
}

export default SocialMediaButtons
