import React, { useCallback } from 'react';

const SwipeEvent = props => {
  const { left, right, up, down, swipeDistance } = props;
  let xStart = null;
  let yStart = null;

  const touchStartHandler = event => {
    xStart = event.touches[0].clientX;
    yStart = event.touches[0].clientY;
  };

  const touchEndHandler = useCallback(
    event => {
      const xEnd = event.changedTouches[0].clientX;
      const yEnd = event.changedTouches[0].clientY;
      const xChange = xStart - xEnd;
      const yChange = yStart - yEnd;
      if (Math.abs(xChange) > Math.abs(yChange)) {
        if (Math.abs(xChange) > swipeDistance) {
          if (xChange > 0) {
            left && left();
          } else {
            right && right();
          }
        }
      } else {
        if (Math.abs(yChange) > swipeDistance) {
          if (yChange > 0) {
            up && up();
          } else {
            down && down();
          }
        }
      }
    },
    [left, right, up, down, swipeDistance, xStart, yStart]
  );

  return (
    <div onTouchStart={touchStartHandler} onTouchEnd={touchEndHandler}>
      {props.children}
    </div>
  );
};

export default React.memo(SwipeEvent);
