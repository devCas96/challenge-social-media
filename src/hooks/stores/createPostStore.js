export const createPostStore = (set) => ({
  postList: null,
  setPostList: (_posts) => set(() => ({ postList: _posts })),
});
