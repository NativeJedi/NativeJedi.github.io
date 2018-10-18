import Cookies from 'js-cookie'

const SUCCESS = '_SUCCESS'
const ERROR = '_ERROR'
const START = '_START'

const addArticle = store => next => action => {
  const { dispatch } = store;
  const { articleUrl, meta, type } = action;
  if (articleUrl) {
    dispatch({ type: type + START })
    fetch(articleUrl, { 
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: meta.title,
        text: meta.text
      })
    }).then(res => {
      console.log(res)
      dispatch({
        type: type + SUCCESS
      })
    })
  }

  return next(action);
};

export default addArticle;
