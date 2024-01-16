/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useCallback, useEffect } from 'react';
import { postsWithComments } from '../utilities/posts-with-comments';
import { handleCheckReachingEnd } from '../utilities/checkers';
import { API_INITIAL_PAGE } from '../utilities/global';
import Consumer from '../utilities/consumer';
import useGlobalStore from './use-store';

/**
 * Custom hook for managing posts, including fetching, pagination, and loading states.
 * @returns {{
 *   isLoading: boolean, // Loading state for the initial fetch
 *   isLoadingMore: boolean, // Loading state for additional paginated data
 *   onLoadMore: Function, // Function to load more posts
 *   postsList: Array, // List of posts
 *   fetchPostWithComments: Function, // Function to fetch posts with comments
 *   resetPage: Function // Function to reset the pagination to the initial page
 * }}
 */
export default function usePosts() {
  const page = useRef(API_INITIAL_PAGE);
  const totalPosts = useRef(API_INITIAL_PAGE);
  const {
    dispatchers: { setLoading, setReachEnd, setPostList, setLoadingMore },
    states: { tagId, postList, isLoading, isLoadingMore },
  } = useGlobalStore();

  //Initial fetch for getting posts and comments, and memoizes it.
  const fetchPostWithComments = useCallback(async () => {
    setLoading(true);

    const posts = await Consumer.getPaginatedPosts(API_INITIAL_PAGE);
    totalPosts.current = posts.total;
    const commentsByPost = await postsWithComments(posts.data);

    handleCheckReachingEnd(posts.length, totalPosts.current, setReachEnd);
    setPostList(commentsByPost);
    setLoading(false);
  }, [setLoading, setPostList]);

  //Load more posts checking if there is a tag selected or just the base posts
  const handleLoadMore = async () => {
    setLoadingMore(true);
    let newPosts;
    page.current++;

    if (tagId !== null) {
      newPosts = await Consumer.getPostsByTagId(tagId, page.current);
    } else {
      newPosts = await Consumer.getPaginatedPosts(page.current);
    }

    totalPosts.current = newPosts.total;
    const commentsByPost = await postsWithComments(newPosts.data);
    const updatedPostsList = [...postList, ...commentsByPost];

    handleCheckReachingEnd(
      updatedPostsList.length,
      totalPosts.current,
      setReachEnd
    );
    setPostList(updatedPostsList);
    setLoadingMore(false);
  };

  //Initial fetch
  useEffect(() => {
    fetchPostWithComments();
  }, []);

  return {
    isLoading,
    isLoadingMore,
    onLoadMore: handleLoadMore,
    postsList: postList,
    fetchPostWithComments,
    resetPage: () => (page.current = API_INITIAL_PAGE),
  };
}
