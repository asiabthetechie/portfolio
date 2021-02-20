import React from 'react';
import "./SocialMediaContainer.css";
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';
import contactPicture from '../../../src/assets/images/profile-pic256px.png'
import starsDecor from '../../../src/assets/misc/three-stars-svg.svg'
import multipleStarsDecor from '../../../src/assets/misc/multiple-stars-svg.svg'


const SocialMediaContainer = () => {

    return (
        <div className="socialMediaContainer">
            {/*Header Section above Buttons*/}
            <img src={contactPicture} 
                className="contactPic" 
                alt="profile picture"/>

            <h1 className="socials-header">My Socials</h1>
            <div className="connectText">
                <span>Connect with me on any of my socials below!</span>
            </div>

            {/*Decorative Elements*/}
            <img src={starsDecor}
                className="star-decor-right"/>

            <img src={starsDecor}
            className="star-decor-left"/>
            
            <img src={multipleStarsDecor}
            className="multiple-stars-right"/>

            {/*Social Media Button Area*/}
            <SocialMediaButtons />
        </div>
    )
}

export default SocialMediaContainer
