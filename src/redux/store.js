import { combineReducers, compose, createStore } from 'redux';

import mapReducer from './mapRedux';

// define reducers
const rootReducer = combineReducers({
  map: mapReducer
});

/* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers());
/* eslint-enable */

export default store;
