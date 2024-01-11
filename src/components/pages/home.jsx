/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useCallback } from 'react';
import Layout from '../templates/layout/layout';
import { postsWithComments } from '../../utilities/posts-with-comments';
import PostServices from '../../services/post';
import PostList from '../molecules/post-list/post-list';
import { useBoundStore } from '../../hooks/stores/useBoundedStore';
import { API_BASE_LIMIT } from '../../utilities/global';
import SkeletonList from '../molecules/skeleton-list/skeleton-list';

function HomePage() {
  const dispatchPostList = useBoundStore((state) => state.setPostList);
  const dispatchLoading = useBoundStore((state) => state.handleSetLoading);

  const isLoading = useBoundStore((state) => state.isLoading);
  const posts = useBoundStore((state) => state.postList);

  const fetchPostWithComments = useCallback(async () => {
    dispatchLoading(true);

    const posts = await getPosts();
    const commentsByPost = await postsWithComments(posts);

    dispatchPostList(commentsByPost);
    dispatchLoading(false);
  }, []);

  const getPosts = async () => {
    return await PostServices.getPaginatedPosts();
  };

  useEffect(() => {
    fetchPostWithComments();
  }, []);

  return (
    <Layout>
      <PostList>
        {isLoading ? (
          <SkeletonList amount={API_BASE_LIMIT} />
        ) : (
          posts?.map((post) => <PostList.Body key={post.id} post={post} />)
        )}
      </PostList>
    </Layout>
  );
}

export default HomePage;
