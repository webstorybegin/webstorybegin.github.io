import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

import './style/_global.scss'

ReactDOM.render(
  <React.StrictMode>
    <Game />
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);