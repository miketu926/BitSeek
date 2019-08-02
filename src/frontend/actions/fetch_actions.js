import { fetchAddress } from '../utils/api'

// CONSTANTS
export const RECEIVE_ADDRESS_INFO = 'RECEIVE_ADDRESS_INFO';

// ACTION CREATORS
const receiveAddressInfo = payload => {
  return {
    type: RECEIVE_ADDRESS_INFO,
    payload
  };
};

// THUNK ACTIONS
export const fetchAddressInfo = address => dispatch => {
  return fetchAddress(address)
    .then(payload => dispatch(receiveAddressInfo(payload)))
}