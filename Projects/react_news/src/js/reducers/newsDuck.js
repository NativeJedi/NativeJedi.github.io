const { Map, List } = require('immutable')

const LOAD_ARTICLES = 'LOAD_ARTICLES'
const REMOVE_ARTICLE = 'REMOVE_ARTICLE'
const ADD_ARTICLE = 'ADD_ARTICLE'
const SWITCH_BUTTONS = 'SWITCH_BUTTONS'
const REMOVE_COMMENT = 'REMOVE_COMMENT'

export const switchButtons = isRemoveVisible => (
  {
    type: SWITCH_BUTTONS,
    meta: {
      isRemoveVisible
    }
  }
)

export const loadArticles = articles => (
  {
    type: LOAD_ARTICLES,
    meta: {
      articles
    }
  }
);

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
  articles: List(),
  isRemoveVisible: true
};

const actionHandlers = {
  LOAD_ARTICLES: (state, action) => {
    const { meta } = action;

    return { ...state, articles: [...meta.articles] };
    // return state.set('articles', meta.articles)
  },
  REMOVE_ARTICLE: (state, action) => {
    const { meta } = action;

    /* const filtredArray = state.get('articles').filter(item => item.id !== meta.removingId); */
    return { 
      ...state, 
      articles: state.articles.filter(item => item.id !== meta.removingId)
    }
    // return state.set('articles', filtredArray)
  },
  SWITCH_BUTTONS: (state, action) => {
    const { meta } = action;

    return { 
      ...state, 
      isRemoveVisible: !state.isRemoveVisible
    }
    // return state.set('isRemoveVisible', !state.get('isRemoveVisible'))
  },
  REMOVE_COMMENT: (state, action) => {
    const { meta } = action;

    const articles = state.get('articles').map(item => {
      if (item.id === meta.articleId) {
        return { ...item, comments: item.comments.filter(el => el.id !== meta.commentId) }
      }
      return item
    })

    return { 
      ...state, 
      articles: state.articles.map(item => {
        if (item.id === meta.articleId) {
          return { ...item, comments: item.comments.filter(el => el.id !== meta.commentId) }
        }
        return item
      })
    }

    // return state.set('articles', articles)
  },
  ADD_ARTICLE: (state, action) => {
    const { meta } = action;

    return {
      ...state,
      articles: [...state.articles, meta.article]
    }

    // return state.set('articles', articles) 
  }
};

const newsReducer = (state = initialState, action) => {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
};

export default newsReducer