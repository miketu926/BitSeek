import { combineReducers } from 'redux'
import entitiesReducer from '../reducers/entities_reducer'

const RootReducers = combineReducers({
  entities: entitiesReducer,
});

export default RootReducers;