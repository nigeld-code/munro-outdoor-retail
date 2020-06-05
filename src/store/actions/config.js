import * as actionTypes from './actionTypes';

export const getScreenSize = screenSize => {
  return {
    type: actionTypes.GET_SCREEN_SIZE,
    screenSize
  };
};
