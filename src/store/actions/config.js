import * as actionTypes from './actionTypes';

export const getScreenSize = screenSize => {
  return {
    type: actionTypes.GET_SCREEN_SIZE,
    screenSize
  };
};

export const showModal = contents => {
  return { type: actionTypes.SHOW_MODAL, contents };
};
