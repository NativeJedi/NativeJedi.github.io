import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store/createStore'
import News from './components/News/';

const config = {
  key: 'api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
  url: 'https://content.guardianapis.com/search?'
};

function App() {
  return (
    <Provider store={store}>
      <News config={config} />
    </Provider>
  );
}

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
  
