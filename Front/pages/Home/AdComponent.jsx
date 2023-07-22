import React from 'react';
import { Link } from 'wouter';
import './AdComponent.css'

const AdComponent = ({ id, title, description, imageSrc }) => {
    return (
        <div className="ad-container">
            <Link href={`/ad/${id}`}>
            <h2 className="ad-title">{title}</h2>
            <img src={imageSrc} alt={title} className="ad-image" />
            <p className="ad-description">{description}</p>
            </Link>
        </div>
    );
}

export default AdComponent;