import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PostsListItem from '../components/posts-list-item';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, deletePost, setIsAuthorFilter } from '../actions';
import confirm from '../helpers/confirm-promise';
import Loader from './../components/loader';

const PostsList = () => {
  const posts = useSelector((state) => state.posts);
  const isAuthorFilter = useSelector((state) => state.isAuthorFilter);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleInputChange = (e) => {
    let isChecked = e.target.checked;
    dispatch(setIsAuthorFilter(isChecked));
  };

  const filteredPosts = () => {
    if (isAuthorFilter) {
      return posts.filter((post) => post.author.includes('Mr.'));
    }
    return posts;
  };

  const handleDeletePost = (id) => {
    confirm('Voulez-vous vraiment supprimer ce post ?').then(() => {
      dispatch(deletePost(id)).then(() => {
        console.log('Delete Post Success'); ///////////////////////////////////////
      });
    });
    // PostService.deletePost(id).then(() => {
    //   alert('Delete Post Success');
    //   history.push(`/posts`);
    // });
    // PostService.deletePost(id).then(() => alert("Delete Post Success"));
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //dispatch(getPosts());
    dispatch(getPosts()).then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {/*JSON.stringify(isAuthorFilter)*/}
      <div className='col-md-12'>
        <h1>Boite à Posts</h1>
        <div className='form-check mb-4'>
          <input
            type='checkbox'
            className='form-check-input'
            id='authorFilter'
            onChange={(e) => handleInputChange(e)}
            checked={isAuthorFilter}
          />
          <label className='form-check-label' htmlFor='authorFilter'>
            Afficher uniquement mes posts
          </label>
        </div>
      </div>
      {!loading ? (
        <table className='table'>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <PostsListItem
              posts={filteredPosts()}
              handleClick1={handleDeletePost}
            />
          </tbody>
        </table>
      ) : (
        <tr className='text-center'>
          <td>
            <Loader />
          </td>
        </tr>
      )}
      <div className='btn-group-fab' aria-label='FAB Menu'>
        <div>
          <Link
            className='btn btn-main btn-primary has-tooltip'
            data-placement='left'
            title='Menu'
            to={`/post/add`}
          >
            <i className='fa fa-plus'></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PostsList;
