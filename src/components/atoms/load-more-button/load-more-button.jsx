import PropTypes from 'prop-types';
import Loader from '../loader/loader';
import './load-more-button.css';

export default function LoadMoreButton({
  loadMore,
  isLoadingMore,
  isReachingEnd = false,
}) {
  return (
    <button
      className='load-more-button'
      onClick={loadMore}
      disabled={isReachingEnd}
    >
      {isLoadingMore ? (
        <Loader />
      ) : isReachingEnd ? (
        'Congrats! you reach the end.'
      ) : (
        'Load more'
      )}
    </button>
  );
}

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func,
  isLoadingMore: PropTypes.bool,
  isReachingEnd: PropTypes.bool,
};
