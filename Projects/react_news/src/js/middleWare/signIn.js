import Cookies from 'js-cookie'

const SUCCESS = '_SUCCESS'
const ERROR = '_ERROR'
const START = '_START'

const signIn = store => next => action => {
  const { dispatch } = store;
  const { meta, loginUrl, type } = action;

  if (loginUrl) {
    dispatch({ type: type + START })
    fetch(loginUrl, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: meta.email,
        password: meta.password
      })
    }).then(res => res.json())
      .then(result => {
        dispatch({
          type: type + SUCCESS,
          token: result.token
        });
        Cookies.set('token', result.token)
        return result
      })
  }

  return next(action);
};

export default signIn;
