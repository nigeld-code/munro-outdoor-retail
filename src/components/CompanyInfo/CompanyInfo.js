import React, { useState, useEffect } from 'react';

import classes from './CompanyInfo.module.scss';

const companyInfoData = [
  [
    {
      text: 'Help'
    },
    {
      text: 'My Account'
    },
    {
      text: 'FAQs'
    },
    {
      text: 'Forgotten Password'
    },
    { text: 'Contact Us' }
  ],
  [
    {
      text: 'Shopping with Us'
    },
    {
      text: 'Click & Collect'
    },
    {
      text: 'Delivery'
    },
    {
      text: 'Returns & Refunds'
    },
    {
      text: 'Payment Methods'
    },
    {
      text: 'Privacy Policy'
    }
  ],
  [
    {
      text: 'Info'
    },
    {
      text: 'Cookies'
    },
    {
      text: 'WEEE'
    },
    {
      text: 'Gift Cards'
    }
  ],
  [
    {
      text: 'About Munro'
    },
    {
      text: 'About Us'
    },
    {
      text: 'Sir Hugh Munro'
    },
    {
      text: 'Our Stores'
    },
    {
      text: 'Careers'
    }
  ]
];

const CompanyInfo = () => {
  const [companyInfo, setCompanyInfo] = useState();

  useEffect(() => {
    const newCompanyInfo = companyInfoData.map((columnData, columnIndex) => {
      let thisColumn = columnData.map((companyInfoItem, itemIndex) => (
        <li key={`companyInfo.col:${columnIndex}.item${itemIndex}`}>
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
    });
    setCompanyInfo(newCompanyInfo);
  }, []);

  return <div className={classes.CompanyInfo}>{companyInfo}</div>;
};

export default CompanyInfo;
