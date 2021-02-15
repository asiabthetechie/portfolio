import React from 'react';
import "./SocialMediaContainer.css";
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';


const SocialMediaContainer = () => {

    // Profile Pic
    const profilePicture = "/portfolio-app/src/assets/images/profile-pic256px.png";
    const stars = "/portfolio-app/src/assets/misc/three-stars128px.png";

    return (
        <div className="socialMediaContainer">
            {/*Header Section above Buttons*/}
            <img className="profilePic" 
                src={profilePicture}/>
            <div className="connectText">
                <span>Connect with me on any of my socials below!</span>
            </div>

            {/*Decorative Elements*/}
            <img className="star-decor-right"
                src={stars}/>
            <img className="star-decor-left"
                src={stars}/>

            {/*Social Media Button Area*/}
            <SocialMediaButtons />
        </div>
    )
}

export default SocialMediaContainer
