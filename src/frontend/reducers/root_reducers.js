import { combineReducers } from 'redux';
import entitiesReducer from '../reducers/entities_reducer';
// import errorsReducer from '../reducers/errors/errors_reducer';

const RootReducers = combineReducers({
  entities: entitiesReducer,
  // errors: errorsReducer,
});

export default RootReducers;