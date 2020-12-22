import React from 'react';
import { Link } from 'react-router-dom';

const PostsListItem = ({ posts, handleClick1 }) => {
  return (
    <>
      {posts.map((post) => (
        <tr key={post.id}>
          <td>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </td>
          <td>
            <Link className='btn btn-primary mr-3' to={`/post/edit/${post.id}`}>
              Éditer
            </Link>            
            <button
              className='btn btn-danger'
              onClick={() => handleClick1(post.id)}
            >
              Supprimer
            </button>
          </td>
        </tr>
      ))}
    </>
  );
};
export default PostsListItem;
