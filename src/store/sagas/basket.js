import * as actions from '../actions/';
import { productAxios } from '../../axios';
import { put } from 'redux-saga/effects';

export function* initialBasketSaga(action) {
  let initialBasket = yield localStorage.getItem('basket');
  if (initialBasket) {
    initialBasket = JSON.parse(initialBasket);
    const valuesArr = yield Promise.all(
      initialBasket.map(async item => {
        try {
          const response = await productAxios.get(item.productSku);
          if (response && response.data && response.data.product) {
            return {
              productSku: item.productSku,
              qty: item.qty,
              price: response.data.product.productPrice
            };
          }
        } catch (err) {
          console.log(err);
          localStorage.removeItem('basket');
        }
      })
    );
    for (let item of valuesArr) {
      if (item && item.productSku && item.qty && item.price) {
        yield put(
          actions.addToBasket(
            item.productSku,
            item.qty,
            item.price * item.qty,
            true
          )
        );
      } else {
        yield localStorage.removeItem('basket');
      }
    }
  }
}

export function* addToBasketSaga(action) {
  if (!action.isInitial) {
    let currentBasket = yield localStorage.getItem('basket');
    if (currentBasket) {
      currentBasket = yield JSON.parse(currentBasket);
      const inBasketIndex = currentBasket.findIndex(
        item => item.productSku === action.productSku
      );
      if (inBasketIndex >= 0) {
        currentBasket[inBasketIndex] = {
          ...currentBasket[inBasketIndex],
          qty: currentBasket[inBasketIndex].qty + action.qty
        };
      } else {
        currentBasket.push({ productSku: action.productSku, qty: action.qty });
      }
    } else {
      currentBasket = [];
      currentBasket.push({ productSku: action.productSku, qty: action.qty });
    }
    yield localStorage.setItem('basket', JSON.stringify(currentBasket));
  }
}

export function* clearBasketSaga(action) {
  yield localStorage.removeItem('basket');
}
