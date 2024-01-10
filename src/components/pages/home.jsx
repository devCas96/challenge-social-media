import { useState, useEffect } from 'react';
import Layout from '../templates/layout/layout';
import { postsWithComments } from '../utilities/posts-with-comments';
import PostServices from '../../services/post';
import PostList from '../molecules/post-list/post-list';

export default function HomePage() {
  const [posts, setPosts] = useState(null);

  const getPosts = async () => {
    const posts = await PostServices.getPaginatedPosts();
    setPosts(posts);
    const commentsByPost = await postsWithComments(posts);
    setPosts(commentsByPost);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Layout>
      <PostList>
        <PostList.Body posts={posts} />
      </PostList>
    </Layout>
  );
}
