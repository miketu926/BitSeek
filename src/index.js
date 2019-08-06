import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import RootReducers from './frontend/reducers/root_reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import Root from './frontend/root'

document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(RootReducers, applyMiddleware(thunk, logger));

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  // 1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF
  // 35hK24tcLEWcgNA4JxpvbkNkoAcDGqQPsP
});