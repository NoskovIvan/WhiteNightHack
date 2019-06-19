import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Main from './reducersMain';



export default combineReducers({
  ...Main,
  routing: routerReducer, // для того, чтобы роутинг работал
});