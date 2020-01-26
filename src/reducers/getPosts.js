import {GET_POSTS_SUCCESS} from '../actions/types';

// Reducer for the get POSTs list action
// on success adds the list of POSTs to the current list
export default (state = [], action) => {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      if (action.payload.page === 1) {
        return [...action.payload.data];
      }
      return [...state, ...action.payload];
    default:
      return state;
  }
};
