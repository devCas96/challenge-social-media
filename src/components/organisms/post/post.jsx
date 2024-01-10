import PropTypes from 'prop-types';
import PostHeader from '../../molecules/post-header/post-header';
import PostCommentButton from '../../molecules/post-comment-button/post-comment-button';
import './post.css';
import PostTags from '../../molecules/post-tags/post-tags';
import PostLikes from '../../molecules/post-likes/post-likes';

export default function Post({ postData, isLoadingComments }) {
  const { image, likes, tags, text } = postData;
  const { firstName, id } = postData.owner;

  return (
    <div className='post'>
      <PostHeader userId={id} shortInfo={postData.owner} />
      <PostTags tags={tags} />
      <figure className='post__image'>
        <img src={image} alt={`${firstName}'s post image`} />
        <figcaption>{text}</figcaption>
      </figure>
      <PostLikes likes={likes} />
      <PostCommentButton
        comments={postData.comments}
        isLoadingComments={isLoadingComments}
      />
    </div>
  );
}

Post.propTypes = {
  postData: PropTypes.object,
  isLoadingComments: PropTypes.bool,
};
