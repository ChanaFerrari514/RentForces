// page individuel de chaque maison
import React, { useEffect, useState } from 'react';
import { useRoute } from 'wouter';
import Carousel from 'react-bootstrap/Carousel';
import { DatePicker } from '@gsebdev/react-simple-datepicker';
import adindividuel from '../../../adindividuel';
import './AdDetails.css'; 

const AdDetails = () => {
  const [match, params] = useRoute('/ad/:id');
  const adId = Number(params.id);
  const [state, setState] = useState(null); // Initialisez le state à null

  useEffect(() => {
    const adDetails = adindividuel.find((adItem) => adItem.id === adId);
    setState(adDetails);
  }, [adId]);

  if (!state) {
    return (
      <div style={{ marginTop: '200px' }}>
        <p>Ad not found.</p>
      </div>
    );
  }

  const { title, imageSrc, image2Src,image3Src, image4Src, adDescription, wifiIconSrc, wifiIconAlt, parkingIconSrc, parkingIconAlt, price } = state;

  // Create a callback function for handling the date change event
  const onChangeCallback = (selectedDate) => {
    // Handle the selected date here if needed
    console.log('Selected date:', selectedDate);
  };

  return (
    <div style={{ marginTop: '200px' }}>
      <h1>{title}</h1>
      <Carousel>
        <Carousel.Item>
          <img src={`/${imageSrc}`} alt={title} className="carousel-image" />
         
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
       
        <Carousel.Item>
          <img src={`/${image2Src}`} alt={title} className="carousel-image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={`/${image3Src}`} alt={title} className="carousel-image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img src={`/${image4Src}`} alt={title} className="carousel-image" />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
      <p style={{ fontSize: '26px' }}>{adDescription}</p>
      <img src={`/${wifiIconSrc}`} alt={wifiIconAlt} className="ad-icon" />
      <img src={`/${parkingIconSrc}`} alt={parkingIconAlt} className="ad-icon" />
     
      <p>Prix : €{price}</p>

      <p>Check Out Availabilities</p>
      <DatePicker id="datepicker-id" name="date-demo" onChange={onChangeCallback} value={'01/02/2023'} />
    </div>
    
  );
};

export default AdDetails;
