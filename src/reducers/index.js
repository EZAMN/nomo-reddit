import {combineReducers} from 'redux';
import getPosts from './getPosts';
import getPostDetails from './getPostDetails';
import loading from './loading';

// Reducer combiner
export default combineReducers({
  postList: getPosts,
  postDetails: getPostDetails,
  loading,
});
