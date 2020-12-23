import React, { useEffect, useState } from 'react';
import Loader from './../components/loader';
import PostForm from './../components/post-form';
import { useSelector, useDispatch } from 'react-redux';
import { getPost } from '../actions';

const PostEdit = ({ match }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const post = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPost(+match.params.id)).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className='col-md-6'>
      <h1>Editer le post</h1>
      {!loading ? <PostForm post={post} isEdit /> : <Loader />}
    </div>
  );
};
export default PostEdit;
