import PostServices from '../services/post';

const Consumer = {
  getPaginatedPosts: async (_page) => {
    return await PostServices.getPaginatedPosts(_page);
  },

  getPostsByTagId: async (_tagId, _page) => {
    return await PostServices.getPostByTagId(_tagId, _page);
  },
};

export default Consumer;
