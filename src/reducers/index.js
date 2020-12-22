import { combineReducers } from 'redux';
import postsReducer from './posts-reducer';
import postReducer from './post-reducer';
import isAuthorFilterReducer from './is-author-filter-reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  post: postReducer,
  isAuthorFilter: isAuthorFilterReducer,
});

export default rootReducer;
