import React from 'react';
import AdComponent from './AdComponent';
import './RentYourHome.css';

const ad = [
  {
    title: 'House 1',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'House 2',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'House 3',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'House 4',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },

  {
    title: 'House 5',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'House 6',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'House 7',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
  {
    title: 'House 8',
    description: 'Description',
    imageSrc: 'https://picsum.photos/200/300',
  },
];



const RentYourHome = () => {
  return (
    <div>
      <h1>Rent Your Home</h1>
    <div className="ads-container">
      {ad.map((ad, index) => (
        <AdComponent key={index} {...ad} />
      ))}
    </div>
    </div>
  );
}

export default RentYourHome;
