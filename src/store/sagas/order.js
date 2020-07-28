import * as actions from '../actions/';

import { put } from 'redux-saga/effects';

import { orderAxios } from '../../axios';

export function* placeOrderSaga(action) {
  try {
    const response = yield orderAxios.post('placeOrder', {
      orderToken: action.orderToken,
      deliveryDetails: action.deliveryDetails,
      paymentDetails: action.paymentDetails
    });
    if (response.data._doc) {
      yield put(
        actions.showModal({
          title: 'Order Confirmation',
          main: [
            { h3: 'Thank You for your order' },
            {
              text: `Thank you for using Munro Outdoor Retail, don't forget it is a fictional site so there is no order or payment.`
            },
            {
              text: `A copy of this Order Confirmation has been emailed to ${response.data._doc.delivery.email}`
            }
          ],
          order: response.data._doc,
          close: { functionName: 'closeOrderConfirmation' }
        })
      );
      yield put(actions.clearBasket());
      yield put(actions.removeAllVoucherCodes());
    } else {
      yield put(
        actions.showModal({
          title: 'Order Failed to Process',
          main: [{ text: 'Sorry! Try again?' }]
        })
      );
    }
  } catch (err) {
    yield console.log('Oops!');
    yield put(
      actions.showModal({
        title: 'Order Failed to Process',
        main: [{ text: 'Please ensure you are online' }]
      })
    );
  }
}
