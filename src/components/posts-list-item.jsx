import React from 'react';
import { Link } from 'react-router-dom';
import { reverse } from 'named-urls';
import routes from '../routes';

const PostsListItem = ({ post, handleClick }) => {
  return (
    <tr>
      <td>
        <Link to={reverse(`${routes.post.show}`, { id: post.id })}>
          {post.title}
        </Link>
      </td>
      <td>
        <Link
          className='btn btn-primary mr-3'
          to={reverse(`${routes.post.edit}`, { id: post.id })}
        >
          Éditer
        </Link>
        <button className='btn btn-danger' onClick={() => handleClick(post.id)}>
          Supprimer
        </button>
      </td>
    </tr>
  );
};
export default PostsListItem;
