import PropTypes from 'prop-types';
import PostServices from '../../../services/post';
import './post-tags.css';
import { postsWithComments } from '../../../utilities/posts-with-comments';
import { useBoundStore } from '../../../hooks/stores/useBoundedStore';

export default function PostTags({ tags }) {
  const dispatchPostList = useBoundStore((state) => state.setPostList);
  const dispatchLoading = useBoundStore((state) => state.handleSetLoading);

  const handleFilterPostsBytag = async (_tagId) => {
    dispatchLoading(true);
    const filteredPosts = await getPostsByTagId(_tagId);
    const commentsByPost = await postsWithComments(filteredPosts);
    dispatchPostList(commentsByPost);
    dispatchLoading(false);
  };

  const getPostsByTagId = async (_tagId) => {
    return await PostServices.getPostByTagId(_tagId);
  };

  return (
    <ul className='post__tags'>
      {tags?.map((tag, index) => (
        <li key={index}>
          <button
            onClick={() => {
              handleFilterPostsBytag(tag);
            }}
          >
            #{tag}
          </button>
        </li>
      ))}
    </ul>
  );
}

PostTags.propTypes = {
  tags: PropTypes.array,
};
