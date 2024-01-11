import PropTypes from 'prop-types';
import LikeIcon from '../../../assets/icons/like-icon.svg';
import './post-likes.css';

export default function PostLikes({ likes }) {
  return (
    <p className='post__likes'>
      <img src={LikeIcon} alt='likes' />
      {likes} likes
    </p>
  );
}

PostLikes.propTypes = {
  likes: PropTypes.number,
};
