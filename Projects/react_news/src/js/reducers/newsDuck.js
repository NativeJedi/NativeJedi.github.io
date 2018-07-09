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

export const userLogin = isUser => ({
  type: USER_LOGIN,
  isUser
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


export const addArticle = article => (
  {
    type: ADD_ARTICLE,
    meta: {
      article
    }
  }
)

export const removeArticle = removingId => (
  {
    type: REMOVE_ARTICLE,
    meta: {
      removingId
    }
  }
);

export const removeComment = (articleId, commentId) => (
  {
    type: REMOVE_COMMENT,
    meta: {
      articleId,
      commentId
    }
  }
)

const initialState = {
  isRemoveVisible: false,
  apiUrl: '',
  articles: List(),
  isFetching: false,
  isUser: !!Cookies.get('token')
};

const actionHandlers = {
  REMOVE_ARTICLE: (state, action) => {
    const { meta } = action;

    return { 
      ...state, 
      articles: state.articles.filter(item => item._id !== meta.removingId)
    }
  },
  SWITCH_BUTTONS: (state) => {
    return { 
      ...state, 
      isRemoveVisible: !state.isRemoveVisible
    }
  },
  REMOVE_COMMENT: (state, action) => {
    const { meta } = action;

    return { 
      ...state, 
      articles: state.articles.map(item => {
        if (item.id === meta.articleId) {
          return { ...item, comments: item.comments.filter(el => el.id !== meta.commentId) }
        }
        return item
      })
    }
  },
  ADD_ARTICLE: (state, action) => {
    const { meta } = action;

    return {
      ...state,
      articles: [...state.articles, meta.article]
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
  USER_LOGIN: (state, action) => {
    return { ...state, isUser: action.isUser }
  }
};

const newsReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default newsReducer