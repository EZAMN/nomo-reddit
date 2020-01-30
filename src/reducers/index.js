import {combineReducers} from 'redux';
import getPosts from './getPosts';
import lastPostName from './lastPostName';
import loading from './loading';

// Reducer combiner
export default combineReducers({
  postList: getPosts,
  loading,
  lastPostName,
});
