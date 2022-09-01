import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { setPosts } from '../../store/slices/posts';
import { useAppDispatch, useAppSelector } from '../../store/hook';
import fetchPosts from '../../services/posts';
import { Posts } from '../../types/index';

function Home() {
  const posts = useAppSelector((state) => state.posts.value);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchPosts<Posts>('https://jsonplaceholder.typicode.com/posts').then((data) => {
      dispatch(setPosts({ data: data as Posts, status: 'success' }));
    });
  }, []);

  return (
    <div>
      <>
        <Link to="/about">About</Link>
        Home
        <h2>Posts</h2>
        {posts.map((post, idx) => (
          <div key={post.id + idx}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </>
    </div>
  );
}

export default Home;
