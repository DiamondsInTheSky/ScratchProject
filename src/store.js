import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './client/reducers/combineReducer';
import thunk from 'redux-thunk';


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
const store = createStore(
  combineReducer,
  composeWithDevTools(),
  applyMiddleware(thunk),
);


export default store;