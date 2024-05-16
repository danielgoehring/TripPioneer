import React, { useState } from 'react';

import tpicture1 from '../assets/tpicture1.jpg';
import tpicture2 from '../assets/tpicture2.jpg';
import tpicture3 from '../assets/tpicture3.jpg';
import tpicture4 from '../assets/tpicture4.jpg';
import tpicture5 from '../assets/tpicture5.jpg';
import tpicture6 from '../assets/tpicture6.jpg';
import tpicture7 from '../assets/tpicture7.jpg';
import tpicture8 from '../assets/tpicture8.jpg';
import tpicture9 from '../assets/tpicture9.jpg';
import tpicture10 from '../assets/tpicture10.jpg';
import tpicture11 from '../assets/tpicture11.jpg';
import tpicture12 from '../assets/tpicture12.jpg';
import tpicture13 from '../assets/tpicture13.jpg';
import tpicture14 from '../assets/tpicture14.jpg';
import tpicture15 from '../assets/tpicture15.jpg';
import tpicture16 from '../assets/tpicture16.jpg';

const photoLibrary = [
  { id: 1, src: tpicture1, description: 'Athens, Georgia', dates: 'May 20 - 27', distance: '12 miles away', price: '200', alt: '1'},
  { id: 2, src: tpicture2, description: 'San Fransisco, California', dates: 'May 20 - 27', distance: '54 miles away', price: '123', alt: '2'},
  { id: 3, src: tpicture3, description: 'Austin, Texas', dates: 'May 20 - 27', distance: '80 miles away', price: '155', alt: '3'},
  { id: 4, src: tpicture4, description: 'Seattle, Washington', dates: 'May 20 - 27', distance: '94 miles away', price: '189', alt: '4'},
  { id: 5, src: tpicture5, description: 'Canton, Georgia', dates: 'May 20 - 27', distance: '110 miles away', price: '220', alt: '5'},
  { id: 6, src: tpicture6, description: 'Atlanta, Georgia', dates: 'May 20 - 27', distance: '115 miles away', price: '322', alt: '6'},
  { id: 7, src: tpicture7, description: 'Woodstock, Georgia', dates: 'May 20 - 27', distance: '140 miles away', price: '56', alt: '7'},
  { id: 8, src: tpicture8, description: 'Nashville, Tennesee', dates: 'May 20 - 27', distance: '143 miles away', price: '456', alt: '8'},
  { id: 9, src: tpicture9, description: 'Dallas, Texas', dates: 'May 20 - 27', distance: '159 miles away', price: '113', alt: '9'},
  { id: 10, src: tpicture10, description: 'Albany, New York', dates: 'May 20 - 27', distance: '190 mil away', price: '165', alt: '10'},
  { id: 11, src: tpicture11, description: 'Athens, Georgia', dates: 'May 20 - 27', distance: '202 miles away', price: '102', alt: '11'},
  { id: 12, src: tpicture12, description: 'Andrews, North Carolina', dates: 'May 20 - 27', distance: '210 miles away', price: '230', alt: '12'},
  { id: 13, src: tpicture13, description: 'Savannah, Georgia', dates: 'May 20 - 27', distance: '234 miles away', price: '64', alt: '13'},
  { id: 14, src: tpicture14, description: 'Orlando, Flordia', dates: 'May 20 - 27', distance: '255 miles away', price: '38', alt: '14'},
  { id: 15, src: tpicture15, description: 'Tampa, Flordia', dates: 'May 20 - 27', distance: '267 miles away', price: '120', alt: '15'},
  { id: 16, src: tpicture16, description: 'Dallas, Georgia', dates: 'May 20 - 27', distance: '290 miles away', price: '100', alt: '16'},
]; 







function HomePage() {

  const [photos] = useState(photoLibrary);



  return (
    <>
    <div className="border border-slate-100 mt-6"></div>
    
      <div className="mt-7 flex justify-center">
        <div className="mx-6">
          <div className="ml-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-house-door text-slate-500"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
          </div>

          <div className="text-slate-500 text-sm">Beach house</div>
        </div>
        <div className="mx-6">
          <div className="ml-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-house-door text-slate-500"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
          </div>
          <div className="text-slate-500 text-sm">Mountain house</div>
        </div>
        <div className="mx-6">
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-house-door text-slate-500"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
          </div>

          <div className="text-slate-500 text-sm">Lake house</div>
        </div>
        <div className="mx-6">
          <div className="ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-house-door text-slate-500"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4z" />
            </svg>
          </div>

          <div className="text-slate-500 text-sm">Camp sites</div>
        </div>
      </div>
      <div>

      
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

        
      {photos.map((photo) => {
        console.log('Rendering photo:', photo); // Debugging: Check each photo object
        return (
          <div key={photo.id} className="relative w-full h-80 mb-28">
            <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover rounded-lg shadow-md" />
            <div className="font-semibold mt-2">{photo.description}</div>
            <div className="text-slate-500 text-sm">{photo.distance}</div>
            <div className="text-slate-500 text-sm">{photo.dates}</div>
            <div className="font-semibold">${photo.price} night</div>
          </div>
          
        );
      })}
      </div>
    </div>
    </div>
      
     

      
      
    
      
    </>
  );
}

export default HomePage;
