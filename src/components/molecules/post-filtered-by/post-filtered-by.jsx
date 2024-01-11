import PropTypes from 'prop-types';
import { useBoundStore } from '../../../hooks/stores/useBoundedStore';
import './post-filtered-by.css';

export default function PostFilteredBy({ handleResetPosts }) {
  const tagId = useBoundStore((state) => state.tagId);
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
