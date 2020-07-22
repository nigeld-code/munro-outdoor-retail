import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';

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

const slideButtons = ({ buttons, clicked }, screenSize) => {
  if (!buttons) {
    return null;
  }
  const buttonsArr = buttons.map((button, index) => {
    if (button.minScreenSize && button.minScreenSize > screenSize) {
      return null;
    }
    return (
      <button
        key={`SlideButtons ${index}`}
        style={button.style}
        onClick={button.clicked ? button.clicked : clicked}
      >
        {button.text}
      </button>
    );
  });
  return <div className={classes.SlideButtons}>{buttonsArr}</div>;
};

const SlideShowDisplay = props => {
  const screenSize = useSelector(state => state.config.screenSize);

  const slideImages = useMemo(() => {
    return (
      props.slides &&
      props.slides.map(slide => {
        if (slide.contents.img && slide.contents.img.src) {
          const thisImage = React.createElement('img', {
            src: slide.contents.img.src,
            alt: '',
            style: slide.contents.img.style ? slide.contents.img.style : null
          });
          return thisImage;
        } else {
          return null;
        }
      })
    );
  }, [props.slides]);

  const slidesForSlideShow = useMemo(() => {
    const slidesForSlideShowArr = [];
    props.slides &&
      props.slides.forEach((slide, index) => {
        slidesForSlideShowArr.push(
          <div className={classes.Slide} key={'Slide' + index}>
            <div className={classes.SlideContents} onClick={slide.clicked}>
              {slide.contents.img ? slideImages[index] : null}
              {slide.contents.jsx}
            </div>
            {slideButtons(slide, screenSize)}
          </div>
        );
      });
    return slidesForSlideShowArr;
  }, [screenSize, props.slides, slideImages]);

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
    props.slides.length > 2 &&
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

  const nextSlideDisplay =
    slidesForSlideShow[
      slidesIndexForDisplay(props.displayNumber, slidesForSlideShow.length)
    ];

  return (
    <div
      className={slideShowTransitionClass.join(' ')}
      style={{ ...props.display, ...transitionStyle }}
    >
      <div className={classes.LastDisplay} style={props.display}>
        {props.displayNumber < props.numForDisplay ||
        props.displayNumber === slidesForSlideShow.length - 1
          ? nextSlideDisplay
          : null}
      </div>
      <div className={classes.CurrentDisplay} style={props.display}>
        {
          slidesForSlideShow[
            slidesIndexForDisplay(
              props.numForDisplay,
              slidesForSlideShow.length
            )
          ]
        }
      </div>
      <div className={classes.NextDisplay} style={props.display}>
        {props.displayNumber > props.numForDisplay || props.displayNumber === 0
          ? nextSlideDisplay
          : null}
      </div>
    </div>
  );
};

export default SlideShowDisplay;
