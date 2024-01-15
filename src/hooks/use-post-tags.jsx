import useGlobalStore from './use-store';
import { postsWithComments } from '../utilities/posts-with-comments';
import Consumer from '../utilities/consumer';

export default function usePostTags() {
  const {
    dispatchers: { setLoading, setTagId, setPostList },
  } = useGlobalStore();

  const handleFilterPostsBytag = async (_tagId) => {
    setLoading(true);
    setTagId(_tagId);
    const filteredPosts = await Consumer.getPostsByTagId(_tagId, 0);
    const commentsByPost = await postsWithComments(filteredPosts.data);
    setPostList(commentsByPost);
    setLoading(false);
  };

  return {
    handleFilterPostsBytag,
  };
}
