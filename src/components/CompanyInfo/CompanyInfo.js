import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { showModal } from '../../store/actions/';

import classes from './CompanyInfo.module.scss';

const companyInfoData = ({ history, dispatch }) => {
  return [
    [
      {
        text: 'Help'
      },
      {
        text: 'My Account',
        link: () => {
          history.push('/account');
        }
      },
      {
        text: 'FAQs',
        link: () => {
          dispatch(
            showModal({
              title: 'FAQs',
              main: [
                {
                  points: ['How Do I Order?']
                },
                {
                  text:
                    'Select the products you would like to purchase then select the size and quantity you require. Then click on add to basket.'
                },
                {
                  text:
                    'This product will then add to your basket, you may continue shopping and add more products to you basket or finish your order.'
                },
                {
                  text:
                    'To finish your order click on your basket (top right) this will show you what products you have in your basket. You may amend or remove products from your basket.'
                },
                {
                  text:
                    'When you are happy with your selection click on "Go to checkout" then follow the instructions to select Delivery or Click & Collect then the further instructions to Pay for your purchase.'
                },
                {
                  text:
                    'All done congrats you have made a purchase, do not forget Munro Outdoor Retail is not a real business and you will not be charged, oh and no products will arrive, have fun!!'
                },
                { points: ['Further Questions....'] },
                { text: 'Further Answers... :)' }
              ]
            })
          );
        }
      },
      {
        text: 'Forgotten Password',
        link: () => {
          dispatch(
            showModal({
              title: 'Forgotten Password',
              main: [
                {
                  text:
                    'Click on Account (top right corner) then click on "Forgotten your password?". Then follow the instructions to reset your password, you will need to know the email connected to your account'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Contact Us',
        link: () => {
          dispatch(
            showModal({
              title: 'Contact Us',
              main: [
                {
                  text:
                    'In all honesty you will struggle to get hold of us as this is not a real business, Sorry :P'
                }
              ]
            })
          );
        }
      }
    ],
    [
      {
        text: 'Shopping with Us'
      },
      {
        text: 'Click & Collect',
        link: () => {
          dispatch(
            showModal({
              title: 'Click & Collect',
              main: [
                {
                  points: [
                    'You CLICK on the things you want',
                    'Then COLLECT from the shop'
                  ]
                },
                { text: 'Sorted' }
              ]
            })
          );
        }
      },
      {
        text: 'Delivery',
        link: () => {
          dispatch(
            showModal({
              title: 'Delivery',
              main: [
                { text: 'Free next day Deliver on all orders over £60' },
                {
                  text:
                    'Delivery charge for order under £60 are £5 and will arrive within 3 working days of your order confirmation'
                },
                { hr: true },
                {
                  text:
                    'Delivery may take longer on days ending in "y", due to this business being made-up. No Refunds'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Returns & Refunds',
        link: () => {
          dispatch(
            showModal({
              title: 'Returns & Refunds',
              main: [
                {
                  points: ['Returns']
                },
                {
                  text:
                    'You will recieve a full refund on any purchase returned within 30 days of the purchase date, as long as the product is unused and has retained any of its orignal packaging and labels etc. To return your product however, you wil need to find me! Good Luck ;)'
                },
                {
                  points: ['Refunds']
                },
                {
                  text: 'Umm, No Refunds. Tough Sh*t!'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Payment Methods',
        link: () => {
          dispatch(
            showModal({
              title: 'Payment Methods',
              main: [
                {
                  text:
                    'Credit/Debit Cards all accepted, as no payment is actually taken, duh!'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Privacy Policy',
        link: () => {
          dispatch(
            showModal({
              title: 'Privacy Policy',
              main: [{ text: 'Does anyone evey actually read this?' }]
            })
          );
        }
      }
    ],
    [
      {
        text: 'Info'
      },
      {
        text: 'Cookies',
        link: () => {
          dispatch(
            showModal({
              title: 'Cookies',
              main: [
                {
                  text:
                    'Yes, I like cookies they are very yummy! and they are very useful in web design'
                }
              ]
            })
          );
        }
      },
      {
        text: 'WEEE',
        link: () => {
          dispatch(
            showModal({
              title: 'Waste Electrical and Electronic Equipment recycling',
              main: [{ text: 'Basically recycle electrical stuff!' }]
            })
          );
        }
      },
      {
        text: 'Gift Cards',
        link: () => {
          dispatch(
            showModal({
              title: 'Gift Cards',
              main: [
                {
                  text:
                    'Gift Cards are available in our stores in values of £1000, £2500 and £5000. Weirdly they are not that popular.'
                }
              ]
            })
          );
        }
      }
    ],
    [
      {
        text: 'About Munro'
      },
      {
        text: 'About Us',
        link: () => {
          dispatch(
            showModal({
              title: 'About Us',
              main: [
                {
                  text:
                    'We are the largest UK fictional Outdoor Retailer. and over made up details... :)'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Sir Hugh Munro',
        link: () => {
          dispatch(
            showModal({
              title: 'Sir Hugh Munro',
              main: [
                {
                  text:
                    'https://en.wikipedia.org/wiki/Sir_Hugh_Munro,_4th_Baronet'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Our Stores',
        link: () => {
          dispatch(
            showModal({
              title: 'Our Stores',
              main: [
                {
                  text: 'Over 300 stores nation wide. I think...'
                }
              ]
            })
          );
        }
      },
      {
        text: 'Careers',
        link: () => {
          dispatch(showModal({
            title: 'Careers',
            main: [
              {text: 'Sorry no current vacancies'}
            ]
          }))
        }
      }
    ]
  ];
};

const CompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState();

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const newCompanyInfo = companyInfoData({ history, dispatch }).map(
      (columnData, columnIndex) => {
        let thisColumn = columnData.map((companyInfoItem, itemIndex) => (
          <li
            key={`companyInfo.col:${columnIndex}.item${itemIndex}`}
            onClick={companyInfoItem.link ? companyInfoItem.link : null}
            style={
              companyInfoItem.link
                ? { cursor: 'pointer' }
                : { cursor: 'default' }
            }
          >
            {companyInfoItem.text}
          </li>
        ));
        return (
          <div
            key={`companyInfo.column${columnIndex}`}
            className={classes.CompanyInfoColumn}
          >
            <ul>{thisColumn}</ul>
          </div>
        );
      }
    );
    setCompanyInfo(newCompanyInfo);
  }, [history, dispatch]);

  return <div className={classes.CompanyInfo}>{companyInfo}</div>;
};

export default CompanyInfo;
