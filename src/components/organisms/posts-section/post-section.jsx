import usePosts from '../../../hooks/usePosts';
import PostsList from '../../molecules/post-list/post-list';
import SkeletonList from '../../molecules/skeleton-list/skeleton-list';
import { API_BASE_LIMIT } from '../../../utilities/global';
import LoadMoreButton from '../../atoms/load-more-button/load-more-button';

export default function PostsSection() {
  const { isLoading, postsList, onLoadMore, isLoadingMore } = usePosts();

  return (
    <>
      <PostsList>
        {isLoading ? (
          <SkeletonList amount={API_BASE_LIMIT} />
        ) : (
          postsList?.map((post) => <PostsList.Body key={post.id} post={post} />)
        )}
      </PostsList>
      <LoadMoreButton loadMore={onLoadMore} isLoadingMore={isLoadingMore} />
    </>
  );
}
