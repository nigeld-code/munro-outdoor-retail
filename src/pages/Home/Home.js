import React from 'react';

import SlideShow from '../../components/UI/SlideShow/SlideShow';
import Banner from '../../components/Banner/Banner';

// import classes from './Home.module.scss';
import image1 from '../../assets/images/TestBannerImage1.png';
import image2 from '../../assets/images/TestBannerImage2.png';
import image3 from '../../assets/images/TestBannerImage3.png';
import image4 from '../../assets/images/image4.jpg';

const slideShowSlides = [
  {
    contents: (
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
    )
  },
  {
    contents: (
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
    )
  },
  {
    contents: (
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
    )
  },
  {
    contents: (
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
    )
  }
];

const Home = () => {
  return (
    <React.Fragment>
      <SlideShow
        slides={slideShowSlides}
        display={{
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
        }}
        timings={{ autoSlideChangeTime: 4000, slideChangeTime: 1250 }}
      />
      <Banner
        contents={[
          {
            text: <div>Click &amp; Collect</div>,
            click: () => console.log('Hello'),
            minScreen: 2
          },
          {
            text: (
              <div>
                <strong>Free</strong> Next Day Delivery over £60
              </div>
            )
          },
          {
            text: (
              <div>
                <strong>Free</strong> Returns
              </div>
            ),
            minScreen: 1
          }
        ]}
      />
    </React.Fragment>
  );
};

export default Home;
