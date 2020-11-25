import { combineReducers } from 'redux';
import productsReducer from './products_reducers';
import availabilityReducer from './availability_reducer';

export * from './products_reducers';
export * from './availability_reducer';

export default combineReducers({
    products: productsReducer,
    availabilities: availabilityReducer
});