import React from 'react';
import { useHistory } from 'react-router-dom';

import image1 from '../../../assets/images/HomeSlides/HomeSlide1.jpg';
import image2 from '../../../assets/images/HomeSlides/HomeSlide2.jpg';
import Logo from '../../../components/UI/Logo/Logo';
import image4 from '../../../assets/images/HomeSlides/HomeSlide4.jpg';
import image5 from '../../../assets/images/HomeSlides/HomeSlide5Text.png';

import classes from './HomeSlideShowSlides.module.scss';

export const HomeSlideShowDisplay = {
  height: '30rem',
  sizeByScreen: [
    {
      screens: [1, 2],
      height: '20rem'
    },
    {
      screens: [5, 6],
      height: '35rem'
    }
  ]
};

export const HomeSlideShowSlides = () => {
  const history = useHistory();

  return [
    {
      contents: (
        <React.Fragment>
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
        </React.Fragment>
      ),
      clicked: () => {
        history.push('/products/_/waterproof');
      },
      buttons: [
        {
          text: 'Shop Waterproof Gear'
        }
      ]
    },
    {
      contents: (
        <React.Fragment>
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
        </React.Fragment>
      ),
      clicked: () => {
        history.push('/products/_/sale');
      },
      buttons: [
        {
          text: 'Shop SALE'
        }
      ]
    },
    {
      contents: (
        <React.Fragment>
          <div
            style={{
              position: 'relative',
              height: '100%',
              width: '100%',
              backgroundColor: '#25521c'
            }}
          >
            <Logo
              textColor='#f6f6f6'
              lineColor='f6f6f6'
              className={classes.HomeSlide3Logo}
            />
            <div className={classes.HomeSlide3Text}>
              <p>
                <strong>£15 OFF</strong>
                <em> your First Order of £50 or more</em>
                <br />
                <strong>Online Exclusive</strong>
              </p>
            </div>
          </div>
        </React.Fragment>
      ),
      clicked: () => {
        history.push('/products/_');
      },
      buttons: [
        {
          text: 'Shop Now'
        },
        {
          text: 'View Terms',
          clicked: () => {
            history.push('/terms/first-online-order-discount');
          }
        }
      ]
    },
    {
      contents: (
        <React.Fragment>
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
        </React.Fragment>
      ),
      clicked: () => {
        history.push('/products/5efddc0ceb021732f01c12c0');
      },
      buttons: [
        {
          text: 'Shop Maps'
        }
      ]
    },
    {
      contents: (
        <React.Fragment>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              backgroundColor: '#FFDB0B'
            }}
          >
            <img
              style={{
                display: 'block',
                width: '90%',
                objectFit: 'contain',
                cursor: 'pointer'
              }}
              src={image5}
              alt=''
            />
          </div>
        </React.Fragment>
      ),
      clicked: () => {
        history.push('/products/_/clearance');
      },
      buttons: [
        {
          text: 'Clothing Clearance',
          clicked: () => {
            history.push('/products/_/clothing&clearance');
          },
          minScreenSize: 2
        },
        {
          text: 'Footwear Clearance',
          clicked: () => {
            history.push('/products/_/footwear&clearance');
          },
          minScreenSize: 4
        },
        {
          text: 'Equipment Clearance',
          clicked: () => {
            history.push('/products/_/equipment&clearance');
          },
          minScreenSize: 5
        },
        {
          text: 'Camping Clearance',
          clicked: () => {
            history.push('/products/_/camping&clearance');
          },
          minScreenSize: 6
        },
        {
          text: 'Shop Clearance',
          clicked: () => {
            history.push('/products/_/clearance');
          }
        }
      ]
    }
  ];
};
