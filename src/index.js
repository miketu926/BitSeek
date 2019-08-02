import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import RootReducers from './frontend/reducers/root_reducers'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import './styles/index.css'
import Root from './frontend/root'


import { fetchAddress } from './frontend/utils/api';
import { fetchAddressInfo } from './frontend/actions/fetch_actions'

document.addEventListener('DOMContentLoaded', () => {

  const store = createStore(RootReducers, applyMiddleware(thunk, logger));

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  //testing
  window.getState = store.getState;
  window.fetchAddress = fetchAddress;
  window.fetchAddressInfo = fetchAddressInfo;
  // fetchSingleAddress("1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF")
  //end testing

});