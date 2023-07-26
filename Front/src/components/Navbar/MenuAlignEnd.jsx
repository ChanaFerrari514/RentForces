import React, { useState } from 'react';
import { Link } from 'wouter';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import CustomModal from '../LogOut/CustomModal'; 
import './MenuAlignEnd.css'

const MenuAlignEnd = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialiser à "false" par défaut

  const dropdownItems = [
    { text: "Sign Up", link: "/sign-up" },
    { text: "Sign In", link: "/sign-in" },
    { text: "Log Out", link: "/log-out" }
  ];
  const handleLogout = () => {
    // Supprimez le jeton d'accès de la mémoire locale pour effectuer la déconnexion
    localStorage.removeItem('access_token');
    // Mettez à jour l'état isLoggedIn pour indiquer que l'utilisateur est déconnecté
    setIsLoggedIn(false);
  };

  return (
    <DropdownButton align="end" title={<FontAwesomeIcon icon={faUser} style={{ color: "#feffff" }} />} id="dropdown-menu-align-end">
      {dropdownItems.map((item, index) => (
        <Link key={index} href={item.link}>
          <Dropdown.Item key={index} eventKey={index + 1} className="dropdown-item-custom">
            {/* Vérifiez si l'utilisateur est connecté et si l'élément est le bouton de déconnexion */}
            {item.text === "Log Out" && isLoggedIn ? (
            <CustomModal
            buttonText={item.text}
            onConfirm={handleLogout}
            modalTitle="Déconnexion"
            modalMessage="Êtes-vous sûr de vouloir vous déconnecter?"
          />
            ) : (
              item.text
            )}
          </Dropdown.Item>
        </Link>
      ))}
    </DropdownButton>
  );
};

export default MenuAlignEnd;
