import React from 'react';
import { Link } from 'react-router-dom';

const PostContent = ({ post }) => {
  return (
    <>
      <article>
        {post.id}
        <header>
          <h1>{post.title}</h1>
        </header>
        <p>{post.content}</p>
        <address>{post.author}</address>
      </article>
      <Link to={`/posts`} className='btn btn-warning'>
        Retour
      </Link>
    </>
  );
};
export default PostContent;
