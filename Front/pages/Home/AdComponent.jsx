import React from 'react';
import { Link } from 'wouter';
import './AdComponent.css'

const AdComponent = ({ id, title, description, imageSrc, wifiIconSrc, wifiIconAlt, smokingIconSrc, smokingIconAlt, 
    nosmokingIconSrc, nosmokingIconAlt,price }) => {
    return (
        <div className="ad-container">
            <Link href={`/ad/${id}`}>
            <h2 className="ad-title">{title}</h2>
            <img src={imageSrc} alt={title} className="ad-image" />
            <p className="ad-description">{description}</p>
            <img src={`/${wifiIconSrc}`} alt={wifiIconAlt} className="ad-icon" />
            <img src={`/${smokingIconSrc}`} alt={smokingIconAlt} className="ad-icon" />
            <img src={`/${nosmokingIconSrc}`} alt={nosmokingIconAlt} className="ad-icon" />
            </Link>
        </div>
    );
}

export default AdComponent; 


