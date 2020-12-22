import React, { useEffect } from 'react';
import PostForm from './../components/post-form';

const PostAdd = () => {
  const post = {
    title: '',
    content: '',
    author: ''
  }; 

  return (
    <div className='col-md-6'>
      <h1>Ajouter un post</h1>     
          <PostForm post={post} />     
    </div>
  );
};
export default PostAdd;
