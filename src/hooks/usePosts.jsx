/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import { useBoundStore } from './stores/useBoundedStore';
import { useCallback } from 'react';
import { postsWithComments } from '../utilities/posts-with-comments';
import PostServices from '../services/post';
import { useEffect } from 'react';

export default function usePosts() {
  const page = useRef(0);

  //Store actions
  const dispatchPostList = useBoundStore((state) => state.setPostList);
  const dispatchLoading = useBoundStore((state) => state.handleSetLoading);
  const dispatchLoadingMore = useBoundStore(
    (state) => state.handleSetLoadingMore
  );
  //Store values
  const isLoading = useBoundStore((state) => state.isLoading);
  const isLoadingMore = useBoundStore((state) => state.isLoadingMore);
  const postsList = useBoundStore((state) => state.postList);

  const fetchPostWithComments = useCallback(async () => {
    dispatchLoading(true);

    const posts = await getPosts(0);
    const commentsByPost = await postsWithComments(posts);

    dispatchPostList(commentsByPost);
    dispatchLoading(false);
  }, [dispatchLoading, dispatchPostList]);

  const getPosts = async (_page) => {
    return await PostServices.getPaginatedPosts(_page);
  };

  const handleLoadMore = async () => {
    dispatchLoadingMore(true);
    page.current++;

    const newPosts = await getPosts(page.current);
    const commentsByPost = await postsWithComments(newPosts);
    const updatedPostsList = [...postsList, commentsByPost].flat();

    dispatchPostList(updatedPostsList);
    dispatchLoadingMore(false);
  };

  //Initial fetch
  useEffect(() => {
    fetchPostWithComments();
  }, []);

  return {
    isLoading,
    isLoadingMore,
    onLoadMore: handleLoadMore,
    postsList,
  };
}
