import {
  GET_POST_DETAILS_REQUEST,
  GET_POST_DETAILS_SUCCESS,
  GET_POST_DETAILS_FAIL,
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
} from '../actions/types';

// Reducer for the loading details action
// Keeps track of the calls state to show the loading spinner or not
export default (state = false, action) => {
  switch (action.type) {
    case GET_POST_DETAILS_REQUEST:
    case GET_POSTS_REQUEST:
      return true;

    case GET_POST_DETAILS_SUCCESS:
    case GET_POST_DETAILS_FAIL:
    case GET_POSTS_SUCCESS:
    case GET_POSTS_FAIL:
      return false;

    default:
      return state;
  }
};
