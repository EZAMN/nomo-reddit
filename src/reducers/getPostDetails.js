import {GET_POST_DETAILS_SUCCESS} from '../actions/types';

// Reducer for the getting POST details action
// On success adds the adds (or replaces if existing) the details in the state
export default (state = {}, action) => {
  switch (action.type) {
    case GET_POST_DETAILS_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
