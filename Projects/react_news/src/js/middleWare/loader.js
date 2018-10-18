const SUCCESS = '_SUCCESS'
const ERROR = '_ERROR'
const START = '_START'

const loader = store => next => action => {
  const { dispatch } = store;
  const { url, type } = action;

  if (url) {
    dispatch({ type: type + START })
    fetch(`${url}article/get`)
      .then(res => res.json())
      .then(result => {
        dispatch({
          type: type + SUCCESS,
          payload: result
        });
      })
  }

  return next(action);
};

export default loader;
