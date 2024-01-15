import usePosts from '../../../hooks/use-posts';
import PostsList from '../../molecules/post-list/post-list';
import SkeletonList from '../../molecules/skeleton-list/skeleton-list';
import LoadMoreButton from '../../atoms/load-more-button/load-more-button';
import PostFilteredBy from '../../molecules/post-filtered-by/post-filtered-by';
import { API_PAGINATION_LIMIT } from '../../../utilities/global';
import useGlobalStore from '../../../hooks/use-store';

export default function PostsSection() {
  const {
    isLoading,
    postsList,
    onLoadMore,
    isLoadingMore,
    fetchPostWithComments,
    resetPage,
  } = usePosts();

  const {
    dispatchers: { setTagId },
    states: { isReachingEndPosts },
  } = useGlobalStore();

  return (
    <>
      <PostFilteredBy
        handleResetPosts={() => {
          setTagId(null);
          resetPage();
          fetchPostWithComments();
        }}
      />
      <PostsList>
        {isLoading ? (
          <SkeletonList amount={API_PAGINATION_LIMIT} />
        ) : (
          postsList?.map((post) => <PostsList.Body key={post.id} post={post} />)
        )}
      </PostsList>
      <LoadMoreButton
        loadMore={onLoadMore}
        isLoadingMore={isLoadingMore}
        isReachingEnd={isReachingEndPosts}
      />
    </>
  );
}
