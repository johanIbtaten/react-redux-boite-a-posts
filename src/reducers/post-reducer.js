import { GET_POST } from '../constants';

const initialState = [];

const postReducer = (state = initialState, action) => {
  console.log('postReducer'); ///////////////////////////////////////
  switch (action.type) {
    case GET_POST:
      console.log('action.payload postReducer', action.payload); ///////////////////////////////////////
      return action.payload;
    default:
      return state;
  }
};

export default postReducer;