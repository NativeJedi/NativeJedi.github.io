import Cookies from 'js-cookie'
import { 
  REMOVE_ARTICLE,
  ADD_ARTICLE,
  SWITCH_BUTTONS,
  REMOVE_COMMENT,
  LOAD_DATA,
  USER_LOGIN
} from '../store/constants'

const { List } = require('immutable')

export const userLogin = (loginUrl, email, password) => ({
  type: USER_LOGIN,
  meta: {
    email,
    password
  },
  loginUrl
})

export const loadData = url => ({
  type: LOAD_DATA,
  url
});

export const switchButtons = isRemoveVisible => (
  {
    type: SWITCH_BUTTONS,
    meta: {
      isRemoveVisible
    }
  }
)


export const addArticle = (articleUrl, title, text, image) => (
  {
    type: ADD_ARTICLE,
    meta: {
      text,
      title,
      image
    },
    articleUrl
  }
)

export const removeArticle = removingUrl => (
  {
    type: REMOVE_ARTICLE,
    removingUrl
  }
);

export const removeComment = removingCommentUrl => (
  {
    type: REMOVE_COMMENT,
    removingCommentUrl
  }
)

const initialState = {
  isRemoveVisible: false,
  apiUrl: '',
  articles: List(),
  isFetching: false,
  token: '',
  isUser: !!Cookies.get('token'),
  isUserFetching: false,
  isArticleFetching: false
};

const actionHandlers = {
  SWITCH_BUTTONS: (state) => {
    return { 
      ...state, 
      isRemoveVisible: !state.isRemoveVisible
    }
  },
  REMOVE_COMMENT_START: (state, action) => {
    return {
      ...state
    }
  },
  REMOVE_COMMENT_SUCCESS: (state, action) => {
    return {
      ...state
    }
  },
  REMOVE_ARTICLE_START: state => {
    return {
      ...state
    }
  },
  REMOVE_ARTICLE_SUCCESS: state => {
    return {
      ...state
    }
  },
  ADD_ARTICLE_START: (state) => {
    return {
      ...state,
      isArticleFetching: true
    }
  },
  ADD_ARTICLE_SUCCESS: (state, action) => {
    return {
      ...state,
      isArticleFetching: false
    }
  },
  LOAD_DATA: (state, action) => {
    const { url } = action;

    return { ...state, apiUrl: url };
  },
  LOAD_DATA_START: (state) => {
    return { 
      ...state, 
      isFetching: true
    }
  },
  LOAD_DATA_SUCCESS: (state, action) => {
    const { payload } = action;
    return { ...state, articles: [...payload.items], isFetching: false };
  },
  USER_LOGIN_START: (state, action) => {
    return {
      ...state,
      isUserFetching: true
    }
  },
  USER_LOGIN_SUCCESS: (state, action) => {
    return { ...state, token: action.token, isUserFetching: false }
  }
};

const newsReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default newsReducer