import React from 'react';

import image1 from '../../../assets/images/TestBannerImage1.png';
import image2 from '../../../assets/images/TestBannerImage2.png';
import image3 from '../../../assets/images/TestBannerImage3.png';
import image4 from '../../../assets/images/image4.jpg';

export const HomeSlideShowDisplay = {
  height: '20rem',
  sizeByScreen: [
    {
      screens: [1, 2],
      height: '10rem'
    },
    {
      screens: [5, 6],
      height: '25rem'
    }
  ]
};

export const HomeSlideShowSlides = [
  {
    contents: (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black'
        }}
      >
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }}
          src={image1}
          alt=''
        />
      </div>
    )
  },
  {
    contents: (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black'
        }}
      >
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }}
          src={image2}
          alt=''
        />
      </div>
    )
  },
  {
    contents: (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black'
        }}
      >
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }}
          src={image3}
          alt=''
        />
      </div>
    )
  },
  {
    contents: (
      <div
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: 'black'
        }}
      >
        <img
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }}
          src={image4}
          alt=''
        />
      </div>
    )
  }
];