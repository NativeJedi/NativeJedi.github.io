import React from "react";
import ReactDOM from 'react-dom';
import Clock from './components/Clock';

setInterval(() => {
  ReactDOM.render(<Clock />, document.getElementById('clock')
  );
}, 1000)