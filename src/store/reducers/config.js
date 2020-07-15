import * as actionTypes from '../actions/actionTypes';

const initialState = {
  screenSize: null,
  modal: null
};

const getScreenSize = (state, action) => {
  return {
    ...state,
    screenSize: action.screenSize
  };
};

const showModal = (state, action) => {
  return {
    ...state,
    modal: action.contents
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SCREEN_SIZE:
      return getScreenSize(state, action);
    case actionTypes.SHOW_MODAL:
      return showModal(state, action);
    default:
      return state;
  }
};

export default reducer;
