import PropTypes from 'prop-types';
import useGlobalStore from '../../../hooks/use-store';
import './post-filtered-by.css';

export default function PostFilteredBy({ handleResetPosts }) {
  const {
    states: { tagId },
  } = useGlobalStore();

  return (
    <>
      {tagId && (
        <h2 className='post-filtered-by'>
          Filtered By: <span>{tagId}</span>
          <button onClick={handleResetPosts}>X</button>
        </h2>
      )}
    </>
  );
}

PostFilteredBy.propTypes = {
  handleResetPosts: PropTypes.func,
};
