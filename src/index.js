import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import RootReducers from './frontend/reducers/root_reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Root from './frontend/root'

document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(RootReducers, applyMiddleware(thunk));

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});