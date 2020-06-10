import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';

import SwipeEvent from '../../../hoc/TouchEvents/SwipeEvent';
import SlideShowDisplay from './SlideShowDisplay/SlideShowDisplay';
import SlideShowControls from './SlideShowControls/SlideShowControls';

import classes from './SlideShow.module.scss';

const getDisplayStyle = display => {
  let displayStyleObj = {};
  for (let screenInt = 1; screenInt <= 6; screenInt++) {
    displayStyleObj[screenInt.toString()] = {
      height: display.height ? display.height : '10rem',
      width: display.width ? display.width : '100%'
    };
  }
  if (!display) {
    return displayStyleObj;
  } else {
    display.sizeByScreen &&
      display.sizeByScreen.forEach(size => {
        size.screens &&
          size.screens.forEach(screen => {
            displayStyleObj[screen.toString()] = {
              height: size.height
                ? size.height
                : displayStyleObj[screen.toString()].height,
              width: size.width
                ? size.width
                : displayStyleObj[screen.toString()].width
            };
          });
      });
  }
  return displayStyleObj;
};

const SlideShow = props => {
  const { display } = props;
  const [displayNumber, setDisplayNumber] = useState(0);
  const [numForDisplay, setNumForDisplay] = useState(0);
  const [allowInput, setAllowInput] = useState(true);
  const screenSize = useSelector(state => state.config.screenSize);

  const displayStyle = getDisplayStyle(display);

  const { slideChangeTime, autoSlideChangeTime } = props.timings
    ? {
        slideChangeTime: props.timings.slideChangeTime
          ? props.timings.slideChangeTime
          : 1000,
        autoSlideChangeTime: props.timings.autoSlideChangeTime
          ? props.timings.autoSlideChangeTime
          : 3000
      }
    : { slideChangeTime: 1000, autoSlideChangeTime: 3000 };

  const slideshowNavHandler = useCallback(
    control => {
      setDisplayNumber(() => {
        if (allowInput) {
          if (typeof control === 'number') {
            return control;
          }

          let newDisplayNumber;
          if (control === 'last' || 'next') {
            newDisplayNumber = displayNumber + (control === 'last' ? -1 : 1);
            if (newDisplayNumber < 0) {
              newDisplayNumber = props.slides.length - 1;
            } else if (newDisplayNumber >= props.slides.length) {
              newDisplayNumber = 0;
            }
          }
          return newDisplayNumber;
        }
        return displayNumber;
      });
    },
    [displayNumber, props.slides.length, allowInput]
  );

  useEffect(() => {
    setAllowInput(false);
    const controlChangeDisplay = setTimeout(() => {
      setNumForDisplay(displayNumber);
      setAllowInput(true);
    }, slideChangeTime);
    return () => clearTimeout(controlChangeDisplay);
  }, [displayNumber, slideChangeTime]);

  useEffect(() => {
    const autoChangeDisplay = setInterval(() => {
      if (numForDisplay < props.slides.length - 1) {
        setDisplayNumber(numForDisplay + 1);
      } else {
        setDisplayNumber(0);
      }
    }, autoSlideChangeTime);
    return () => clearInterval(autoChangeDisplay);
  }, [numForDisplay, props.slides.length, autoSlideChangeTime]);

  return (
    <SwipeEvent
      swipeDistance={20}
      left={() => slideshowNavHandler('next')}
      right={() => slideshowNavHandler('last')}
    >
      <div
        className={classes.SlideShow}
        style={display ? displayStyle[screenSize] : null}
      >
        <SlideShowDisplay
          slides={props.slides}
          displayNumber={displayNumber}
          numForDisplay={numForDisplay}
          slideChangeTime={slideChangeTime}
          display={display ? displayStyle[screenSize] : null}
        />
        <SlideShowControls
          slides={props.slides}
          displayNumber={displayNumber}
          slideshowNav={slideshowNavHandler}
        />
      </div>
    </SwipeEvent>
  );
};

export default React.memo(SlideShow);
