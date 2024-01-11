/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';
import { useBoundStore } from './stores/useBoundedStore';
import { useCallback } from 'react';
import { postsWithComments } from '../utilities/posts-with-comments';
import PostServices from '../services/post';
import { useEffect } from 'react';
import { handleCheckReachingEnd } from '../utilities/checkers';

export default function usePosts() {
  const page = useRef(0);
  const totalPosts = useRef(0);

  //Store actions
  const dispatchPostList = useBoundStore((state) => state.setPostList);
  const dispatchLoading = useBoundStore((state) => state.handleSetLoading);
  const dispatchReachingEnd = useBoundStore((state) => state.handleSetReachEnd);
  const dispatchLoadingMore = useBoundStore(
    (state) => state.handleSetLoadingMore
  );
  //Store values
  const isLoading = useBoundStore((state) => state.isLoading);
  const isLoadingMore = useBoundStore((state) => state.isLoadingMore);
  const isFilteredByTagId = useBoundStore((state) => state.tagId);
  const postsList = useBoundStore((state) => state.postList);

  const fetchPostWithComments = useCallback(async () => {
    dispatchLoading(true);

    const posts = await getPosts(0);
    totalPosts.current = posts.total;
    const commentsByPost = await postsWithComments(posts.data);

    handleCheckReachingEnd(
      posts.length,
      totalPosts.current,
      dispatchReachingEnd
    );
    dispatchPostList(commentsByPost);
    dispatchLoading(false);
  }, [dispatchLoading, dispatchPostList]);

  const getPosts = async (_page) => {
    return await PostServices.getPaginatedPosts(_page);
  };

  const getPostsByTagId = async (_tagId, _page) => {
    return await PostServices.getPostByTagId(_tagId, _page);
  };

  const handleLoadMore = async () => {
    dispatchLoadingMore(true);
    page.current++;
    let newPosts;

    if (isFilteredByTagId !== null) {
      newPosts = await getPostsByTagId(isFilteredByTagId, page.current);
    } else {
      newPosts = await getPosts(page.current);
    }
    totalPosts.current = newPosts.total;
    const commentsByPost = await postsWithComments(newPosts.data);
    const updatedPostsList = [...postsList, commentsByPost].flat();

    handleCheckReachingEnd(
      updatedPostsList.length,
      totalPosts.current,
      dispatchReachingEnd
    );
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
    initialFetch: fetchPostWithComments,
  };
}
