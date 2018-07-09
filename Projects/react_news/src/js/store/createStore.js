import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import loader from '../middleWare/loader';

const initialState = {};
const enhancers = [];
const middleware = [thunk, loader];

const { devToolsExtension } = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;