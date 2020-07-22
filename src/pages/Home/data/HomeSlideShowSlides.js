import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { showModal } from '../../../store/actions/';

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

  const dispatch = useDispatch();

  return [
    {
      contents: {
        img: {
          src: image1,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }
        }
      },
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
      contents: {
        img: {
          src: image2,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }
        }
      },
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
      contents: {
        jsx: (
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
        )
      },
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
            dispatch(
              showModal({
                title: '£15 OFF your First Order Terms',
                main: [
                  { text: 'Online Exclusive!!! Munro Account Required!!!' },
                  { hr: true },
                  { text: 'Key Info:' },
                  {
                    points: [
                      '£15 is taken off the total of your first order with a Munro Account',
                      'Minimum order total of £50 required',
                      'Discount applied automatically at Checkout',
                      'Can only be used Once'
                    ]
                  },
                  { hr: true },
                  {
                    text:
                      'Bare in mind this is a completely fictitious website and no orders or payment are actually made or taken. But feel free to check it works :)'
                  }
                ]
              })
            );
          }
        }
      ]
    },
    {
      contents: {
        img: {
          src: image4,
          style: {
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            cursor: 'pointer'
          }
        }
      },
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
      contents: {
        img: {
          src: image5,
          style: {
            position: 'absolute',
            display: 'block',
            width: '90%',
            right: '5%',
            top: '35%',
            objectFit: 'contain',
            cursor: 'pointer'
          }
        },
        jsx: (
          <React.Fragment>
            <div
              style={{
                height: '100%',
                width: '100%',
                backgroundColor: '#FFDB0B'
              }}
            ></div>
          </React.Fragment>
        )
      },
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
            history.push('/products/5efdd1c4eb021732f01c1262/clearance');
          },
          minScreenSize: 5
        },
        {
          text: 'Camping Clearance',
          clicked: () => {
            history.push('/products/5efdd1cceb021732f01c1263/clearance');
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
