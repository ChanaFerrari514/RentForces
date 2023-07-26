import React, { useState } from 'react';
import { Link } from 'wouter';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './MenuAlignEnd.css'

const MenuAlignEnd = () => {
  const token = localStorage.getItem('access_token');
 console.log('token');
 console.log(token);
 
 let dropdownItems = [
     { text: "Sign Up", link: "/sign-up" },
     { text: "Sign In", link: "/sign-in" },
   ];
 
 if (token) {
   dropdownItems = [
     { text: "Log Out", link: "/log-out" }
   ];
 }

 return (
   <DropdownButton align="end" title={<FontAwesomeIcon icon={faUser} style={{ color: "#feffff" }} />} id="dropdown-menu-align-end">
     {dropdownItems.map((item, index) => (
       <Link key={index} href={item.link}>
       <Dropdown.Item key={index} eventKey={index + 1} className="dropdown-item-custom">{item.text}</Dropdown.Item>
       </Link>
     ))}
   </DropdownButton>
 );
}

export default MenuAlignEnd;
