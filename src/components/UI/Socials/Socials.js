import React from 'react';

import classes from './Socials.module.scss';

const Socials = () => {
  return (
    <div className={classes.Socials}>
      <h2>CONNECT WITH US</h2>
      <div className={classes.SocialsItems}>
        <a href='https://www.twitter.com'>
          <div className={classes.SocialsItem}>
            <i className='nld-twitter'></i>
          </div>
        </a>
        <a href='https://www.facebook.com'>
        <div className={classes.SocialsItem}>
          <i className='nld-facebook'></i>
        </div></a>
        <a href='https://www.instagram.com'>
        <div className={classes.SocialsItem}>
          <i className='nld-instagram'></i>
        </div></a>
        <a href='https://www.youtube.com'>
        <div className={classes.SocialsItem}>
          <i className='nld-youtube'></i>
        </div></a>
      </div>
    </div>
  );
};

export default Socials;
