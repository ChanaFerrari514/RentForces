import React from 'react';
import { useRoute } from 'wouter';

const AdDetails = () => {
  const [match, params] = useRoute('/ad/:id');
  const adId = params.id;

 
  const adDetails = ad.find((ad) => ad.title === adId);

  if (!adDetails) {
    return <p>Ad not found.</p>;
  }

  const { title, description, imageSrc } = adDetails;

  return (
    <div>
      <h1>{title}</h1>
      <img src={imageSrc} alt={title} />
      <p>{description}</p>
    </div>
  );
}

export default AdDetails;
