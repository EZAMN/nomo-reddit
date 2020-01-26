import {ToastAndroid as toast} from 'react-native';
import { getPostList, getPostDetails } from '../api';
import {
  GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAIL,
  GET_POST_DETAILS_REQUEST, GET_POST_DETAILS_SUCCESS, GET_POST_DETAILS_FAIL,
} from './types';


/* Async Actions */

// Function to show errors in toast formats
const catchToast = (error) => { toast.error(`Error ${error}`); };

// Action to get a list of Posts from the api
export const getPosts = (page) => async (dispatch) => {
  dispatch({
    type: GET_PostS_REQUEST,
  });

  const promise = await getPostList(page).catch(catchToast);

  if (typeof promise !== 'undefined' && promise.status === 200) {
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: {
        page: page,
        data: promise.response.data.children
      }
    });
  } else {
    dispatch({
      type: GET_POSTS_FAIL,
    });
    if (typeof promise === 'undefined') catchToast('400: Cannot reach server');
    else catchToast(`${promise.status}: ${promise.response.error}`);
  }
};

// Action to get a specific Post from the api
export const selectPost = (id) => async (dispatch) => {
  dispatch({
    type: GET_POST_DETAILS_REQUEST,
  });

  const promise = await getPostDetails(id).catch(catchToast);

  if (typeof promise !== 'undefined' && promise.status === 200) {
    dispatch({
      type: GET_POST_DETAILS_SUCCESS,
      payload: promise.response[0],
    });
  } else {
    dispatch({
      type: GET_POST_DETAILS_FAIL,
    });
    if (typeof promise === 'undefined') catchToast('400: Cannot reach server');
    else catchToast(`${promise.status}: ${promise.response.error}`);
  }
};
