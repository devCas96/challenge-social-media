import PropTypes from 'prop-types';
import Post from '../../organisms/post/post';
import './post-list.css';

export default function PostList({ children }) {
  return <ul className='posts-list'>{children}</ul>;
}

const Posts = ({ posts, isLoadingComments }) => {
  return (
    <>
      {posts?.map((post) => (
        <li key={post.id}>
          <Post postData={post} isLoadingComments={isLoadingComments} />
        </li>
      ))}
    </>
  );
};

PostList.Body = Posts;

PostList.propTypes = {
  children: PropTypes.node,
};

Posts.propTypes = {
  posts: PropTypes.array,
  isLoadingComments: PropTypes.bool,
};
