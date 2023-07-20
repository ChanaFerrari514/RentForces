import React from "react";
import "./NavbarTop.css";
import { Link, useLocation } from 'wouter';

const NavbarTop = ({ links }) => {

    return (
      <nav className="navtop">
        <ul>
          {links.map((link, index) => (
            <li key={index} className={index === 1 ? "navtop-right" : "navtop-center"}>
              <Link to={`/${link.toLowerCase().replace(/\s/g, '-')}`} onClick={() => handleLinkClick(link)}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    ); 
}

export default NavbarTop;
