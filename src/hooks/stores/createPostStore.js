export const createPostStore = (set) => ({
  postList: null,
  tagId: null,
  setPostList: (_posts) => set(() => ({ postList: _posts })),
  setTagId: (_tagId) => set(() => ({ tagId: _tagId })),
});
