import * as actionTypes from '../actions/actionTypes';

const initialState = {
  screenSize: null
};

const getScreenSize = (state, action) => {
  return {
    ...state,
    screenSize: action.screenSize
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SCREEN_SIZE:
      return getScreenSize(state, action);
    default:
      return state;
  }
};

export default reducer;
