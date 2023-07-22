import React from 'react';
import { useRoute } from 'wouter';
import { useState, useEffect } from 'react';

import ad from '../../../data.js';



const AdDetails = () => {
  const [match, params] = useRoute('/ad/:id');
  const adId = Number (params.id);
  const [state,setstate] = useState()
  useEffect(() => {
    const adDetails = ad.filter((hi) => hi.id === adId)[0];
    setstate(adDetails)
  },[])
  


  if (!state) {
    return <div style={ {marginTop: '200px'}}><p>Ad not found.</p>
    </div>
  }

  const { title, description, imageSrc } = state;
 console.log (state)
  return (
    <div style={ {marginTop: '200px'}}>
      <h1>{state.title} Hi </h1>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default AdDetails;
