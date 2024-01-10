import PropTypes from 'prop-types';
import './post.css';

export default function Post({ postData }) {
  const { image, likes, tags, text } = postData;
  const { firstName, lastName, picture } = postData.owner;

  return (
    <div className='post'>
      <button className='post__header'>
        <img src={picture} alt={`${firstName}'s profile picture`} />
        <p>{`${firstName} ${lastName}`}</p>
      </button>
      <ul className='post__tags'>
        {tags?.map((tag, index) => (
          <li key={index}>
            <a href={`/tag/${tag}`}>#{tag}</a>
          </li>
        ))}
      </ul>
      <figure className='post__image'>
        <img src={image} alt={`${firstName}'s post image`} />
        <figcaption>{text}</figcaption>
      </figure>
      <p className='post__likes'>
        <span></span>
        {likes} likes
      </p>
    </div>
  );
}

Post.propTypes = {
  postData: PropTypes.object,
};
