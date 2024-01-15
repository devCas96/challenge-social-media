import PropTypes from 'prop-types';
import usePostTags from '../../../hooks/use-post-tags';
import handleGoToTop from '../../../utilities/go-to-top';
import './post-tags.css';

export default function PostTags({ tags }) {
  const { handleFilterPostsBytag } = usePostTags();

  return (
    <ul className='post__tags'>
      {tags?.map((tag, index) => (
        <li key={index}>
          <button
            onClick={() => {
              handleFilterPostsBytag(tag);
              handleGoToTop();
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
