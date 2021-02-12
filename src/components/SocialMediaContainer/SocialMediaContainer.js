import React from 'react';
import "./SocialMediaContainer.css";
import SocialMediaButtons from '../SocialMediaButtons/SocialMediaButtons';


const SocialMediaContainer = () => {
    return (
        <div>
        {/*Social Media Container*/}
            <div className="socialMediaContainer">
                <SocialMediaButtons />
            </div>
        </div>
    )
}

export default SocialMediaContainer
