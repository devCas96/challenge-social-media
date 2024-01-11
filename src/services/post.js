import { fetchInterceptor } from '../utilities/fetch-interceptor';
import { API_BASE_LIMIT } from '../utilities/global';

const PostServices = {
  getPaginatedPosts: async () => {
    return await fetchInterceptor(`post?limit=${API_BASE_LIMIT}`);
  },

  getPaginatedCommentsByPost: async (_postId) => {
    return await fetchInterceptor(
      `post/${_postId}/comment?limit=${API_BASE_LIMIT}`
    );
  },

  getPostByTagId: async (_tagId) => {
    return await fetchInterceptor(`tag/${_tagId}/post?limit=${API_BASE_LIMIT}`);
  },
};

export default PostServices;
