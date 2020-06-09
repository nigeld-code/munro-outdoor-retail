import React from 'react';

import Tile1Image from '../../../../assets/images/TileImages/Tile1Image.png';
import Tile1Contents from '../../../../assets/images/TileImages/Tile1Contents.png';
import Tile2Image from '../../../../assets/images/TileImages/Tile2Image.png';
import Tile2Contents from '../../../../assets/images/TileImages/Tile2Contents.png';
import Tile3Image from '../../../../assets/images/TileImages/Tile3Image.png';
import Tile3Contents from '../../../../assets/images/TileImages/Tile3Contents.png';
import Tile4Image from '../../../../assets/images/TileImages/Tile4Image.png';
import Tile4Contents from '../../../../assets/images/TileImages/Tile4Contents.png';

import classes from './HomeTiles.module.scss';

export const Tile1 = () => {
  return (
    <div className={classes.HomeTiles}>
      <img src={Tile1Image} alt='' />
      <div className={classes.Tile}>
        <img
          className={classes.Tile1ContentByScreen}
          src={Tile1Contents}
          alt='Shop Essential Walking Equipment'
        />
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
      <img
          className={classes.Tile2ContentByScreen}
          src={Tile2Contents}
          alt='Shop Tents &amp; Camping'
        />
        <button>Shop Tents and Camping</button>
      </div>
    </div>
  );
};

export const Tile3 = () => {
  return (
    <div className={classes.HomeTiles}>
      <img src={Tile3Image} alt='' />
      <div className={classes.Tile}>
        <img
          className={classes.Tile3ContentByScreen}
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
      <img
          className={classes.Tile4ContentByScreen}
          src={Tile4Contents}
          alt='Shop Footware'
        />
        <button>Shop Footwear</button>
      </div>
    </div>
  );
};
