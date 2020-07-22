import React from 'react';

import CompanyInfo from '../CompanyInfo/CompanyInfo';
import Logo from '../UI/Logo/Logo';
import Socials from '../UI/Socials/Socials';

import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterRow}>
        <Socials />
        <CompanyInfo />
      </div>
      <div className={classes.FooterRowLeft}>
        <Logo className={classes.FooterLogo} />
        <div className={classes.FooterLegal}>
          <p>
            Munro Outdoor Retail Ltd is not real and this website offers no
            services. The entire website is a fiction. <br /> Created by me to
            practice ReactJS, please visit my{' '}
            <a
              href='https://github.com/nigeld-code'
              target='_blank'
              rel='noopener noreferrer'
            >
              github
            </a>{' '}
            to see my other projects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Help - My Account, FAQs, Forgotten Password, Contact Us
// Shopping with us - Click & Collect, Delivery, Returns & Refunds, Payment Methods, Privacy Policy
// Info - Cookies, WEEE, Gift Cards, Accessibilty
// About Munro - About Us, Our Stores, Careers, Sir Hugh Munro
