import React from 'react';

import SlideShow from '../../components/UI/SlideShow/SlideShow';
import Banner from '../../components/Banner/Banner';

// import classes from './Home.module.scss';
import image1 from '../../assets/images/TestBannerImage1.png';
import image2 from '../../assets/images/TestBannerImage2.png';
import image3 from '../../assets/images/TestBannerImage3.png';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import image7 from '../../assets/images/image7.jpg';

const slideShowSlides = [
  { src: image1, alt: 'image1' },
  { src: image2, alt: 'image2' },
  { src: image3, alt: 'image3' },
  { src: image4 },
  { src: image5 },
  { src: image6 },
  { src: image7 }
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
