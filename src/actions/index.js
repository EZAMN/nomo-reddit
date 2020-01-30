import {ToastAndroid as toast} from 'react-native';
import {getPostsList} from '../api';
import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL} from './types';

/* Async Actions */

// Function to show errors in toast formats
const catchToast = error => {
  toast.show(`Error ${error}`);
};

// Action to get a list of Posts from the api
export const getPosts = (page, sort, lastPostName) => async dispatch => {
  dispatch({
    type: GET_POSTS_REQUEST,
  });

  const promise = await getPostsList(sort, lastPostName).catch(catchToast);

  if (typeof promise !== 'undefined' && promise.status === 200) {
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: {
        page: page,
        data: promise.response.data.children,
      },
    });
  } else {
    dispatch({
      type: GET_POSTS_FAIL,
    });
    if (typeof promise === 'undefined') {
      catchToast('400: Cannot reach server');
    } else {
      catchToast(`${promise.status}: ${promise.response.error}`);
    }
  }
};
