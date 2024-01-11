import React from 'react';
import PropTypes from 'prop-types';
import Post from '../../organisms/post/post';
import './post-list.css';

export default function PostList({ children }) {
  return (
    <ul className='posts-list'>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) return child;

        return null;
      })}
    </ul>
  );
}

const Posts = ({ post }) => {
  return (
    <li>
      <Post postData={post} />
    </li>
  );
};

PostList.Body = Posts;

PostList.propTypes = {
  children: PropTypes.node,
};

Posts.propTypes = {
  post: PropTypes.object,
};
