import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import ad from '../../../data'; // Importez l'array ad depuis votre fichier data.js
import './AdDetails.css'; 

const AdDetails = () => {
  const [match, params] = useRoute('/ad/:id');
  const adId = Number(params.id);
  const [state, setState] = useState(null); // Initialisez le state à null

  useEffect(() => {
    const adDetails = ad.find((adItem) => adItem.id === adId);
    setState(adDetails);
  }, [adId]);

  if (!state) {
    return (
      <div style={{ marginTop: '200px' }}>
        <p>Ad not found.</p>
      </div>
    );
  }

  const { title, description, imageSrc,wifiIconSrc, wifiIconAlt, smokingIconSrc, smokingIconAlt, price } = state;

  return (
    <div style={{ marginTop: '200px' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={`/${imageSrc}`} alt={title} className="ad-image"/>
      {/* Affichez l'icône ici */}
      <img src={`/${wifiIconSrc}`} alt={wifiIconAlt} className="ad-icon"/>
      <img src={`/${smokingIconSrc}`} alt={smokingIconAlt} className="ad-icon" />
      <p>Prix : ${price}</p>
    </div>
  );
}

export default AdDetails;
