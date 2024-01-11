import './skeleton.css';

export default function Skeleton() {
  return (
    <div className='skeleton-post'>
      <div className='skeleton-post__header'>
        <span className='skeleton-post__circle' />
        <span className='skeleton-post__line' />
      </div>
      <ul className='skeleton-post__tags'>
        {Array(3)
          .fill(0)
          .map((_, index) => (
            <li key={index} />
          ))}
      </ul>
      <div className='skeleton-post__image'>
        <span className='skeleton-post__block' />
      </div>
      <div className='post__likes'>
        <span className='skeleton-post__line' />
      </div>
    </div>
  );
}
