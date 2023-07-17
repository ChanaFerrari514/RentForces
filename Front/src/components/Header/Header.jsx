import React from 'react';
import "./Header.css";

function Header({ title1, img, title2 }) {
    return (
        <header className="header">
            
            <h1>{title1} {img && <img src={img.src} alt={img.alt} />} {title2}
            </h1>
            
        </header>
    );
}

export default Header;