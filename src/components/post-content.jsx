import React from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';

const PostContent = ({ post }) => {
  return (
    <>
      <article>
        <header>
          <h1>{post.title}</h1>
        </header>
        <p>{post.content}</p>
        <address>{post.author}</address>
      </article>
      <Link to={`${routes.posts}`} className='btn btn-warning'>
        Retour
      </Link>
    </>
  );
};
export default PostContent;
