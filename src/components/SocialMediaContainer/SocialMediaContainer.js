import React from 'react';
import "./SocialMediaContainer.css";
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';
import contactPicture from '../../../src/assets/images/profile-pic256px.png'
import starsDecor from '../../../src/assets/misc/three-stars128px.png'


const SocialMediaContainer = () => {

    return (
        <div className="socialMediaContainer">
            {/*Header Section above Buttons*/}
            <img src={contactPicture} 
                className="contactPic" 
                alt="profile picture"/>

            <div className="connectText">
                <span>Connect with me on any of my socials below!</span>
            </div>

            {/*Decorative Elements*/}
            <img src={starsDecor}
                className="star-decor-right"/>

            <img src={starsDecor}
            className="star-decor-left"/>

            {/*Social Media Button Area*/}
            <SocialMediaButtons />
        </div>
    )
}

export default SocialMediaContainer
