import React from 'react';
import { useRoute } from 'wouter';
import { useState, useEffect } from 'react';
import ad from '../../../data.js';
import Carousel from 'react-bootstrap/Carousel';
import CarouselPicture from './CarouselPicture'; 
import './AdDetails.css'; 

const AdDetails = ({  }) => {
  const [match, params] = useRoute('/ad/:id');
  const adId = Number (params.id);
  const [state,setstate] = useState();

  useEffect(() => {
    const adDetails = ad.filter((hi) => hi.id === adId)[0];
    setstate(adDetails)
  },[])
  
  if (!state) {
    return <div style={ {marginTop: '200px'}}><p>Ad not found.</p>
    </div>
  }

  const { title, description, imageSrc } = state;

  return (
    <div style={{ marginTop: '200px' }}>
      <h1>{title}</h1>
      <p>{description}</p>
      <Carousel>
        <Carousel.Item>
          <CarouselPicture src={imageSrc} alt={title} />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Ajoutez les autres éléments du carousel ici */}
      </Carousel>

    </div>
  );
}

export default AdDetails;
