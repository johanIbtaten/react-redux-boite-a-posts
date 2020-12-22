import { DELETE_POST, GET_POSTS } from '../constants';

const initialState = [];

const postsReducer = (state = initialState, action) => {
  console.log('postsReducer'); ///////////////////////////////////////
  switch (action.type) {
    case GET_POSTS:
      console.log('action.payload postsReducer', action.payload); ///////////////////////////////////////
      return action.payload;
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    default:
      return state;
  }
};

export default postsReducer;