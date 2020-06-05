import React from 'react';

import classes from './SlideShowDisplay.module.scss';

const imgsIndexForDisplay = (request, current, length) => {
  let imgNum = current + request;
  if (imgNum < 0) {
    imgNum = length - 1;
  } else if (imgNum >= length) {
    imgNum = 0;
  }
  return imgNum;
};

const SlideShowDisplay = props => {
  const imageForSlideShow = [];
  props.slides &&
    props.slides.forEach((img, index) => {
      imageForSlideShow.push(
        <img
          className={classes.Slide}
          key={'Slide' + index}
          src={img.src}
          alt={img.alt}
          onClick={() => {
            img.click && img.click();
          }}
        />
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
          imageForSlideShow[
            imgsIndexForDisplay(
              -1,
              props.numForDisplay,
              imageForSlideShow.length
            )
          ]
        }
      </div>
      <div className={classes.CurrentDisplay} style={props.display}>
        {
          imageForSlideShow[
            imgsIndexForDisplay(
              0,
              props.numForDisplay,
              imageForSlideShow.length
            )
          ]
        }
      </div>
      <div className={classes.NextDisplay} style={props.display}>
        {
          imageForSlideShow[
            imgsIndexForDisplay(
              1,
              props.numForDisplay,
              imageForSlideShow.length
            )
          ]
        }
      </div>
    </div>
  );
};

export default SlideShowDisplay;
