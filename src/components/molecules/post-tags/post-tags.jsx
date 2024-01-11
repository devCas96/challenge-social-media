import PropTypes from 'prop-types';
import './post-tags.css';
import usePostTags from '../../../hooks/usePostTags';

export default function PostTags({ tags }) {
  const { handleFilterPostsBytag } = usePostTags();

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
