import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getScreenSize } from '../store/actions/';

const SCREEN_SIZES = {
  xsmall: 320,
  small: 500,
  medium: 750,
  large: 1000,
  xlarge: 1200
};

const client = typeof window === 'object';

const getSize = () => {
  return {
    width: client ? window.innerWidth : null,
    height: client ? window.innerHeight : null
  };
};

const debounce = func => {
  let inDebounce;
  return () => {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => func(), 150);
  };
};

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(() => getSize());
  const [screenSizeInt, setScreenSizeInt] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!client) {
      return false;
    }

    const resizeHandler = () => {
      setScreenSize(getSize());
    };

    window.addEventListener('resize', debounce(resizeHandler));
    return () => window.removeEventListener('resize', debounce(resizeHandler));
  }, []);

  useEffect(() => {
    if (screenSize.width <= SCREEN_SIZES.xsmall) {
      setScreenSizeInt(1);
    } else if (screenSize.width <= SCREEN_SIZES.small) {
      setScreenSizeInt(2);
    } else if (screenSize.width <= SCREEN_SIZES.medium) {
      setScreenSizeInt(3);
    } else if (screenSize.width <= SCREEN_SIZES.large) {
      setScreenSizeInt(4);
    } else if (screenSize.width <= SCREEN_SIZES.xlarge) {
      setScreenSizeInt(5);
    } else {
      setScreenSizeInt(6);
    }
  }, [screenSize.width]);

  useEffect(() => {
    dispatch(getScreenSize(screenSizeInt));
  }, [screenSizeInt, dispatch]);
  return null;
};

export default useScreenSize;
