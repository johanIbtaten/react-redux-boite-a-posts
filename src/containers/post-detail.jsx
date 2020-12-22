import React, {useEffect} from 'react';
import PostContent from '../components/post-content';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../actions';

const PostDetail = ({ match }) => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPost(+match.params.id));
  }, []);

  return (
    <>
      <div className='col-md-12'>
        <PostContent post={post} />
      </div>
    </>
  );
};
export default PostDetail;
