import Cookies from 'js-cookie'

const SUCCESS = '_SUCCESS'
const ERROR = '_ERROR'
const START = '_START'

const removeArticle = store => next => action => {
  const { dispatch } = store;
  const { removingUrl, type } = action;
  if (removingUrl) {
    console.log(action)
    dispatch({ type: type + START })
    fetch(removingUrl, { 
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)
      dispatch({
        type: type + SUCCESS
      })
    })
  }

  return next(action);
};

export default removeArticle;
