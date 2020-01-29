import {createStore} from 'redux';
import reducers from './reducers';
import getMiddlewares from './getMiddlewares';

// Build and export store
const store = createStore(reducers, getMiddlewares());

export default store;
