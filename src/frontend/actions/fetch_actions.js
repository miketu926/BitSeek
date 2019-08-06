import { fetchAddress } from '../utils/api'

export const RECEIVE_ADDRESS_INFO = 'RECEIVE_ADDRESS_INFO';
export const RECEIVE_MORE_INFO = 'RECEIVE_MORE_INFO';
export const REMOVE_INFO = 'REMOVE_INFO'

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

export const removeInfo = () => {
  return {
    type: REMOVE_INFO,
  }
}

export const fetchAddressInfo = (address, offset = 0) => dispatch => {
  return fetchAddress(address, offset)
    .then(payload => dispatch(receiveAddressInfo(payload)))
}

export const fetchMoreInfo = (address, offset = 0) => dispatch => {
  return fetchAddress(address, offset)
    .then(payload => dispatch(receiveMoreInfo(payload)))
}