import PostService from '../services/post-service';
import { GET_POSTS, GET_POST, DELETE_POST, SET_IS_AUTHOR_FILTER } from '../constants';

export const getPosts = () => {
  return (dispatch) => {    
    return PostService.getPosts()
      .then((response) => {
        console.log('getPosts action', response); ////////////////////////////////////////
        dispatch({
          type: GET_POSTS,
          payload: response,
        });
      })
      .catch((error) => {
        console.error('Error Post API', error);
      });
  };
};

export const getPost = (id) => {
  return (dispatch) => {
    return PostService
      .getPost(id)
      .then((response) => {
        console.log('getPost action', response); ///////////////////////////////////////
        dispatch({
          type: GET_POST,
          payload: response,
        });
      })
      .catch((error) => {
        console.error('Error Post API', error);
      });
  };
};

export const deletePost = (id) => {
  return (dispatch) => {
    return PostService.deletePost(id)
      .then((response) => {
        console.log('deletePost action', response); ///////////////////////////////////////
        dispatch({
          type: DELETE_POST,
          payload: id,
        });
      })
      .catch((error) => {
        console.error('Error Post API', error);
      });
  };
};

export const setIsAuthorFilter = (isChecked) => {
  return {
    type: SET_IS_AUTHOR_FILTER,
    payload: isChecked,
  };
      
};
