// NavbarTop.jsx
import React from "react";
import './NavbarTop.css';
import { Link } from 'wouter';
import MenuAlignEnd from './MenuAlignEnd'; // Assurez-vous d'importer correctement MenuAlignEnd

const NavbarTop = ({ links }) => {
  return (
    <nav className="navtop">
      <ul>
        {links.map((link, index) => (
          <li key={index} className={index === 1 ? "navtop-right" : "navtop-center"}>
            {link.isDropdown ? (
              <MenuAlignEnd />
            ) : (
              <Link to={`/${link.text.toLowerCase().replace(/\s/g, '-')}`}>
                {link.text}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavbarTop;
