import { useBoundStore } from './stores/useBoundedStore';
import { postsWithComments } from '../utilities/posts-with-comments';
import PostServices from '../services/post';

export default function usePostTags() {
  const dispatchPostList = useBoundStore((state) => state.setPostList);
  const dispatchTagId = useBoundStore((state) => state.setTagId);
  const dispatchLoading = useBoundStore((state) => state.handleSetLoading);

  const handleFilterPostsBytag = async (_tagId) => {
    dispatchLoading(true);
    dispatchTagId(_tagId);
    const filteredPosts = await getPostsByTagId(_tagId, 0);
    const commentsByPost = await postsWithComments(filteredPosts);
    dispatchPostList(commentsByPost);
    dispatchLoading(false);
  };

  const getPostsByTagId = async (_tagId, _page) => {
    return await PostServices.getPostByTagId(_tagId, _page);
  };

  return {
    handleFilterPostsBytag,
  };
}
