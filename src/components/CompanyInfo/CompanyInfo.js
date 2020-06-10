import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './CompanyInfo.module.scss';

const companyInfoData = history => {
  return [
    [
      {
        text: 'Help'
      },
      {
        text: 'My Account',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'FAQs',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Forgotten Password',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Contact Us',
        link: () => {
          history.push('/products');
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
          history.push('/products');
        }
      },
      {
        text: 'Delivery',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Returns & Refunds',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Payment Methods',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Privacy Policy',
        link: () => {
          history.push('/products');
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
          history.push('/products');
        }
      },
      {
        text: 'WEEE',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Gift Cards',
        link: () => {
          history.push('/products');
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
          history.push('/products');
        }
      },
      {
        text: 'Sir Hugh Munro',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Our Stores',
        link: () => {
          history.push('/products');
        }
      },
      {
        text: 'Careers',
        link: () => {
          history.push('/products');
        }
      }
    ]
  ];
};

const CompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState();

  const history = useHistory();

  useEffect(() => {
    const newCompanyInfo = companyInfoData(history).map(
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
  }, [history]);

  return <div className={classes.CompanyInfo}>{companyInfo}</div>;
};

export default CompanyInfo;
