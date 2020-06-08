import React from 'react';

import Tile1Image from '../../../../assets/images/TileImages/Tile1Image.jpg';
import Tile2Image from '../../../../assets/images/TileImages/Tile2Image.jpg';
import Tile3Image from '../../../../assets/images/TileImages/Tile3Image.png';
import Tile3Contents from '../../../../assets/images/TileImages/Tile3Contents.png';
import Tile4Image from '../../../../assets/images/TileImages/Tile4Image.jpg';

import classes from './HomeTiles.module.scss';

export const Tile1 = () => {
  return (
    <div className={classes.HomeTiles}>
      <img src={Tile1Image} alt='' />
      <div className={classes.Tile}>
        <h3>Essential Walking Equipment</h3>
        <p>upto 1/3 off</p>
        <button>Shop Essentials</button>
      </div>
    </div>
  );
};

export const Tile2 = () => {
  return (
    <div className={classes.HomeTiles}>
      <img src={Tile2Image} alt='' />
      <div className={classes.Tile}>
        <h3>Tents and Camping Sale</h3>
        <button>Shop Tents and Camping</button>
      </div>
    </div>
  );
};

const tile3ContentStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  width: '50%',
  height: '50%',
  objectFit: 'contain',
  transform: 'translateY(20%) translateX(30%)'
};

export const Tile3 = () => {
  return (
    <div className={classes.HomeTiles}>
      <img src={Tile3Image} alt='' />
      <div className={classes.Tile}>
        <img
          style={{...tile3ContentStyle, }}
          src={Tile3Contents}
          alt='Shop the New Ascend Range'
        />
        <button>Shop Ascend</button>
      </div>
    </div>
  );
};

export const Tile4 = () => {
  return (
    <div className={classes.HomeTiles}>
      <img src={Tile4Image} alt='' />
      <div className={classes.Tile}>
        <h3>Up to 40% off Footwear</h3>
        <button>Shop Footwear</button>
      </div>
    </div>
  );
};
