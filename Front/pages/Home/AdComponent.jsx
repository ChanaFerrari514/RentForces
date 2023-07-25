// page principal
import React from 'react';
import { Link } from 'wouter';
import './AdComponent.css';


const AdComponent = ({ id, title, price, description, imageSrc, wifiIconSrc, wifiIconAlt, parkingIconSrc, parkingIconAlt, }) => {
    return (
        <div className="ad-container">
        <Link href={`/ad/${id}`}>
        <h2 className="ad-title">{title}</h2>
        <img src={imageSrc} alt={title} className="ad-image" />
        <p className="ad-description">{description}</p>
        <p>Price : ${price}</p>
        <img src={wifiIconSrc} alt={wifiIconAlt} className="ad-icon" />
        <img src={parkingIconSrc} alt={parkingIconAlt} className="ad-icon" />
        
        </Link>
    </div>
    );
}

export default AdComponent; 


