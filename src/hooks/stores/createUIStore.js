export const createUIStore = (set) => ({
  isLoading: false,
  isModalUserShowing: false,
  isModalCommentsShowing: false,
  handleSetModalShowing: (_modalType, _state) =>
    set(() => ({ [_modalType]: _state })),
  handleSetLoading: (_isLoading) => set(() => ({ isLoading: _isLoading })),
});
