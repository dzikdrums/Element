import { combineReducers, createStore } from 'redux';

import mapReducer from './mapRedux';

// define reducers
const rootReducer = combineReducers({
  map: mapReducer
});

export const store = createStore(rootReducer);
