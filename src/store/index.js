import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/';
import middlewares from './middleware/';
import { watchAuth, watchBasket } from './sagas/';

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(...middlewares.filter(Boolean), sagaMiddleware))
);

sagaMiddleware.run(watchAuth);
sagaMiddleware.run(watchBasket);

export default store;