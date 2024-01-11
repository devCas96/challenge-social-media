import PostServices from '../services/post';

/**
 * Adds comments to each post in a list of posts.
 * @param {Array} posts - List of posts to which comments will be added.
 * @returns {Promise<Array>} - A promise that resolves to a list of posts with comments.
 */
export const postsWithComments = async (posts) => {
  // Use Promise.all to perform asynchronous operations in parallel for each post.
  const postsWithComments = await Promise.all(
    posts.map(async (post) => {
      // Get paginated comments for a post using the PostServices service.
      const postComments = await PostServices.getCommentsByPost(post.id);

      return {
        ...post,
        comments: postComments.data,
      };
    })
  );

  return postsWithComments;
};
