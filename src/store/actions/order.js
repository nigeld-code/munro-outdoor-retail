import * as actionTypes from './actionTypes';

export const placeOrder = (orderToken, deliveryDetails, paymentDetails) => {
  return {
    type: actionTypes.PLACE_ORDER,
    orderToken,
    deliveryDetails,
    paymentDetails
  };
};
