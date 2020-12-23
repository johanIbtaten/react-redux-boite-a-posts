import React, { useEffect, useState } from 'react';
import Loader from './../components/loader';
import PostContent from '../components/post-content';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../actions';

const PostDetail = ({ match }) => {
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getPost(+match.params.id)).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading ? (
        <div className='col-md-12'>
          <PostContent post={post} />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};
export default PostDetail;
