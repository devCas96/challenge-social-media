export const createUIStore = (set) => ({
  isLoading: false,
  isLoadingMore: false,
  isModalUserShowing: false,
  isModalCommentsShowing: false,
  handleSetLoading: (_isLoading) => set(() => ({ isLoading: _isLoading })),
  handleSetLoadingMore: (_isLoadingMore) =>
    set(() => ({ isLoadingMore: _isLoadingMore })),
});
