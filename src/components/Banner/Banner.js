import React from 'react';
import { useSelector } from 'react-redux';

import classes from './Banner.module.scss';

const Banner = props => {
  const screenSize = useSelector(state => state.config.screenSize);

  const bannerItems =
    props.contents &&
    props.contents.map((bannerItem, index) => {
      if (bannerItem.minScreen >= screenSize) {
        return null;
      }
      return (
        <div
          key={`Banner ${index}`}
          onClick={() => bannerItem.click && bannerItem.click()}
          style={props.clicked ? { cursor: 'pointer' } : null}
          className={[
            classes.BannerItem,
            bannerItem.click ? classes.BannerLink : classes.BannerText
          ].join(' ')}
        >
          {bannerItem.text}
        </div>
      );
    });
  return (
    <div
      className={[
        classes.Banner,
        props.className ? props.className : null
      ].join(' ')}
      onClick={props.clicked ? props.clicked : null}
      style={props.clicked ? { cursor: 'pointer' } : null}
    >
      {bannerItems}
    </div>
  );
};

export default React.memo(Banner);
