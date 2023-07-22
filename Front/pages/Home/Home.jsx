import React from 'react';
import AdComponent from './AdComponent';
import ad from '../../data';
import './Home.css';


const Home = () => {
  return (
    <div>
      <h1>Rent Your Home</h1>
  
    <div className="ads-container">
      {ad.map((adItem) => (
         <AdComponent key={adItem.id} {...adItem} />
      ))}
    </div>
    </div>
  );
}

export default Home;
