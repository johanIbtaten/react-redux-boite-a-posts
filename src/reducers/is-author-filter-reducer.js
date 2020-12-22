import { SET_IS_AUTHOR_FILTER } from '../constants';

const initialState = false;

const isAuthorFilterReducer = (state = initialState, action) => {
  console.log('isAuthorFilterReducer'); ///////////////////////////////////////
  switch (action.type) {
    case SET_IS_AUTHOR_FILTER:
      console.log('action.payload isAuthorFilterReducer', action.payload); ///////////////////////////////////////
      return action.payload;
    default:
      return state;
  }
};

export default isAuthorFilterReducer;
