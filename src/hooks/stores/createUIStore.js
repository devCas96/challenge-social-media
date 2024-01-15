export const createUIStore = (set) => ({
  isLoading: false,
  isLoadingMore: false,
  isModalUserShowing: false,
  isModalCommentsShowing: false,
  isReachingEndPosts: false,
  setReachEnd: (_isReachingEnd) =>
    set(() => ({ isReachingEndPosts: _isReachingEnd })),
  setLoading: (_isLoading) => set(() => ({ isLoading: _isLoading })),
  setLoadingMore: (_isLoadingMore) =>
    set(() => ({ isLoadingMore: _isLoadingMore })),
});
