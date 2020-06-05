import React from 'react';

import classes from './SlideShowDisplay.module.scss';

const slidesIndexForDisplay = (num, length) => {
  let slideNum = num;
  if (slideNum < 0) {
    slideNum = length - 1;
  } else if (slideNum >= length) {
    slideNum = 0;
  }
  return slideNum;
};

const SlideShowDisplay = props => {
  const slidesForSlideShow = [];
  props.slides &&
    props.slides.forEach((slide, index) => {
      slidesForSlideShow.push(
        <div className={classes.Slide} key={'Slide' + index}>
          {slide.contents}
        </div>
      );
    });

  let slideShowTransitionClass = [classes.SlideShowDisplay];
  let transitionStyle = {
    transition: `transform ${props.slideChangeTime}ms ease-out`
  };
  if (
    props.displayNumber === 0 &&
    props.numForDisplay === props.slides.length - 1
  ) {
    slideShowTransitionClass = [
      classes.SlideShowDisplay,
      classes.SlideShowDisplayNext
    ];
  } else if (
    props.displayNumber === props.slides.length - 1 &&
    props.numForDisplay === 0
  ) {
    slideShowTransitionClass = [
      classes.SlideShowDisplay,
      classes.SlideShowDisplayLast
    ];
  } else if (props.displayNumber < props.numForDisplay) {
    slideShowTransitionClass = [
      classes.SlideShowDisplay,
      classes.SlideShowDisplayLast
    ];
  } else if (props.displayNumber > props.numForDisplay) {
    slideShowTransitionClass = [
      classes.SlideShowDisplay,
      classes.SlideShowDisplayNext
    ];
  } else {
    transitionStyle = {};
  }

  return (
    <div
      className={slideShowTransitionClass.join(' ')}
      style={{ ...props.display, ...transitionStyle }}
    >
      <div className={classes.LastDisplay} style={props.display}>
        {
          slidesForSlideShow[
            slidesIndexForDisplay(props.displayNumber, slidesForSlideShow.length)
          ]
        }
      </div>
      <div className={classes.CurrentDisplay} style={props.display}>
        {
          slidesForSlideShow[
            slidesIndexForDisplay(props.numForDisplay, slidesForSlideShow.length)
          ]
        }
      </div>
      <div className={classes.NextDisplay} style={props.display}>
        {
          slidesForSlideShow[
            slidesIndexForDisplay(props.displayNumber, slidesForSlideShow.length)
          ]
        }
      </div>
    </div>
  );
};

export default SlideShowDisplay;
