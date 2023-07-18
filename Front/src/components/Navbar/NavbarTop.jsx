import "./NavbarTop.css";
import { Link } from 'wouter';

function NavbarTop({ links }) {
    return (
      <nav className="navtop">
        <ul>
          {links.map((link, index) => (
            <li key={index} className={index === 1 ? "navtop-right" : "navtop-center"}>
              <Link href={`/${link.toLowerCase().replace(/\s/g, '-')}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    ); 
}

export default NavbarTop;
