import { RECEIVE_ADDRESS_INFO } from '../actions/fetch_actions';
import { merge } from 'lodash';

const entitiesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_ADDRESS_INFO:
      return merge({}, action.payload);
    default:
      return oldState;
  }

}

export default entitiesReducer;