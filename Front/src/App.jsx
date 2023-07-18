import './App.css';
import Header from './components/Header/Header';
import NavbarTop from './components/Navbar/NavbarTop';
import NavbarBottom from './components/Navbar/NavbarBottom';
import RentYourHome from './pages/RentYourHome/RentYourHome';
import LegalNotice from './pages/LegalNotice/LegalNotice';
import { Router, Switch, Redirect, Route } from 'wouter';

const img = { src: "icons8-police-40.png", alt: "icon-police-figure" }; 
const topLinks = ["Rent Your Home", "Sign Up", "Log In","Help"];
const bottomLinks = ["Legal Notice", "Privacy Policy", "Contact"];


function App() {
  return (
    <Router>
    <div>
      <Header title1="RENT" img={img} title2="FORCES"  />
      <NavbarTop links={topLinks} />
      <NavbarBottom links={bottomLinks} />
      
      <Switch>
        <Route path="/rent-your-home" component={RentYourHome} /> 
        <Route path="/legal-notice" component={LegalNotice} />
        <Redirect to="/rent-your-home" />
      </Switch>  
      

    </div>
    </Router>
  );
}

export default App; 
