import { RECEIVE_ADDRESS_INFO, RECEIVE_MORE_INFO } from '../actions/fetch_actions';
import { merge } from 'lodash';

const entitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ADDRESS_INFO:
      return merge({}, action.payload);
    case RECEIVE_MORE_INFO:
      let state = merge({}, oldState, action.payload);
      let oldTxs = oldState.txs;
      let moreTxs = oldTxs.concat(action.payload.txs);
      state.txs = moreTxs;
      return state;
    default:
      return oldState;
  }

}

export default entitiesReducer;