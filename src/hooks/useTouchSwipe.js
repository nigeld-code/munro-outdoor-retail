import { useEffect, useState } from 'react';

const defaultCallbacks = {
  left: () => {},
  right: () => {},
  up: () => {},
  down: () => {}
};

const defaultConfig = {
  minSwipeSpeed: 20,
  isPreventDefault: true
};

const useTouchSwipe = () => {
  const [refForTouch, setRefForTouch] = useState(null);
  const [touchDirection, setTouchDirection] = useState(null);
  const [preventDefault, setPreventDefault] = useState(null);
  const [swipeDistance, setSwipeDistance] = useState(null);

  const touchSwipeRespond = (ref, callbacks, setConfig) => {
    const callback = { ...defaultCallbacks, ...callbacks };
    const config = { ...defaultConfig, ...setConfig };
    setPreventDefault(config.isPreventDefault);
    setSwipeDistance(config.minSwipeSpeed);
    setRefForTouch(ref.current);
    touchDirection === 'left' && callback.left();
    touchDirection === 'right' && callback.right();
    touchDirection === 'up' && callback.up();
    touchDirection === 'down' && callback.down();
    setTouchDirection(null);
  };

  useEffect(() => {
    if (!refForTouch) {
      return;
    }

    let xDown = null;
    let yDown = null;

    const touchStartHandler = event => {
      if (preventDefault) {
        event.preventDefault();
      }
      xDown = event.touches[0].clientX;
      yDown = event.touches[0].clientY;
    };

    const touchEndHandler = event => {
      if (preventDefault) {
        event.preventDefault();
      }
      if (!xDown || !yDown) {
        return;
      }
      const xUp = event.changedTouches[0].clientX;
      const yUp = event.changedTouches[0].clientY;
      const xChange = xDown - xUp;
      const yChange = yDown - yUp;
      if (Math.abs(xChange) > Math.abs(yChange)) {
        if (Math.abs(xChange) > swipeDistance) {
          if (xChange > 0) {
            setTouchDirection('left');
          } else {
            setTouchDirection('right');
          }
        }
      } else {
        if (Math.abs(yChange) > swipeDistance) {
          if (yChange > 0) {
            setTouchDirection('up');
          } else {
            setTouchDirection('down');
          }
        }
      }
    };

    refForTouch.addEventListener('touchstart', touchStartHandler);
    refForTouch.addEventListener('touchend', touchEndHandler);
    return () => {
      refForTouch.removeEventListener('touchstart', touchStartHandler);
      refForTouch.removeEventListener('touchend', touchEndHandler);
    };
  }, [refForTouch, preventDefault, swipeDistance]);
  return touchSwipeRespond;
};

export default useTouchSwipe;
