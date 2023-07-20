import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header/Header';
import NavbarTop from './components/Navbar/NavbarTop';
import NavbarBottom from './components/Navbar/NavbarBottom';
import RentYourHome from '../pages/RentYourHome/RentYourHome';
import LegalNotice from '../pages/LegalNotice/LegalNotice';
import { Router, Switch, Redirect, Route} from 'wouter';
import SignUp from '../pages/SignUp/SignUp';

const img = { src: "icons8-police-40.png", alt: "icon-police-figure" }; 
const topLinks = ["Rent Your Home", "Sign Up", "Log In","Help"];
const bottomLinks = ["Legal Notice", "Privacy Policy", "Contact"];


const App = () => {
 

  return (
    <Router>
    <div>
      <Header title1="RENT" img={img} title2="FORCES"  />
      <NavbarTop links={topLinks} />
      <NavbarBottom links={bottomLinks} />
     
      
      
      <Switch>
          <Route path="/rent-your-home">
            <RentYourHome />
          </Route>
          <Route path="/legal-notice">
            <LegalNotice />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>  
          <Redirect to="/rent-your-home" />
        </Switch> 
      

    </div>
    </Router>
  );
}

export default App; 
