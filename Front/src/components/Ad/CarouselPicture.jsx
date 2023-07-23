import React from 'react';
import Image from 'react-bootstrap/Image';



const CarouselPicture = ({ src, alt }) => {
  return <Image src={src} alt={alt} fluid />;
};

export default CarouselPicture;
