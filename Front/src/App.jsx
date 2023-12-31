import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ad from '../data';
import Header from './components/Header/Header';
import NavbarTop from './components/Navbar/NavbarTop';
import NavbarBottom from './components/Navbar/NavbarBottom';
import Home from '../pages/Home/Home';
import AdDetails from '../src/components/Ad/AdDetails'
import LegalNotice from '../pages/LegalNotice/LegalNotice';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import ContactUs from '../pages/ContactUs/ContactUs';
import SignInForm from '../pages/SignInForm/SignInForm';
import SignUpForm from '../pages/SignUpForm/SignUpForm';
import LogOut from '../pages/LogOut/LogOut';
import UserDashboard from '../pages/UserDashboard/UserDashboard';
import RentYourHome from '../pages/RentYourHome/RentYourHome';
import Help from '../pages/Help/Help';
import { Router, Switch, Redirect, Route, Link } from 'wouter';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
library.add(faUser);

const img = { src: "/imgicons/icons8-police-40.png", alt: "icon-police-figure" }; 
const topLinks = [{ text: "Home", isDropdown: false },  { text: "Rent Your Home", isDropdown: false },
{
  text: "Sign Up",
  isDropdown: true,
  dropdownItems: [
    "Sign In",
    "Another action",
    "Something else here",
    "Log Out"
  ]
},
{ text: "Help", isDropdown: false }
];
const bottomLinks = ["Legal Notice", "Privacy Policy", "Contact Us"];


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
 
  

  return (
    <Router>
    <div>
      <Header title1="RENT" img={img} title2="FORCES"  />
      <NavbarTop links={topLinks} />
      <NavbarBottom links={bottomLinks} /> 

  
      
      
      <Switch>
          <Route path="/home-page">
            <Home />
          </Route>

          <Route path="/rent-your-home">
            <RentYourHome />
          </Route> 

          <Route path="/help">
            <Help />
          </Route>

          <Route path="/sign-up">
            <SignUpForm setIsLoggedIn={setIsLoggedIn} />
          </Route> 

          <Route path="/sign-in">
            <SignInForm setIsLoggedIn={setIsLoggedIn} />
          </Route> 

          <Route path="/log-out">
            <LogOut />
          </Route> 

          <Route path="/legal-notice">
            <LegalNotice />
          </Route>

          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>

          <Route path="/contact-us">
            <ContactUs />
          </Route>

          <Route path="/ad/:id">
            <AdDetails ad={ad} />
          </Route>
            {/* Rediriger vers la page de connexion si l'utilisateur n'est pas connecté */}
          <Route path="/user-dashboard">
            {isLoggedIn ? <UserDashboard /> : <Redirect to="/sign-in" />}
          </Route>
             {/* Rediriger vers la page de création de compte par défaut */}
          <Redirect to="/home-page" />
      </Switch> 
      

    </div>
    </Router>
  );
}

export default App; 
