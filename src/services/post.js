import { fetchInterceptor } from '../utilities/fetch-interceptor';
import { API_BASE_LIMIT } from '../utilities/global';

const PostServices = {
  getPaginatedPosts: async (_page) => {
    return await fetchInterceptor(`post?page=${_page}&limit=${API_BASE_LIMIT}`);
  },

  getCommentsByPost: async (_postId) => {
    return await fetchInterceptor(`post/${_postId}/comment`);
  },

  getPostByTagId: async (_tagId, _page) => {
    return await fetchInterceptor(
      `tag/${_tagId}/post?page=${_page}&limit=${API_BASE_LIMIT}`
    );
  },
};

export default PostServices;
