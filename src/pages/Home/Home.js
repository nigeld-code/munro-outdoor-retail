import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

import SlideShow from '../../components/UI/SlideShow/SlideShow';
import Banner from '../../components/Banner/Banner';
import * as HomeTiles from './data/HomeTiles/HomeTiles';

import HomeBannerTop from './data/HomeBannerTop';
import {
  HomeSlideShowSlides,
  HomeSlideShowDisplay
} from './data/HomeSlideShowSlides';
import HomeBannerBottom from './data/HomeBannerBottom';

import classes from './Home.module.scss';

const Home = props => {
  const screenSize = useSelector(state => state.config.screenSize);

  const homeSlideShowSlides = useMemo(() => {
    return HomeSlideShowSlides(props);
  }, [props]);

  const homeTileClass =
    screenSize > 3 ? classes.HomeTilesMedium : classes.HomeTilesSmall;
  return (
    <React.Fragment>
      <SlideShow
        slides={homeSlideShowSlides}
        display={HomeSlideShowDisplay}
        timings={{ autoSlideChangeTime: 4500, slideChangeTime: 800 }}
      />
      <Banner contents={HomeBannerTop} />
      <div className={classes.HomeTilesContainer}>
        <div className={homeTileClass}>
          <div>
            <HomeTiles.Tile1 />
          </div>
          <div>
            <HomeTiles.Tile2 />
          </div>
        </div>
        <div className={homeTileClass}>
          <div>
            <HomeTiles.Tile3 screenSize={screenSize} />
          </div>
          <div>
            <HomeTiles.Tile4 />
          </div>
        </div>
      </div>
      <div style={{ textAlign: 'center', lineHeight: '0' }}>
        <h4>Brands We Love</h4>
      </div>
      <Banner contents={HomeBannerBottom} />
    </React.Fragment>
  );
};

export default Home;
