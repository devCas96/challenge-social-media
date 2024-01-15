import PropTypes from 'prop-types';
import './post-image.css';

export default function PostImage({ image, text, alt }) {
  return (
    <figure className='post__image'>
      <img src={image} alt={alt} />
      <figcaption>{text}</figcaption>
    </figure>
  );
}

PostImage.propTypes = {
  image: PropTypes.string,
  text: PropTypes.string,
  alt: PropTypes.string,
};
