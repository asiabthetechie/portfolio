import React from 'react';
import "./SocialMediaContainer.css";
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';


const SocialMediaContainer = () => {

    // Profile Pic
    const profilePicture = "/portfolio-app/src/assets/images/profile-pic256px.png";

    return (
        <div className="socialMediaContainer">
            <img className="profilePic" 
                src={profilePicture}/>
            <div className="connectText">
                <span>Connect with me on any of the socials below!</span>
            </div>
            <SocialMediaButtons />
        </div>
    )
}

export default SocialMediaContainer
