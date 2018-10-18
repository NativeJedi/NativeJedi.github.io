import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import loader from '../middleWare/loader';
import signIn from '../middleWare/signIn';
import addArticle from '../middleWare/addArticle';
import removeArticle from '../middleWare/removeArticle';
import removeComment from '../middleWare/removeComment';

const initialState = {};
const enhancers = [];
const middleware = [thunk, loader, signIn, addArticle, removeArticle, removeComment];

const { devToolsExtension } = window.devToolsExtension;

if (typeof devToolsExtension === 'function') {
  enhancers.push(devToolsExtension());
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;