import PropTypes from 'prop-types';
import Loader from '../loader/loader';
import './load-more-button.css';

export default function LoadMoreButton({ loadMore, isLoadingMore }) {
  return (
    <button className='load-more-button' onClick={loadMore}>
      {isLoadingMore ? <Loader /> : 'Load more'}
    </button>
  );
}

LoadMoreButton.propTypes = {
  loadMore: PropTypes.func,
  isLoadingMore: PropTypes.bool,
};
