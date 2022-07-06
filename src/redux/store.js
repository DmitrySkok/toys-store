import { createStore, combineReducers } from 'redux';
import initialState from './initialState';
import productsReducer from './productsReducer';
import categoriesReducer from './categoriesReducer';

const subreducers = {
  products: productsReducer,
  categories: categoriesReducer
}

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;