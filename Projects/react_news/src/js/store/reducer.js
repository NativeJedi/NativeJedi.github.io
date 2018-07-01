import { combineReducers } from 'redux';
import newsReducer from '../reducers/newsDuck';

export default combineReducers({
  newsBlock: newsReducer
});