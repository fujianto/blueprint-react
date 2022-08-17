import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/slice/post_slice'
import type { RootState } from '../../store'
import fetchPosts from '../../services/posts'
import { Posts } from '../../types/index'

function Home() {
  const posts = useSelector((state: RootState) => state.posts.value)
  const dispatch = useDispatch()

  useEffect(() => {
    fetchPosts('https://jsonplaceholder.typicode.com/posts').then(data => {
      dispatch(getPosts(data as Posts))
    })
  }, [])


  return (
    <div>
      <>
        <Link to="/about">About</Link>
        Home

        <h2>Posts</h2>
        {
          posts.map((post, idx) => 
            <div key={post.id + idx}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          )
        }
      </>
    </div>
  )
}

export default Home