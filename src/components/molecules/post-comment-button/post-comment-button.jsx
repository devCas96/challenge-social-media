import PropTypes from 'prop-types';
import Portal from '../../templates/portal/portal';
import useModal from '../../../hooks/use-modal';
import { useShallow } from 'zustand/react/shallow';
import { useBoundStore } from '../../../hooks/stores/useBoundedStore';
import './post-comment-button.css';

export default function PostCommentButton({ comments = [] }) {
  const { isModalShowing, setShowModal } = useModal();
  const commentsByPost =
    useBoundStore(useShallow((state) => state.postList.comments)) || comments;

  return (
    <>
      <button
        className='post-comment-button'
        disabled={commentsByPost.length === 0}
        onClick={() => {
          setShowModal(true);
        }}
      >
        {commentsByPost.length} Comments
      </button>
      <Portal
        modalState={{
          state: isModalShowing,
          setter: setShowModal,
        }}
      >
        {commentsByPost.length ? (
          <ul className='post-comments'>
            {commentsByPost?.map((comment) => (
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
};
