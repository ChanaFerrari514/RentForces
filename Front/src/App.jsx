import './App.css';
import { Router, Route } from 'wouter';
import Header from './components/Header/Header';
import NavbarTop from './components/Navbar/NavbarTop';
import NavbarBottom from './components/Navbar/NavbarBottom';
import LegalNotice from './pages/LegalNotice';

const img = { src: "icons8-police-40.png", alt: "icon-police-figure" }; 
const topLinks = ["Rent Your Home", "Help"];
const bottomLinks = ["Legal Notice", "Privacy Policy", "Contact"];


function App() {
  return (
    <Router>
    <div>
      <Header title1="RENT" img={img} title2="FORCES"  />
      <NavbarTop links={topLinks} />
      <NavbarBottom links={bottomLinks} />
      
      <Route path="/legal-notice">
        <LegalNotice />
      </Route>

    </div>
    </Router>
  );
}

export default App; 
