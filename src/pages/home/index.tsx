import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../store/slice/post_slice'
import type { RootState } from '../../store'

export default function Home() {
  const post = useSelector((state: RootState) => state.posts.value)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch(getPosts(data))
      });
  }, [])


  return (
    <div>
      <Link to="/about">About</Link>
      Home
    </div>
  )
}
