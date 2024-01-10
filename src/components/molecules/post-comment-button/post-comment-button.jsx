import PropTypes from 'prop-types';
import Portal from '../../templates/portal/portal';
import useModal from '../../../hooks/usemodal';
import './post-comment-button.css';
import Loader from '../../atoms/loader/loader';

export default function PostCommentButton({
  comments = [],
  isLoadingComments,
}) {
  const { isModalShowing, setShowModal } = useModal();
  const commentsCounter = comments.length;

  return (
    <>
      <button
        className='post-comment-button'
        disabled={commentsCounter === 0}
        onClick={() => {
          setShowModal(true);
        }}
      >
        {isLoadingComments ? <Loader /> : <p>{commentsCounter} Comments</p>}
      </button>
      <Portal modalState={{ state: isModalShowing, setter: setShowModal }}>
        {commentsCounter ? (
          <ul className='post-comments'>
            {comments?.map((comment) => (
              <li className='post-comments__comment' key={comment.id}>
                {comment.message}
              </li>
            ))}
          </ul>
        ) : (
          <h1>There are no Comments</h1>
        )}
      </Portal>
    </>
  );
}

PostCommentButton.propTypes = {
  comments: PropTypes.array,
  isLoadingComments: PropTypes.bool,
};
