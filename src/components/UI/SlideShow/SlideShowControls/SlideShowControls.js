import React from 'react';

import classes from './SlideShowControls.module.scss';

const SlideShowControls = props => {
  const slideSelectors =
    props.slides &&
    props.slides.map((_, index) => (
      <button
        className={[
          classes.SlideSelector,
          index === props.displayNumber ? classes.ActiveSlideSelector : null
        ].join(' ')}
        key={'SlideshowControls' + index}
        onClick={() => props.slideshowNav(index)}
      ></button>
    ));

  return (
    <div className={classes.SlideShowControls}>
      <button
        className={classes.LastButton}
        onClick={() => props.slideshowNav('last')}
      >
        {'<'}
      </button>
      <div>{slideSelectors}</div>
      <button
        className={classes.NextButton}
        onClick={() => props.slideshowNav('next')}
      >
        {'>'}
      </button>
    </div>
  );
};

export default SlideShowControls;
