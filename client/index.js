import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Provider from 'react-redux';

// this is not the same structure as a render in a component, this is where I would normally include my main component surrounded by my Router, which then leads to other components
ReactDOM.render(
  <Provider store={store}>
    <div>Hello, world!</div>
  </Provider>,
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);

