export const createUIStore = (set) => ({
  isLoading: false,
  isLoadingMore: false,
  isModalUserShowing: false,
  isModalCommentsShowing: false,
  isReachingEndPosts: false,
  handleSetReachEnd: (_isReachingEnd) =>
    set(() => ({ isReachingEndPosts: _isReachingEnd })),
  handleSetLoading: (_isLoading) => set(() => ({ isLoading: _isLoading })),
  handleSetLoadingMore: (_isLoadingMore) =>
    set(() => ({ isLoadingMore: _isLoadingMore })),
});
