//import { useState } from "react";
import "./NavbarTop.css";


function NavbarTop({ links }) {

    return (
    <nav className="navtop">
        <ul>
            {links.map((link, index) => (
                <li key={index} className={index === 1 ? "navtop-right" : "navtop-center"}>
                    <a href="#">{link}</a>          
                </li>
            ))}
        </ul>                
    </nav>
    ); 
}

  export default NavbarTop;