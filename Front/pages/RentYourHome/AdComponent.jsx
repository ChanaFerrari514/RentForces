import React from 'react';

import './AdComponent.css'

const AdComponent = ({ title, description, imageSrc }) => {
    return (
        <div className="ad-container">
            <h2 className="ad-title">{title}</h2>
            <img src={imageSrc} alt={title} className="ad-image" />
            <p className="ad-description">{description}</p>
        </div>
    );
}

export default AdComponent;