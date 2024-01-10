import { useState, useEffect } from 'react';
import Layout from '../templates/layout/layout';
import { postsWithComments } from '../utilities/posts-with-comments';
import PostServices from '../../services/post';
import PostList from '../molecules/post-list/post-list';

export default function HomePage() {
  const [posts, setPosts] = useState(null);
  const [isLoadingComments, setLoadingComments] = useState(false);

  const getPosts = async () => {
    setLoadingComments(true);
    const posts = await PostServices.getPaginatedPosts();
    setPosts(posts);
    const commentsByPost = await postsWithComments(posts);
    setPosts(commentsByPost);
    setLoadingComments(false);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <PostList>
        <PostList.Body posts={posts} isLoadingComments={isLoadingComments} />
      </PostList>
    </Layout>
  );
}
