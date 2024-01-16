import { useBoundStore } from './stores/useBoundedStore';

export default function useGlobalStore() {
  //Global Zustand store
  const {
    setPostList,
    setLoading,
    setReachEnd,
    setLoadingMore,
    setTagId,
    setLogIn,
    setLogOut,
    isLoading,
    isLoadingMore,
    isReachingEndPosts,
    tagId,
    postList,
    authUser,
  } = useBoundStore((state) => state);

  return {
    dispatchers: {
      setPostList,
      setLoading,
      setReachEnd,
      setLoadingMore,
      setTagId,
      setLogIn,
      setLogOut,
    },
    states: {
      isLoading,
      isLoadingMore,
      tagId,
      postList,
      authUser,
      isReachingEndPosts,
    },
  };
}
