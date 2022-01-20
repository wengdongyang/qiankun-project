import thunk from 'redux-thunk';
import session from 'redux-persist/es/storage/session';
import {persistStore, persistReducer} from 'redux-persist';
import {createStore, applyMiddleware, compose} from 'redux';

import type {Store} from 'redux';
import type {Persistor} from 'redux-persist';

import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage: session,
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(persistedReducer, enhancer);
export const persistor: Persistor = persistStore(store);
