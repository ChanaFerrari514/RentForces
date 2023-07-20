// NavbarBottom.jsx
import React from 'react';
import { Link } from 'wouter';
import './NavbarBottom.css';

const NavbarBottom = ({ links }) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <nav className="navbottom">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <Link to={`/${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavbarBottom;
