import "./NavbarBottom.css";


function NavbarBottom({ links }) {

    return (
    <nav className="navbottom">
      <ul>
        
        {links.map((link, index) => (
          <li key={index}>
            <a href="#">{link}</a>
            </li>
        ))}
      </ul>
    </nav>   
    );
  }

  export default NavbarBottom;