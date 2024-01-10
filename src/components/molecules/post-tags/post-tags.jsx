import PropTypes from 'prop-types';
import './post-tags.css';

export default function PostTags({ tags }) {
  return (
    <ul className='post__tags'>
      {tags?.map((tag, index) => (
        <li key={index}>
          <a to={`/tag/${tag}`}>#{tag}</a>
        </li>
      ))}
    </ul>
  );
}

PostTags.propTypes = {
  tags: PropTypes.array,
};
