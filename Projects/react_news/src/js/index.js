import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const config = {
  key: 'api-key=184a93b7-1452-43b2-b9f4-0ae555113560',
  url: 'https://content.guardianapis.com/search?',
};

ReactDOM.render(<App config={config} />, document.getElementById('root'));
