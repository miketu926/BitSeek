import { fetchAddress } from '../utils/api'

// CONSTANTS
export const RECEIVE_ADDRESS_INFO = 'RECEIVE_ADDRESS_INFO';
export const RECEIVE_MORE_INFO = 'RECEIVE_MORE_INFO';

// ACTION CREATORS
const receiveAddressInfo = payload => {
  return {
    type: RECEIVE_ADDRESS_INFO,
    payload
  };
};

const receiveMoreInfo = payload => {
  return {
    type: RECEIVE_MORE_INFO,
    payload
  };
};

// THUNK ACTIONS
export const fetchAddressInfo = (address, offset = 0) => dispatch => {
  return fetchAddress(address, offset)
    .then(payload => dispatch(receiveAddressInfo(payload)))
}

export const fetchMoreInfo = (address, offset = 0) => dispatch => {
  return fetchAddress(address, offset)
    .then(payload => dispatch(receiveMoreInfo(payload)))
}