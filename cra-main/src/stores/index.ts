/*
 * @Author: wdy
 * @Date: 2019-04-01 11:32:09
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-07 14:00:43
 */

import thunk from 'redux-thunk';
import session from 'redux-persist/es/storage/session';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, applyMiddleware, compose, Store } from 'redux';
import rootReducer from './reducers';

const persistConfig = {
  key: 'react-main-rewired',
  storage: session
};
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
